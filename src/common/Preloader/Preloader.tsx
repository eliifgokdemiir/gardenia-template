import Image from 'next/image';
import React from 'react';
import logoText from "../../../public/assets/img/logo/logo-text.png";
import preloaderImg from "../../../public/assets/img/logo/preloader.svg";

const Preloader = () => {
    return (
        <>
              {/* -- pre loader area start -- */}
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                    <Image src={logoText} alt="logo"/>
                    <Image className="loading-logo" src={preloaderImg} alt="loading-logo"/>
                    </div>
                </div>
            </div>
        </div>
    {/* -- pre loader area end -- */}
        </>
    );
};

export default Preloader;