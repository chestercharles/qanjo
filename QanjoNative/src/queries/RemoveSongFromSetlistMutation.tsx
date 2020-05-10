import gql from 'graphql-tag';

export default gql`
  mutation RemoveSongFromSetlist($song_id: String!, $setlist_id: String!) {
    removeSongFromSetlist(song_id: $song_id, setlist_id: $setlist_id) {
      id
      setlist_name
    }
  }
`;
