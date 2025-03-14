"use client"
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import NavMenu from './NavMenu';
import HeaderTopFour from './components/HeaderTopFour';
import useGlobalContext from '@/hooks/use-context';
import Image from 'next/image';
import LogoImage from '../../../public/assets/img/logo/mazali-seffaf.png';
import Sidebar from './components/Sidebar';
import logoWhite from "../../../public/assets/img/logo/logo-w.png";


const HeaderFour = () => {
    const { setSideMenuOpen } = useGlobalContext();
  // Sticky Menu Area start
  const sticky = () => {
    const header = document.querySelector('.header-main');
    const scrollTop = window.scrollY;

    // Check if header is not null
    if (header) {
      scrollTop >= 40
        ? header.classList.add('sticky')
        : header.classList.remove('sticky');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', sticky);
    return () => {
      window.removeEventListener('scroll', sticky);
    };
  }, []);

    return (
        <>
            <header 
                className="header-main-area header-style-4" 
                style={{ 
                    backgroundColor: '#1a1a1a', 
                    color: '#ffffff',
                    borderBottom: '1px solid #2a2a2a'
                }}
            >
                <HeaderTopFour />
                <div id="header-sticky" className="header-main header-main4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header4">
                                        <div className="header-logo header4-logo">
                                            <Link href="/" className="mazali-seffaf">
                                                <>
                                                    <Image
                                                       style={{
                                                           width: "280px",
                                                           height: "200px",
                                                           objectFit: "contain",
                                                           margin: "10px 0"
                                                       }}
                                                        src={LogoImage}
                                                        alt="logo-img"
                                                    />
                                                    </>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header4">
                                        <div className="main-menu main-menu4 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <Link href="/iletisim" className="border-btn d-none d-xl-inline-flex"><i className="fal fa-farm"></i><span>BİZE ULAŞIN</span></Link>
                                        <div className="menu-bar d-lg-none">
                                            <span className="side-toggle" onClick={() => setSideMenuOpen(true)}>
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* sidebar start */}
            <Sidebar />
            {/* sidebar end */}
        </>
    );
};

export default HeaderFour;