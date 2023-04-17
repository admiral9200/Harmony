import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($input: InputUserVariables) {
    createUser(input: $input) {
      token
      user {
        email
        id
        isActive
        lastName
        location
        name
        photo_user
      }
    }
  }
`;
