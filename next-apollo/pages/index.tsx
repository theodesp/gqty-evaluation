
import Head from 'next/head'
import postsQuery from './posts.graphql';
import "../styles/pages/home.module.scss";
import React from "react";
import Header from "../components/header";
import Posts from "../components/posts";
import {GetPostList, GetPostList_posts_nodes} from "../types";
import {getPosts} from "./getPosts";

interface Post {
  excerpt(): string;
  id: string;
  databaseId: number;
  title: string;
  slug: string;
}

interface Props {
  posts: GetPostList_posts_nodes[]
}

function Home({posts}: Props) {
  return (
    <>
      <Header
        title={""}
        description={""}
      />

      <Head>
        <title>
          {""} - {""}
        </title>
      </Head>

      <main className="content">
        <section>
          <div className="wrap">
            <h2>Explore this Example Project</h2>
            <p>
              This headless example project uses{' '}
              <a href="https://nextjs.org/">Next.js</a>,{' '}
              <a href="https://graphql.org/">GraphQL</a>,{' '}
              <a href="https://gqty.dev">GQty</a> and the{' '}
              <a href="https://github.com/wpengine/faustjs">
                WP&nbsp;Engine headless packages
              </a>{' '}
              for WordPress integration. Dive in and edit this template at{' '}
              <code>src/pages/index.tsx</code> or discover more below.
            </p>
            <div>
              <div>
                <h3>Global Styles and Fonts</h3>
                <p>
                  Add styles to load on every page, such as typography and
                  layout rules, in <code>src/scss/main.scss</code>. The project
                  adds{' '}
                  <a href="https://necolas.github.io/normalize.css/">
                    normalize.css
                  </a>{' '}
                  in <code>src/pages/_app.tsx</code>. Google Fonts are enqueued
                  in <code>src/pages/_document.tsx</code>.
                </p>
              </div>

              <div>
                <h3>Components</h3>
                <p>
                  Add or edit components in the <code>src/components</code>{' '}
                  folder. Find component styles at{' '}
                  <code>src/scss/components</code>, which use{' '}
                  <a href="https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css">
                    CSS modules
                  </a>{' '}
                  to scope CSS to each component.
                </p>
              </div>

              <div>
                <h3>Hooks</h3>
                <p>
                  Fetch data from WordPress with <code>usePost</code>,{' '}
                  <code>usePosts</code>, <code>useGeneralSettings</code> and
                  other custom hooks. Use these hooks in your page templates to
                  pass data to custom components. See{' '}
                  <code>src/pages/index.tsx</code> for examples.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Posts
          posts={posts}
          heading="Latest Posts"
          intro="The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site."
          headingLevel="h2"
          postTitleLevel="h3"
        />
      </main>
    </>
  )
}

interface PostsData {
  posts: {
    nodes: Post[]
  }
}

export async function getServerSideProps() {
  const posts = await getPosts();

  return {
    props: {
      posts: posts
    },
  };
}


export default Home
