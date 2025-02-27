import Link from 'next/link';
import React from 'react';

const HeaderTopFour = () => {
    return (
        <div className="header-top-area style-4 d-none d-lg-block">
            <div className="container">
                <div className="header-top-inner">
                    <div className="header-top-left">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                <p><Link href="tel:78989700098">Pastane&Kafe: 0 533 010 70 80</Link></p>
                                </div>
                                <div className="meta-item-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="meta-item-text">
                                <p><Link href="tel:78989700098">Döner: 0 533 010 70 90</Link></p>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                    <div className="header-top-right">
                        <div className="meta-items">
                            <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="meta-item-text">
                                    <p>Pazartesi - Pazar: 9:00 - 21:00<span className="d-none d-xl-inline-block">
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTopFour;

/*   <div className="meta-item">
                                <div className="meta-item-icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="meta-item-text">
<p><Link href="mailto:info@mazali.com">info@mazali.com</Link></p>
</div>
                            </div>*/