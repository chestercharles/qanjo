import gql from 'graphql-tag';

export default gql`
  mutation CreateSetlist($setlist_name: String!, $band_id: String!) {
    createSetlist(band_id: $band_id, setlist_name: $setlist_name) {
      id
      setlist_name
    }
  }
`;
