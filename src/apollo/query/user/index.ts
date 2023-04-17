import { gql } from "@apollo/client";

export const QUERY_USER_BYID = gql`
  query UserById($filter: FilterUserById) {
    userById(filter: $filter) {
      id
      name
      lastName
      email
    }
  }
`;
