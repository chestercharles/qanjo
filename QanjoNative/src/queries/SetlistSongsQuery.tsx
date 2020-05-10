import gql from 'graphql-tag';

export default gql`
  query SetlistSongs($setlist_id: String!) {
    setlistSongs(setlist_id: $setlist_id) {
      id
      title
      key
      setlist_song_id
      sort_order
    }
  }
`;
