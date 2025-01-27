import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useGlobalContext from '../../hooks/use-context';
import NavMenu from './NavMenu';
import SidebarCart from '@/common/sidebar-cart/SidebarCart';
import useCart from "@/hooks/UseCart";
import Image from 'next/image';
import thumbImg from "../../../public/assets/img/logo/gm-thumb-white.png";
import Sidebar from './components/Sidebar';

const HeaderFive = () => {
    const [openCart, setOpenCart] = useState(false);
    const { setSideMenuOpen } = useGlobalContext();
    //cart quantity
      const { UseCartProductQuantity } = useCart();
      const TotalCartQuantity = UseCartProductQuantity();

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
            <header className=" header5">
                <div id="header-sticky" className="header-main header-main5">
                    <div className="container-fluid g-0">
                        <div className="row align-items-center">
                            <div className="col-xl-12 col-lg-12">
                                <div className="header-main-content-wrapper">
                                    <div className="header-main-left header-main-left-header5">
                                        <div className="header-logo header5-logo">
                                            <Link href="/" className="logo-w">
                                                <Image style={{width:"auto", height:"auto"}} src={thumbImg} alt="logo-img" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="header-main-right header-main-right-header5">
                                        <div className="main-menu main-menu5 d-none d-lg-inline-block">
                                            <nav id="mobile-menu2">
                                                <NavMenu />
                                            </nav>
                                        </div>
                                        <span className="action-btn cart-btn d-inline-flex action-item-cart" onClick={()=> setOpenCart(true)}><i className="fas fa-shopping-basket"></i>
                                        <span className='product-quantity-circle-cart product-quantity-five'>({TotalCartQuantity})</span></span>
                                        <div className="menu-bar d-inline-flex">
                                            <span className="side-toggle" onClick={() => setSideMenuOpen(true)}>
                                                <i className="flaticon-dots-menu"></i>
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

            {/* side cart */}
            <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/>
            {/* side cart */}
        </>
    );
};

export default HeaderFive;