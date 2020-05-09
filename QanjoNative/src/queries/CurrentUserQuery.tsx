import gql from 'graphql-tag';

export default gql`
  query CurrentUser {
    currentUser {
      id
      username
      email
      defaultBand {
        id
        band_name
      }
      bands {
        band_name
      }
    }
  }
`;
