import Link from 'next/link';
import React from 'react';
import shapeImg from "../../../public/assets/img/shape/pattern.png";
import logoImg from "../../../public/assets/img/logo/logo-w.png";
import Image from 'next/image';

// Function to get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
  };

const FooterOne = () => {
    return (
        <footer className="footer1-bg">
            <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
                <div className="footer-bg-shape">
                    <Image  src={shapeImg} alt="shape-img"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                                <div className="footer-widget-title">
                                    <h4>about us</h4>
                                </div>
                                <p className="mb-35">Is that lawn is an open space between woods
                                    or lawn can be uncountable a type of thin linen
                                    or cotton while garden is an outdoor area
                                    containing one or more types of plants</p>
                                <div className="footer-support">
                                    <div className="irc-item support-meta">
                                        <div className="irc-item-icon">
                                            <i className="fas fa-phone-alt"></i>
                                        </div>
                                        <div className="irc-item-content">
                                            <p>Emergency Call</p>
                                            <div className="support-number"><Link href="tel:98965963168">989 659 631 68</Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                                <div className="footer-widget-title">
                                    <h4>main pages</h4>
                                </div>
                                <ul>
                                    <li><Link href="/">Home</Link></li>
                                    <li><Link href="/about">about</Link></li>
                                    <li><Link href="/services">services</Link></li>
                                    <li><Link href="/blog">news</Link></li>
                                    <li><Link href="/team">Team</Link></li>
                                </ul>
                                <ul>
                                    <li><Link href="/contact">refund policy</Link></li>
                                    <li><Link href="/contact">Get in touch</Link></li>
                                    <li><Link href="/contact">Emergency</Link></li>
                                    <li><Link href="/contact">get a quote</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>our services</h4>
                                </div>
                                <ul>
                                    <li><Link href="/services">Lawn Moving</Link></li>
                                    <li><Link href="/services">Hedge Cutting</Link></li>
                                    <li><Link href="/services">Flower Planting</Link></li>
                                    <li><Link href="/services">Garden Remodeling</Link></li>
                                    <li><Link href="/services">Garden Restoration</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                                <div className="footer-widget-title">
                                    <h4>get in touch</h4>
                                </div>
                                <div className="footer-contact">
                                    <ul>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-phone"></i>
                                                </div>
                                                <p><Link href="tel:1-800-700-600">1-800-700-600</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-envelope-open"></i>
                                                </div>
                                                <p><Link href="mailto:info@bdevs-email.com">info@bdevs-email.com</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="contact-icon">
                                                    <i className="fas fa-map-marked-alt"></i>
                                                </div>
                                                <p><Link href="#">60 East 65th Street, New York
                                                    City, NY 10065</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-social">
                                    <span>Connect:</span>
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
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright1-area">
                <div className="container">
                    <div className="copyright1-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-logo">
                                    <Link href="/">
                                    <Image style={{ width: "auto", height: "auto" }} src={logoImg} alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright1-text">
                                    Copyright & Design By <Link href="https://themeforest.net/user/bdevs/portfolio">@BDevs</Link> - {getCurrentYear()}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterOne;