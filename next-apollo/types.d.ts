

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterUser
// ====================================================

export interface RegisterUser_registerUser_user {
  id: string;          // The globally unique identifier for the user object.
  databaseId: number;  // Identifies the primary key from the database.
}

export interface RegisterUser_registerUser {
  user: RegisterUser_registerUser_user | null;  // The User object mutation type.
}

export interface RegisterUser {
  registerUser: RegisterUser_registerUser | null;  // The payload for the registerUser mutation
}

export interface RegisterUserVariables {
  input?: RegisterUserInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetPostList
// ====================================================

export interface GetPostList_posts_nodes {
  excerpt: string | null;  // The excerpt of the post.
  id: string;              // The globally unique identifier of the post object.
  databaseId: number;      // The unique resource identifier path
  title: string | null;    // The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
  slug: string | null;     // The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
}

export interface GetPostList_posts {
  nodes: (GetPostList_posts_nodes | null)[] | null;  // The nodes of the connection, without the edges
}

export interface GetPostList {
  posts: GetPostList_posts | null;  // Connection between the RootQuery type and the post type
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

// Input for the registerUser mutation
export interface RegisterUserInput {
  aim?: string | null;
  clientMutationId?: string | null;
  description?: string | null;
  displayName?: string | null;
  email?: string | null;
  firstName?: string | null;
  jabber?: string | null;
  lastName?: string | null;
  locale?: string | null;
  nicename?: string | null;
  nickname?: string | null;
  password?: string | null;
  registered?: string | null;
  richEditing?: string | null;
  username: string;
  websiteUrl?: string | null;
  yim?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================