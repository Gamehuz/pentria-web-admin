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
export const DELETE_SPACE = gql`
  query Query($spaceId: ID) {
    deleteSpace(spaceId: $spaceId)
  }
`
export const GET_ALL_SPACES = gql`
query spaces {
  spaces {
    _id
    ac
    approved
    beds
    category
    cleaningSupplies
    createdAt
    currency
    description
    facilityType
    image
    kidFriendly
    kitchen
    location
    name
    outdoorSpace
    parking
    petFriendly
    policies
    pool
    price
    workspace
    wifi
    videoGames
    updatedAt
    __typename
    reviews {
      _id
      comment
      createdAt
      rating
      user
    }
    author {
      firstName
      lastName
      _id
      email
    }
  }
}
`
export const GET_ALL_USERS = gql`
  query Users($filter: String) {
    users(filter: $filter) {
      _id
      firstName
      lastName
      email
      phone
      address
      city
      state
      otp
      dob
      sex
      isVerified
      ninverified
      isActive
      lastLoggedIn
      accountType
      createdAt
      updatedAt
      bName
      bankName
      bank
      acctNumber
      bankCode
      occupation
    }
  }
`
