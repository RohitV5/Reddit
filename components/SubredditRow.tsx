import { ChevronUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { FC } from 'react';
import Avatar from './Avatar';

type Props = {
  topic: string;
  id: number;
};

const SubredditRow: FC<Props> = function ({ id, topic }) {
  return (
    <div className="flex items-center px-4 py-2 space-x-2 bg-white border-t last:rounded-b">
      <p>{id + 1}</p>
      <ChevronUpIcon className="w-4 h-4 text-green-400 shrink-0" />
      <Avatar seed={`/subreddit/${topic}`} />
      <p className="flex-1 truncate">r/{topic}</p>
      <Link href={`/subreddit/${topic}`}>
        <div className="px-3 text-white bg-blue-500 rounded-full cursor-pointer">
          View
        </div>
      </Link>
    </div>
  );
};

export default SubredditRow;
