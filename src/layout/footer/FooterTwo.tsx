import Link from 'next/link';
import React from 'react';
import img1 from '../../../public/assets/img/istagram/insta-1.jpg';
import img2 from '../../../public/assets/img/istagram/insta-2.jpg';
import img3 from '../../../public/assets/img/istagram/insta-3.jpg';
import img4 from '../../../public/assets/img/istagram/insta-4.jpg';
import img5 from '../../../public/assets/img/istagram/insta-5.jpg';
import img6 from '../../../public/assets/img/istagram/insta-6.jpg';
import Image from 'next/image';
// Function to get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
  };

const FooterTwo = () => {
    return (
        <footer className="footer2-bg">
            <section className="footer-area footer-area2 footer-area2-bg pt-95 pb-55">
                <div className="container">
                    <div className="footer2-inner footer-plant-shape">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer2-widget footer2-widget1 mb-40">
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
                                <div className="footer-widget footer2-widget footer2-widget2 mb-40 ">
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
                                <div className="footer-widget footer2-widget footer2-widget3 mb-40 ">
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
                                        <span>Connect :</span> 
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
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer2-widget footer2-widget4 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>instagram feeds</h4>
                                    </div>
                                    <div className="instagam-shots">
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img1} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img2} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img3} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img4} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img5} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={img6} alt="instagram-img" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright2-area">
                <div className="container">
                    <div className="copyright2-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-links">
                                    <Link href="/contact">environment soluton</Link>
                                    <Link href="/faq">faq</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright2-text">
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

export default FooterTwo;