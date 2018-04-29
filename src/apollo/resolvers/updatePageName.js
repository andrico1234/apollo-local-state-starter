import gql from 'graphql-tag';

export default (_, { name }, { cache }) => {
    const query = gql`
        query GetPageName {
            apolloClientDemo @client {
                currentPageName
            }
        }
    `;

    const previousPageName = cache.readQuery({ query });

    const data = {
        apolloClientDemo: {
            ...previousPageName.apolloClientDemo,
            currentPageName: name
        }
    };

    console.log('prev', previousPageName);
    console.log('data', data);

    cache.writeQuery({
        query,
        data
    });
    return null;
}