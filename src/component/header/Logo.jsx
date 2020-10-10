import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render(props) {
        return (
            <div className="logo">
                <Link to={this.props.logolink}>
                    <img src={this.props.logo} alt="logo" />
                </Link>
            </div>
        );
    }
}

export default Logo;
