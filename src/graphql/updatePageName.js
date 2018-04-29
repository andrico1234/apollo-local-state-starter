import gql from 'graphql-tag';

export const updatePageNameQuery = gql`
    mutation updatePageName($name: String!) {
        updatePageName(name: $name) @client {
            currentPageName
        }
    }
`;
