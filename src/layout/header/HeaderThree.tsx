"use client"
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NavMenu from './NavMenu';
import Image from 'next/image';
import HeaderLogo from "../../../public/assets/img/logo/logo-w.png";
import useCart from "@/hooks/UseCart";
import useGlobalContext from '@/hooks/use-context';
import SidebarCart from '@/common/sidebar-cart/SidebarCart';
import Sidebar from './components/Sidebar';

const HeaderThree = () => {
    const [openCart,setOpenCart] = useState(false)
    //cart quantity
    const { UseCartProductQuantity } = useCart();
    const TotalCartQuantity = UseCartProductQuantity();
    //for mobile menu
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
            <header className="header3">
                <div id="header-sticky" className="header-main header-main3">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header3">
                                        <div className="header-logo header3-logo">
                                            <Link href="/" className="logo-w">
                                            <Image style={{ width: "100%", height: "100%" }} src={HeaderLogo} alt="logo-img" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header3">
                                        <div className="main-menu main-menu3 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i className="fas fa-shopping-basket"></i> <span className='product-quantity-circle-cart'>({TotalCartQuantity})</span></span>
                                        <Link href="/contact" className="border-btn-rounded d-none d-xl-inline-flex"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
                                        <div className="menu-bar d-lg-none">
                                            <button className="side-toggle" type='button' onClick={() => setSideMenuOpen(true)}>
                                                <div className="bar-icon">
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </div>
                                            </button>
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

            {/* side cart */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/>
            {/* side cart */}
        </>
    );
};

export default HeaderThree;