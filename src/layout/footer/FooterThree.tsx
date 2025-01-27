import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "../../../public/assets/img/logo/logo-w.png";
import instragramImg from "../../../public/assets/img/istagram/insta-1.jpg";
import instragramTwo from "../../../public/assets/img/istagram/insta-2.jpg";
import instragramThree from "../../../public/assets/img/istagram/insta-3.jpg";
import instragramFour from "../../../public/assets/img/istagram/insta-4.jpg";
import instragramFive from "../../../public/assets/img/istagram/insta-5.jpg";
import instragramSix from "../../../public/assets/img/istagram/insta-5.jpg";
import blogImg from "../../../public/assets/img/blog/blog-14.jpg";
import blogImgTwo from "../../../public/assets/img/blog/blog-7.jpg";

// Function to get the current year
const getCurrentYear = () => {
    return new Date().getFullYear();
  };

const FooterThree = () => {
    return (
        <footer className="footer3-bg">
            <div className="footer-top-area style-3">
                <div className="container">
                    <div className="footer-top-inner style-3">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-logo">
                                    <Link href="/">
                                      <Image style={{ width: "auto", height: "auto" }} src={logoImg} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-top-social">
                                    <div className="social-links">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="footer-area footer-area3 footer-area3-bg pt-95 pb-55">
                <div className="container">
                    <div className="footer3-inner footer-plant-shape">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer3-widget footer3-widget1 mb-40">
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
                                <div className="footer-widget footer3-widget footer3-widget2 mb-40 ">
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
                                <div className="footer-widget footer3-widget footer3-widget3 mb-40">
                                    <div className="footer-widget-title">
                                        <h4>instagram feeds</h4>
                                    </div>
                                    <div className="instagam-shots">
                                        <Link href="#">
                                           <Image style={{ width: "100%", height: "auto" }} src={instragramImg} alt="instagram-img" />
                                        </Link>
                                        <Link href="#"> <Image style={{ width: "100%", height: "auto" }} src={instragramTwo} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={instragramThree} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={instragramFour} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={instragramFive} alt="instagram-img" /></Link>
                                        <Link href="#"><Image style={{ width: "100%", height: "auto" }} src={instragramSix} alt="instagram-img" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="footer-widget footer3-widget footer3-widget4 mb-40 ">
                                    <div className="footer-widget-title">
                                        <h4>news & feeds</h4>
                                    </div>
                                    <div className="footer-blog">
                                        <div className="blog-single">
                                            <div className="blog-thumb">
                                                <Link href="/blog">
                                                <Image style={{ width: "100%", height: "auto" }} src={blogImg} alt="blog-img" />
                                               </Link>
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-meta-list">
                                                    <div className="blog-meta-single">
                                                        <div className="blog-meta-text">
                                                            november 23, 2022
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="blog-title"><Link href="/blog">gardens consist of a mix of natural</Link></h2>
                                            </div>
                                        </div>
                                        <div className="blog-single">
                                            <div className="blog-thumb">
                                                <Link href="/blog">
                                                <Image style={{ width: "100%", height: "auto" }} src={blogImgTwo} alt="blog-img" />
                                                </Link> 
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-meta-list">
                                                    <div className="blog-meta-single">
                                                        <div className="blog-meta-text">
                                                            november 19, 2022
                                                        </div>
                                                    </div>
                                                </div>
                                                <h2 className="blog-title"><Link href="/blog">Achieve this just
                                                    right blend</Link></h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="copyright-area copyright3-area">
                <div className="container">
                    <div className="copyright3-inner">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="footer-links">
                                    <Link href="/contact">environment soluton</Link>
                                    <Link href="/faq">faq</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="copyright-text copyright3-text">
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

export default FooterThree;