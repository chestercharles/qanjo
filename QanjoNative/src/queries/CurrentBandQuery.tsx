import gql from 'graphql-tag';

export default gql`
  query CurrentBand {
    currentBand {
      id
      band_name
    }
  }
`;
