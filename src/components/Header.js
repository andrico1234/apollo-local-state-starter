import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: 'Hello Parcel'
        }
    }

    render() {
        return (
            <h1>{this.state.title}</h1>
        )
    }
};

export default Header;