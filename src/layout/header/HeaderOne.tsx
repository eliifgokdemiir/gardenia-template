import React, { useEffect, useState } from "react";
import HeaderTop from "./components/HeaderTop";
import Link from "next/link";
import Image from "next/image";
import NavMenu from "./NavMenu";
import LogoImage from '../../../public/assets/img/logo/logo-w-bg.png';
import useCart from "@/hooks/UseCart";
import SidebarCart from "@/common/sidebar-cart/SidebarCart";
import useGlobalContext from "@/hooks/use-context";
import Sidebar from "./components/Sidebar";

const HeaderOne = () => {
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
      <header className="header1">
        <HeaderTop />
        <div id="header-sticky" className="header-main header-main1">
          <div className="container container-big">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link href="/" className="logo-bl">
                        <>
                          <Image
                            width={285}
                            height={100}
                            src={LogoImage}
                            alt="logo-img"
                          />
                        </>
                      </Link>
                    </div>
                    <div className="main-menu main-menu1 d-none d-xl-block">
                      <nav id="mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <span onClick={()=> setOpenCart(true)} className="action-btn cart-btn d-inline-flex action-item-cart">
                      <i className="fas fa-shopping-basket"></i>
                      <span  className="product-quantity-circle-cart">({TotalCartQuantity})</span>
                    </span>
                    <Link href="/contact" className="border-btn-rounded d-none d-lg-inline-flex">
                      <i className="fal fa-farm"></i>
                      <span>Get a Quote</span>
                    </Link>
                    <div className="menu-bar d-xl-none">
                      <span className="side-toggle">
                        <div className="bar-icon" onClick={() => setSideMenuOpen(true)}>
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

      {/* Uncomment the following if needed */}
      <Sidebar />
      <SidebarCart openCart={openCart} setOpenCart={setOpenCart} />
    </>
  );
};

export default HeaderOne;
