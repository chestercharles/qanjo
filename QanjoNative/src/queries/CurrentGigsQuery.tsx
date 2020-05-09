import gql from 'graphql-tag';

export default gql`
  query CurrentGigs {
    currentGigs {
      id
      gig_name
      location_name
      date
    }
  }
`;
