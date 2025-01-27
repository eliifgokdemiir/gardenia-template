import Link from 'next/link';
import React from 'react';

const HeaderTopTwo = () => {
    return (
        <div className="header-top-area d-none d-lg-block">
            <div className="container">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="header-top-social">
                            <div className="social-links">
                                <ul>
                                <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                    <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                    <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p><Link href="#">12/A, New Booston Tower, NYC</Link></p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopTwo;