import SignUpForm from "../components/SignUpForm";

export default function Page() {

  return (
    <>
      <main className="content content-single">
        <div className="wrap">
          <SignUpForm />
        </div>
      </main>
    </>
  );
}

// export async function getStaticProps(context: GetStaticPropsContext) {
//   return getNextStaticProps(context, {
//     Page,
//     client,
//   });
// }
