import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation LoginAdmin($email: String!, $password: String!) {
    loginAdmin(email: $email, password: $password) {
      _id
      token
      accountType
    }
  }
`