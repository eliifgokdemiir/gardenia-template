'use client';

import Link from 'next/link';
import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-60 pb-60" 
            style={{
                backgroundImage: 'url(/assets/img/about/banner-1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
            }}
        >
            {/* Buğulu overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(5px)',
            }}></div>
            
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8 text-center">
                        <div className="about-content mb-30" style={{ position: 'relative', zIndex: 2 }}>
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
                           
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;