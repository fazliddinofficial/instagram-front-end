import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation SignUp($createUserInput: CreateUserInput!) {
  signUp(createUserInput: $createUserInput) {
    email
    fullName
    nickName
    password
  }
}
`