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
export const ACTIVATE_USER = gql`
  mutation ActiveUser($input: InputActiveVariables) {
    activeUser(input: $input) {
      user {
        email
        id
        name
      }
      message
    }
  }
`;
