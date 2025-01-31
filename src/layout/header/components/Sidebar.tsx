import Link from 'next/link';
import React from 'react';
import logoImg from "../../../../public/assets/img/logo/mazali-seffaf.png";
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
                      
                    
                        <div className="offset-widget offset-social mb-30">
                            <div className="footer-social flex-column">
                                <div className="d-flex flex-row">
                                <span>Mazalİ Patisserie:</span>
                                <div className="social-links">
                                    <ul>
                                            <li><Link href="https://instagram.com/mazalipatisserie"  target="_blank"><i className="fab fa-instagram m-2"></i></Link></li>
                                          
                                    </ul>
                                </div> 
                                </div>
                                <div className="d-flex flex-row">
                                <span>Mazalİ Döner:</span>
                                <div className="social-links">
                                    <ul>
                                            <li><Link href="https://instagram.com/mazalipatisserie"  target="_blank"><i className="fab fa-instagram m-2"></i></Link></li>
                                          
                                    </ul>
                                </div>
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