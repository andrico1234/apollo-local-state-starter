import React from 'react';
import SidebarItem from './SidebarItem';

import './styles/Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul style={{padding: 0}}>
                <SidebarItem title="Item 1" />
                <SidebarItem title="Item 2" />
                <SidebarItem title="Item 3" />
            </ul>
        </div>
    )
};

export default Sidebar;