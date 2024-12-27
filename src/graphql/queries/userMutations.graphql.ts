import { gql } from '@apollo/client';

export const ASSIGN_TENANT_ROLE = gql`
  mutation AssignTenantRole($userId: String!) {
    insert_user_roles_one(object: { user_id: $userId, role_id: 2 }) {
      user_id
      role {
        name
      }
    }
  }
`;

export const CREATE_USER_RECORD = gql`
  mutation CreateUserRecord($user: users_insert_input!) {
    insert_users_one(object: $user) {
      id
      email
      last_seen
    }
  }
`;

export const UPDATE_USER_RECORD = gql`
  mutation UpdateUserProfile($userId: String!, $input: users_set_input!) {
    update_users_by_pk(
      pk_columns: { id: $userId },
      _set: $input
    ) {
      id
      first_name
      last_name
      summary
      phone_number
      country_code
      location
      email
      profile_image_url
      user_wallets {
        id
        wallet_address
        chain_type
        is_primary
      }
    }
  }
`;

export const UPDATE_PROFILE_IMAGE = gql`
  mutation UpdateProfileImage($userId: String!, $imageUrl: String!, $imageKey: String!) {
    update_users_by_pk(
      pk_columns: { id: $userId },
      _set: {
        profile_image_url: $imageUrl,
        profile_image_r2_key: $imageKey
      }
    ) {
      id
      profile_image_url
    }
  }
`;
