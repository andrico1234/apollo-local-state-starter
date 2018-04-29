import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import defaults from './defaults';
import resolvers from './resolvers';

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults,
    resolvers,
});

export const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        stateLink
    ])
});
