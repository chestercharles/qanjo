import gql from 'graphql-tag';

export default gql`
  query CurrentSongs {
    currentSongs {
      id
      title
      key
    }
  }
`;
