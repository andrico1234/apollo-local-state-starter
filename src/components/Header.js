import React from 'react';
import { compose, graphql } from 'react-apollo';
import { getPageNameQuery, getPageNameOptions } from '../graphql';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.apolloClientDemo.currentPageName || ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ title: nextProps.apolloClientDemo.currentPageName })
    }

    render() {
        return (
            <h1>{this.state.title}</h1>
        )
    }
}

export default compose(graphql(getPageNameQuery, getPageNameOptions))(Header);