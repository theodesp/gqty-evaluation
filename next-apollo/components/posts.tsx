import React from 'react';
import Link from 'next/link';
import '../styles/components/Posts.module.scss';
import {GetPostList_posts_nodes} from "../types";

interface Props {
  posts: GetPostList_posts_nodes[];
  intro?: string;
  id?: string;
  heading?: string;
  readMoreText?: string;
}

function Posts({
                 posts,
                 intro,
                 heading,
                 id,
                 readMoreText = 'Read more',
               }: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <section {...(id && { id })}>
      <div className="wrap">
        {intro && <p>{intro}</p>}
        <div className="posts">
          {posts?.map((post) => (
            <div
              key={post.id ?? ''}
              id={`post-${post.id}`}>
              <div>
                <h1>{heading}</h1>
                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: post.excerpt ?? '' }}
                />
                <Link href={`/posts/${post.slug}`}>
                  <a aria-label={`Read more about ${post.title || 'the post'}`}>
                    {readMoreText}
                  </a>
                </Link>
              </div>
            </div>
          ))}
          {posts && posts?.length < 1 && <p>No posts found.</p>}
        </div>
      </div>
    </section>
  );
}

export default Posts;
