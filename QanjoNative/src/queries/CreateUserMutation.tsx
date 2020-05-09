import gql from 'graphql-tag';

export default gql`
  mutation CreateUser($username: String!, $password: String!, $email: String!) {
    createUser(username: $username, password: $password, email: $email) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;
