import { useSession } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import Avatar from './Avatar';

type FormData = {
  postTitle: string;
  postBody: string;
  postImage: string;
  subreddit: string;
};

const PostBox: FC = function () {
  const { data: session } = useSession();
  const {
    register,
    // setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const [imageBoxOpen, setImageBoxOpen] = useState<boolean>(false);

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData);
  });
  return (
    <form
      className="sticky z-50 p-2 bg-white border border-gray-300 rounded-md top-16"
      onSubmit={onSubmit}
    >
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register('postTitle', { required: true })}
          disabled={!session}
          className="flex-1 p-2 pl-5 rounded-md outline-none bg-gray-50"
          type="text"
          placeholder={
            session ? 'Create a post by entering a title' : 'Sign in to post'
          }
        />

        <PhotographIcon
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && 'text-blue-300'
          }`}
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
        />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

      {!!watch('postTitle') && (
        <div className="flex flex-col py-2">
          <div className="flex items-center px-2 ">
            <p className="min-w-[90px]">Body</p>
            <input
              {...register('postBody')}
              className="flex-1 p-2 m-2 outline-none bg-blue-50"
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Subreddit:</p>
            <input
              className="flex-1 p-2 m-2 outline-none bg-blue-50"
              {...register('subreddit', { required: true })}
              placeholder="i.e. reactjs"
              type="text"
            />
          </div>

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                className="flex-1 p-2 m-2 outline-none bg-blue-50"
                {...register('postImage')}
                placeholder="Optional..."
                type="text"
              />
            </div>
          )}

          {/* Errors */}
          {Object.keys(errors).length > 0 && (
            <div className="p-2 space-y-2 text-red-500">
              {errors.postTitle?.type === 'required' && (
                <p>A post title is required</p>
              )}

              {errors.subreddit?.type === 'required' && (
                <p>A subreddit is required</p>
              )}
            </div>
          )}

          {!!watch('postTitle') && (
            <button
              type="submit"
              className="w-full text-white bg-blue-500 rounded-full"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
};

export default PostBox;
