import { gql } from '@apollo/client';

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export default { ADD_POST: GET_SUBREDDIT_BY_TOPIC };
