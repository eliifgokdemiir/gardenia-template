import Link from 'next/link';
import React from 'react';
import footerBg from "../../../public/assets/img/bg/footer-4-bg.jpg";
import footerLogo from "../../../public/assets/img/logo/logo-w.png";
import Image from 'next/image';

const FooterFour = () => {
    return (
        <footer className="footer4-bg">
            <div className="footer-area footer-area4 footer-area4-bg pt-120 pb-120">
                <div className="footer-4-bg-img">
                    <Image style={{width:"100%", height:"auto"}} src={footerBg} alt="footer-bg" />
                </div>
                <div className="container">
                    <div className="footer4-inner footer-4-plant-shape">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="footer-widget footer4-widget footer4-widget1 mb-0">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image 
                                                style={{
                                                    width: "350px",
                                                    height: "280px",
                                                    objectFit: "contain",
                                                    margin: "5px 0"
                                                }} 
                                                src={footerLogo} 
                                                alt="footer-logo" 
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p> Pastane: 0 533 010 70 80<br />
                                            Döner: 0 533 010 70 90<br />
                                        </p>
                                        <p>Adres: Kardelen Mahallesi 2075 Cadde No:2/A</p>
                                    </div>
                                    <div className="footer-btn">
                                        <Link href="/contact" className="border-btn"><i className="fal fa-farm"></i><span>Bize Ulaşın</span></Link>
                                    </div>
                                    <div className="footer-social">
                                        <span>TAKİP EDİN:</span>
                                        <div className="social-links">
                                            <ul>
                                                <li><Link href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFour;