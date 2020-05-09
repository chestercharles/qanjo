import gql from 'graphql-tag';

export default gql`
  query CurrentSetlists {
    currentSetlists {
      id
      setlist_name
    }
  }
`;
