import Link from 'next/link';
import React from 'react';
import footerBg from "../../../public/assets/img/bg/footer-4-bg.jpg";
import footerLogo from "../../../public/assets/img/logo/logo-w.png";
import Image from 'next/image';

const FooterFour = () => {
    return (
        <footer className="footer4-bg">
            <div className="footer-area footer-area4 footer-area4-bg pt-10 pb-10">
                <div className="footer-4-bg-img">
                    <Image style={{width:"100%", height:"100%"}} src={footerBg} alt="footer-bg" />
                </div>
                <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12 col-sm-12">
                                <div className="footer4-widget1 mb-0">
                                    <div className="footer-logo">
                                        <Link href="/">
                                            <Image 
                                                style={{
                                                    width: "350px",
                                                    height: "280px",
                                                    objectFit: "contain",
                                                    margin: "0"
                                                }} 
                                                src={footerLogo} 
                                                alt="footer-logo" 
                                            />
                                        </Link>
                                    </div>
                                    <div className="footer-text">
                                        <p> Pastane & Kafe: 0 533 010 70 80<br />
                                            Döner: 0 533 010 70 90<br />
                                        </p>
                                        <p>Adres: Kardelen Mahallesi 2075 Cadde No:2/A Yenimahalle/ANKARA</p>
                                    </div>
                                    <div className="footer-btn">
                                        <Link href="/iletisim" className="border-btn"><i className="fal fa-farm"></i><span>Bİze Ulaşın</span></Link>
                                    </div>
                                    <div className="footer-social">
                                        <div className="social-links">
                                            <ul className="d-flex gap-2">
                                                <li className="d-flex align-items-center gap-2">
                                                    <span>Mazalİ Pastane & Kafe:</span>
                                                    <Link href="https://www.instagram.com/mazalipatisserie" target="_blank" 
                                                          title="mazalipatisserie">
                                                        <i className="fab fa-instagram"></i>
                                                    </Link>
                                                </li>
                                                <li className="d-flex align-items-center gap-2">
                                                    <span>Mazalİ Döner:</span>
                                                    <Link href="https://www.instagram.com/mazalidoner" target="_blank" 
                                                          title="mazalidoner">
                                                        <i className="fab fa-instagram"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="footer-credit text-center mt-30">
                                        <p className="text-xs font-light text-white/10">Copyright © Yüksel Teknolojileri FlexyTR 2025 | Her Hakkı Saklıdır.</p>
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