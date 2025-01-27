"use client";
import React, { useEffect, useState } from "react";
import { animationCreate } from "@/utils/utils";
import "bootstrap/dist/js/bootstrap";
import { usePathname } from "next/navigation";
import FooterOne from "./footer/FooterOne";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import FooterTwo from "./footer/FooterTwo";
import HeaderThree from "./header/HeaderThree";
import FooterThree from "./footer/FooterThree";
import HeaderFour from "./header/HeaderFour";
import FooterFour from "./footer/FooterFour";
import HeaderFive from "./header/HeaderFive";
import FooterFive from "./footer/FooterFive";
import BackToTop from "@/common/BackToTop/BackToTop";
import Preloader from "@/common/Preloader/Preloader";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const pathName = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(loadingTimeout);
  }, []);

  useEffect(() => {
    const animationTimeout = setTimeout(() => animationCreate(), 2000);
    return () => clearTimeout(animationTimeout);
  }, []);

  const renderHeader = () => {
    switch (pathName) {
      case "/home-2":
        return <HeaderTwo />;
      case "/home-3":
        return <HeaderThree />;
      case "/home-4":
        return <HeaderFour />;
      case "/home-5":
        return <HeaderFive />;
      default:
        return <HeaderOne />;
    }
  };

  const renderFooter = () => {
    switch (pathName) {
      case "/home-2":
        return <FooterTwo />;
      case "/home-3":
        return <FooterThree />;
      case "/home-4":
        return <FooterFour />;
      case "/home-5":
        return <FooterFive />;
      default:
        return <FooterOne />;
    }
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <BackToTop />
          {renderHeader()}
          {children}
          {renderFooter()}
        </>
      )}
    </>
  );
};

export default Wrapper;
