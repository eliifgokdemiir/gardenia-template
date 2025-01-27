
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useGlobalContext from '../../hooks/use-context';
import NavMenu from './NavMenu';
import SidebarCart from '@/common/sidebar-cart/SidebarCart';
import useCart from "@/hooks/UseCart";
import HeaderTopTwo from './components/HeaderTopTwo';
import LogoImage from '../../../public/assets/img/logo/logo-w.png';
import Image from 'next/image';
import Sidebar from './components/Sidebar';

const HeaderTwo = () => {
    const [openCart,setOpenCart] = useState(false)
    //cart quantity
    const { UseCartProductQuantity } = useCart();
    const TotalCartQuantity = UseCartProductQuantity();
    //for mobile menu
    const { setSideMenuOpen } = useGlobalContext();


      // Sticky Menu Area start
  const sticky = () => {
    const header = document.querySelector('.meta-header-area');
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
            <header className="header2">
                <HeaderTopTwo />
                <div id="header-sticky" className="meta-header-area">
                    <div className="container">
                        <div className="meta-header-inner">
                            <div className="meta-header-left">
                                <div className="header-logo header2-logo">
                                    <Link href="/" className="logo-w">
                                    <Image style={{ width: "100%", height: "100%" }} src={LogoImage} alt="logo-img" />
                                    </Link>
                                </div>
                            </div>
                            <div className="meta-header-right">
                                <div className="meta-items meta-header-meta-items d-none d-lg-inline-flex">
                                    <div className="meta-item">
                                        <div className="meta-item-icon">
                                            <i className="fas fa-alarm-clock"></i>
                                        </div>
                                        <div className="meta-item-content">
                                            <p>Mon - Sat 9.00 - 19.00</p>
                                            <div className="meta-title">sunday closed</div>
                                        </div>
                                    </div>
                                    <div className="meta-item d-none d-xl-inline-flex">
                                        <div className="meta-item-icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="meta-item-content">
                                            <p>info@webmail.com</p>
                                            <div className="meta-title">Email Address</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="main-menu main-menu2">
                                    <nav id="mobile-menu-sticky">
                                        <NavMenu />
                                    </nav>
                                </div>
                                <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i
                                    className="fas fa-shopping-basket"></i><span className='product-quantity-circle-cart'>({TotalCartQuantity})</span></span>
                                <Link href="/contact" className="border-btn-rounded d-none d-lg-inline-flex"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
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
                <div className="header-main header-main2 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header2">
                                        <div className="main-menu main-menu2 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <div className="header-search d-none d-xl-inline-block">
                                            <form action="#">
                                                <div className="single-input-field field-search">
                                                    <input type="search" placeholder="Keyword here..." />
                                                    <button type="submit"><i className="fas fa-search"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header2">
                                        <div className="meta-item">
                                            <div className="meta-item-icon">
                                                <i className="flaticon-telephone"></i>
                                            </div>
                                            <div className="meta-item-content">
                                                <div className="meta-title">Emergency Call</div>
                                                <p><Link href="tel:98965963168">989 659 631 68</Link></p>
                                            </div>
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

            {/* sidebar cart start */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
            {/* sidebar cart end */}
        </>
    );
};

export default HeaderTwo;