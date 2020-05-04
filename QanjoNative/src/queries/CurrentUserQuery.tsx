import gql from 'graphql-tag';

export default gql`
  query CurrentUser {
    currentUser {
      username
      email
      bands {
        band_name
      }
    }
  }
`;
