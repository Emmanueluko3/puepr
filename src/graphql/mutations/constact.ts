import { gql } from "@apollo/client";

export const CREATECONTACT_MUTATION = gql`
  mutation CreateContact($contactInput: ContactInput!) {
    createContact(contactInput: $contactInput) {
      id
      fullName
      company
      email
      phone
      location
      topic
      message
      createdAt
    }
  }
`;
