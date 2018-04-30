import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getPageNameQuery, getPageNameOptions } from '../graphql';

const Header = props => {
    return (
        <h1>{props.currentPageName}</h1>
    )
};

export default compose(graphql(getPageNameQuery, getPageNameOptions))(Header);