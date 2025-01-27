import Link from 'next/link';
import React from 'react';
import logoImg from "../../../../public/assets/img/logo/logo-bl.png";
import Image from 'next/image';
import MenusTwo from './Menu';
import useGlobalContext from '@/hooks/use-context';

const Sidebar = () => {
  const { toggleSideMenu, sideMenuOpen, setSideMenuOpen } = useGlobalContext();
    return (
        <>
            <div className="fix">
                <div className={`side-info ${sideMenuOpen ? 'info-open' : ''}`}>
                    <div className="side-info-content">
                        <div className="offset-widget offset-logo mb-40">
                            <div className="row align-items-center">
                                <div className="col-9">
                                    <Link href="/"><Image style={{width:"auto", height:"auto"}} src={logoImg} alt="Logo" /></Link>
                                </div>
                                <div className="col-3 text-end">
                                  <button className="side-info-close" onClick={toggleSideMenu}><i className="fal fa-times"></i></button></div>
                            </div>
                        </div>
                        {/* <!-- side-mobile-menu start --> */}
                        <nav className="side-mobile-menu d-block d-xl-none mm-menu">
                            <MenusTwo/>
                        </nav>
                        {/* <!-- side-mobile-menu end --> */}
                        <div className="offset-widget offset_searchbar mb-30">
                            <form action="#" className="filter-search-input">
                                <input type="text" placeholder="Search keyword" />
                                <button type="submit"><i className="fal fa-search"></i></button>
                            </form>
                        </div>
                        <div className="offset-widget offset-support mb-30">
                            <div className="footer-support">
                                <div className="irc-item support-meta">
                                    <div className="irc-item-icon">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="irc-item-content">
                                        <p>Emergency Call</p>
                                        <div className="support-number"><a href="tel:98965963168">989 659 631 68</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offset-widget offset-social mb-30">
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
            <div onClick={() => setSideMenuOpen(false)} className={`offcanvas-overlay ${sideMenuOpen ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default Sidebar;