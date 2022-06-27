import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Post from '../../components/Post';
import { GET_POST_BY_POST_ID } from '../../graphql/queries';

const PostPage: NextPage = function () {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: { post_id: router.query.postId },
  });

  const post: Post = data?.getPostByPostId;
  return (
    <div className="max-w-5xl mx-auto my-7">
      <Post post={post} />
    </div>
  );
};

export default PostPage;