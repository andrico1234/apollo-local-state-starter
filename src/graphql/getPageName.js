import gql from 'graphql-tag';

export const getPageNameQuery = gql`
    query {
        apolloClientDemo @client {
            currentPageName
        }
    }
`;

export const getPageNameOptions = {
    props: ({ data: { apolloClientDemo } }) => ({
        apolloClientDemo,
    })
};