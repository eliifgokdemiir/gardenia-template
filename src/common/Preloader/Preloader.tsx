import Image from 'next/image';
import React from 'react';
import logoText from "../../../public/assets/img/logo/mazali-seffaf.png";
import preloaderImg from "../../../public/assets/img/logo/preloader.svg";

const Preloader = () => {
    return (
        <>
              {/* -- pre loader area start -- */}
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center" 
                         style={{ rowGap: '8px' }}>
                        <Image 
                            src={logoText} 
                            alt="logo"
                            style={{
                                width: '300px',
                                height: '260px',
                                marginBottom: '0'
                            }}
                        />
                        <Image 
                            className="loading-logo" 
                            src={preloaderImg} 
                            alt="loading-logo"
                            style={{
                                width: '60px',
                                height: 'auto',
                                marginTop: '-30px'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    {/* -- pre loader area end -- */}
        </>
    );
};

export default Preloader;