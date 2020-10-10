import React from 'react';

const ContactInfo = () => {
    return (
        <div className="contact-info">
            <ul>
                <li>
                    <div className="icon">
                        <i className="fa fa-phone" />
                    </div>
                    <div className="content">
                        <h4>+88 462 359 435</h4>
                        <h4>+00 356 843 168</h4>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <i className="fa fa-envelope" />
                    </div>
                    <div className="content">
                        <h4>support24@gmail.com</h4>
                        <h4>appyan04@gmail.com</h4>
                    </div>
                </li>
                <li>
                    <div className="icon">
                        <i className="fa fa-map-marker" />
                    </div>
                    <div className="content">
                        <h4>5 S. Sunnyslope Rd. Sandusky, OH 44870</h4>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ContactInfo;
