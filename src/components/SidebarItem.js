import React from 'react';

import './styles/SidebarItem.scss';

const SidebarItem = props => {
    return (
        <li className="sidebar-item">{props.title}</li>
    )
};

export default SidebarItem;