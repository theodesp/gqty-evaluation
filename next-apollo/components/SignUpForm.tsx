import React from "react";
import { gql, useMutation } from '@apollo/client';
import Link from "next/link";

export interface FormData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export const mutation = gql`
    mutation RegisterUser($input: RegisterUserInput = {username: "", firstName: "", email: ""}) {
        registerUser(input: $input) {
            user {
                id
                databaseId
            }
        }
    }`


export default function SignUpForm() {
  const [registerUser, { data, loading, error }] = useMutation(mutation);

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;

  const wasSignUpSuccessful = Boolean(data);

  console.log("data", data);
  console.log("error", error);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(data) as unknown as FormData;
    values["username"] = values["email"];

    await registerUser({
      variables: {
        input: {
          username: values["username"],
          email: values["email"],
          firstName: values["firstName"]
        }
      }

    })
      .catch((err) => {
        console.log("Error catch", err);
      })
      .then((user) => {
        console.log("THen", user);
      });
  };

  if (wasSignUpSuccessful) {
    return (
      <p>
        Thanks! Check your email – an account confirmation link has been sent to
        you.
      </p>
    );
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          autoComplete="given-name"
          required
        />
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          autoComplete="family-name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="username"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </fieldset>
      <p>
        Already have an account?{" "}
        <Link href="/log-in">
          <a>Log in</a>
        </Link>
      </p>
    </form>
  );
}
