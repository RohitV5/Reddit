import React, { FC } from 'react';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from '@heroicons/react/outline';
import TimeAgo from 'react-timeago';
import Avatar from './Avatar';

type Props = {
  post: Post;
};

const Post: FC<Props> = function ({ post }) {
  return (
    <div className="flex bg-white border border-gray-300 rounded-md shadow-sm cursor-pointer hover:border hover:border-gray-600">
      {/* Left Area Votes */}
      <div className="flex flex-col items-center justify-start space-y-1 text-gray-400 rounded-l-md bg-gray-50">
        <ArrowUpIcon className="voteButtons hover:text-red-400" />
        <p className="text-xs font-bold text-black">0</p>
        <ArrowDownIcon className="voteButtons hover:text-blue-400 hover:underline" />
      </div>

      {/* Right Area */}
      <div className="p-3 pb-1">
        {/* Post Header */}
        <div>
          <Avatar seed={post.subreddit[0]?.topic} />
          <p className="text-xs text-gray-400">
            <span className="font-bold text-black hover:text-blue-400">
              r/{post.subreddit[0].topic}
            </span>
            . Posted by u/ {post.username} <TimeAgo date={post.created_at} />
          </p>
        </div>

        {/* Post Body */}
        <div className="py-4">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="mt-2 text-sm font-light">{post.body}</p>
        </div>

        {/* Image  */}
        <img
          className="w-full"
          src={post.image}
          alt={`${post.subreddit[0]?.topic}`}
        />

        {/* Footer */}
        <div className="flex space-x-4 text-gray-400">
          <div className="postButtons">
            <ChatAltIcon className="w-6 h-6" />
            <p className="">{post?.comments.length} Comments</p>
          </div>
          <div className="postButtons">
            <GiftIcon className="w-6 h-6" />
            <p className="hidden sm:inline">Award</p>
          </div>
          <div className="postButtons">
            <ShareIcon className="w-6 h-6" />
            <p className="hidden sm:inline">Share</p>
          </div>
          <div className="postButtons">
            <BookmarkIcon className="w-6 h-6" />
            <p className="hidden sm:inline">Save</p>
          </div>
          <div className="postButtons">
            <DotsHorizontalIcon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
