import gql from 'graphql-tag';

export default gql`
  mutation CreateSong($title: String!, $key: String!, $band_id: String!) {
    createSong(title: $title, key: $key, band_id: $band_id) {
      id
      key
      title
    }
  }
`;
