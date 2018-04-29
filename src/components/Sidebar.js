import React from 'react';
import { compose, graphql } from 'react-apollo';
import { updatePageNameQuery } from '../graphql';

import './styles/Sidebar.scss';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = name => {
        this.props.updatePageName({ variables: { name } });
    };

    render() {
        return (
            <div className="sidebar">
                <ul style={{ padding: 0 }}>
                    <li className="sidebar-item" onClick={() => this.handleClick('The Bread Code')}>The Bread Code</li>
                    <li className="sidebar-item" onClick={() => this.handleClick('Architect Awesome')}>Architect Awesome</li>
                    <li className="sidebar-item" onClick={() => this.handleClick('Andrico Karoulla')}>React State Starter</li>
                </ul>
            </div>
        )
    }
};

export default compose(graphql(updatePageNameQuery, { name: 'updatePageName' }))(Sidebar);