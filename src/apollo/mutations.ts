import { gql } from '@apollo/client';

// Space
export const UPDATE_SPACE = gql`
mutation EditSpace($input: SpaceInputs!) {
  editSpace(input: $input) {
    _id
  }
}
`
