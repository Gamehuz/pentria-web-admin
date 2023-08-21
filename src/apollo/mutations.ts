import { gql } from '@apollo/client';

// Space
export const UPDATE_SPACE = gql`
mutation EditSpace($input: SpaceInputs!) {
  editSpace(input: $input) {
    _id
  }
}
`
export const CREATING_LISTING = gql`
mutation CreateSpace($name: String!, $image: [String!]!, $location: String!, $facilityType: String!, $category: String!, $beds: Int!, $currency: Currency!, $price: Float!, $restRoom: Boolean!, $pool: Boolean!, $outdoorSpace: Boolean!, $kitchen: Boolean!, $ac: Boolean!, $videoGames: Boolean!, $petFriendly: Boolean!, $cleaningSupplies: Boolean!, $kidFriendly: Boolean!, $workspace: Boolean!, $wifi: Boolean!, $parking: Boolean!, $description: String!, $policies: String!) {
  createSpace(name: $name, image: $image, location: $location, facilityType: $facilityType, category: $category, beds: $beds, currency: $currency, price: $price, restRoom: $restRoom, pool: $pool, outdoorSpace: $outdoorSpace, kitchen: $kitchen, ac: $ac, videoGames: $videoGames, petFriendly: $petFriendly, cleaningSupplies: $cleaningSupplies, kidFriendly: $kidFriendly, workspace: $workspace, wifi: $wifi, parking: $parking, description: $description, policies: $policies) {
    _id
  }
}
`

export const EDIT_LISTING = gql`
mutation EditSpace($input: SpaceInputs!) {
  editSpace(input: $input) {
    _id
  }
}
`