import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    6Strings
                </div>

                <div className="wrapper">
                    <div className="left">
                        <h2>Contact information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>address</div>
                                    <div>Rabin 26 </div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>phone</div>
                                    <div>052-6895899</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>working hours</div>
                                    <div>every day/ 9am-8pm</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon 
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>email</div>
                                    <div>nfo@6strings.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>Be the first to know</h2>
                        <div>
                            <div>
                                Get all the latest information on events, sales and offers. you can miss out.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;