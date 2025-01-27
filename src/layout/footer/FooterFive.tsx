import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "../../../public/assets/img/logo/logo-bl.png";

// Function to get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
  };
const FooterFive = () => {
    return (
        <footer className="footer5-bg">
            <div className="footer-area footer-area5 footer-area5-bg pt-100 pb-70">
                <div className="container">
                    <div className="footer5-inner">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="footer-widget footer5-widget footer5-widget1 mb-0">
                                    <div className="footer-logo">
                                        <Link href="/">
                                          <Image style={{ width: "auto", height: "auto" }} src={logoImg} alt="logo" />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p>Most gardens consist of a mix of natural and constructed elements, although
                                            even very natural gardens are always an inherently artificial creation. Natural way to
                                            elements present in a garden principally.</p>
                                    </div>
                                    <div className="newsletter-form">
                                        <form action="#">
                                            <div className="newsletter-input-wrapper">
                                                <input type="email" placeholder="Email address"/>
                                                <button type="submit" className="fill-btn-rounded">subscribe<i className="fal fa-long-arrow-right"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area copyright5-area">
                <div className="container">
                    <div className="copyright5-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6 order-lg-1">
                                <div className="footer-links">
                                    <Link href="/about">ABOUT</Link>
                                    <Link href="/blog">BLOG</Link>
                                    <Link href="/contact">CONTACT</Link>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 order-lg-3">
                                <div className="footer-social">
                                    <div className="social-links">
                                        <ul>
                                        <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                                            <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                            <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 order-lg-2">
                                <div className="copyright-text copyright5-text">
                                    © {getCurrentYear()} <Link href="https://themeforest.net/user/bdevs/portfolio">bdevs</Link>. All Rights Reserved & designed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterFive;