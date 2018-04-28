import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import './styles/App.scss';

const App = () => {
    return (
        <div style={{marginLeft: '230px'}}>
            <Sidebar/>
            <Header/>
            <ul>
                <li>Main Content 1</li>
                <li>Main Content 2</li>
                <li>Main Content 3</li>
            </ul>
        </div>
    )
};

export default App;