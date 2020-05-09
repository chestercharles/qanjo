import gql from 'graphql-tag';

export default gql`
  mutation CreateBand($band_name: String!, $owner_id: String!) {
    createBand(band_name: $band_name, owner_id: $owner_id) {
      id
      band_name
    }
  }
`;
