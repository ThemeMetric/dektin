import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Breadcrumbs extends Component {
    render(props) {
        return (
            <div className="breadcrumb-area">
                <Container>
                    <div className="breadcrumb-content">
                        <h2>{this.props.pagename}</h2>
                        <ul>
                            <li>
                                <Link to="/"> Home > </Link>
                            </li>
                            <li> {this.props.pagename}</li>
                        </ul>
                    </div>
                </Container>

                <img
                    src={this.props.backgroundimglink}
                    alt="herobg-shape"
                    className="brd-bg-shape"
                />
            </div>
        );
    }
}
