export const GET_POSTS = gql`
  query GetPosts($page: Int!, $limit: Int!) {
    posts(options: { paginate: { page: $page, limit: $limit } }) {
      data {
        id
        title
        body
        user {
          id
          name
          username
          email
        }
        comments {
          meta {
            totalCount
          }
        }
      }
    }
  }
`;
