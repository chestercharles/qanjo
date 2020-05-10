import gql from 'graphql-tag';

export default gql`
  mutation AddSongToSetlist(
    $song_id: String!
    $setlist_id: String!
    $sort_order: Int!
  ) {
    addSongToSetlist(
      song_id: $song_id
      setlist_id: $setlist_id
      sort_order: $sort_order
    ) {
      id
      setlist_name
    }
  }
`;
