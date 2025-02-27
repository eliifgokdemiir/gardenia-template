'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import aboutThumb from '../../../public/assets/img/about/mazali-logo.jpeg';

const AboutUsSection = () => {
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(imageRef.current) {
            imageRef.current.style.opacity = '1';
            imageRef.current.style.transform = 'translateY(0)';
        }
    }, []);

    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div 
                            className="about-thumb mb-30" 
                            ref={imageRef}
                            style={{
                                opacity: 0,
                                transform: 'translateY(-100px)',
                                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s',
                            }}
                        >
                            <Image 
                                style={{ 
                                    width: "100%", 
                                    height: "auto",
                                    transform: 'translateZ(0)'
                                }} 
                                src={aboutThumb} 
                                alt="about-thumb"
                                priority
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <h2 className="section-main-title mb-20">320 Yıllık Bİr Geleneğİn İzİnde, Tatların Buluşma Noktası</h2>
                            </div>
                            <p className="mb-30">
                            Lezzetin, ustalığın ve geleneğin harmanlandığı özel bir yerdesiniz. Biz, yalnızca bir pastane değil; tatların, sohbetlerin ve unutulmaz anların buluştuğu bir mekânız. Zengin ürün yelpazemizle, pastane klasiklerinden dünya mutfağının en seçkin tatlarına uzanan geniş bir lezzet deneyimi sunuyoruz.
                            </p>
                            <p className="mb-25">
                            Lezzetimizin sırrı, 320 yıllık bir geleneği yaşatan özel mayamızda saklı. Her hamurumuz, geçmişin mirasını geleceğe taşıyan bir dokunuşla hazırlanır; çünkü bizde her hamur, bir sonrakinin başlangıcını taşır. Bu döngü, lezzetlerimizin özgünlüğünü ve kalitesini korumamızı sağlar.
                            </p>
                            <p className="mb-25"> Sizleri, geniş oturma alanlarımızda keyifli anlar yaşamaya, özel günlerinizi VIP odamızın ayrıcalıklı atmosferinde kutlamaya davet ediyoruz. İster bir kahve eşliğinde tatlı bir mola verin, ister dünya mutfağından benzersiz tatları keşfedin—burada her damak zevkine hitap eden bir lezzet sizi bekliyor.</p>
                           <h3 className="mb-25">Burası, lezzetle birlikte mutluluğun da mayalandığı yer!</h3>
                           
                            <div className="about-btn mb-30">
                                <Link href="/iletisim" className="fill-btn">İLETİŞİME GEÇİN<i className="fal fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;