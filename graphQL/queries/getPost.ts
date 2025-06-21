export const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
      user {
        name
        username
        id
        company {
          name
        }
        email
      }
      comments {
        data {
          name
          body
          email
        }
      }
    }
  }
`;
