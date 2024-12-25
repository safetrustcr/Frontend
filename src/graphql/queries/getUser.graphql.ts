import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser($id: ID!) {
    users(where: { id: { _eq: $id } }) {
      id
      email
      first_name
      last_name
      created_at
      updated_at
      summary
      phone_number
      country_code
      location
      profile_image_url
    }
    user_wallets(where: { user_id: { _eq: $id } }) {
      id
      wallet_address
      is_primary
      created_at
    }
  }
`;
