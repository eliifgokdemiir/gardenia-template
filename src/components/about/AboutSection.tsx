import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import aboutThumb from '../../../public/assets/img/about/mazali-logo.jpeg';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <Image style={{width:"100%", height:"auto"}} src={aboutThumb} alt="about-thumb"/>
                            <div className="about-thumb-meta">
                                <p>2000'den Beri Lezzetin İzinde</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">HAKKIMIZDA</span>
                                <h2 className="section-main-title mb-20">Mazali Ailesi Olarak Lezzetin Adresiyiz</h2>
                            </div>
                            <p className="mb-30">
                                Mazali Pastane olarak 20 yılı aşkın tecrübemizle geleneksel tatlı kültürünü modern dokunuşlarla buluşturuyoruz. 
                                Özenle seçilmiş malzemelerle hazırladığımız taze pasta ve tatlılarımız, her damak zevkine hitap edecek çeşitlilikte.
                            </p>
                            <p className="mb-45">
                                Mazali Döner'de ise nesilden nesile aktarılan özel marinasyon tekniklerimizle hazırlanan etlerimiz, 
                ateşte mükemmel dengesini bulan ustalık işi dönerlerimizle sizleri buluşturuyoruz. Kafe bölümümüzde ise 
                özel demleme kahvelerimiz ve ev yapımı içeceklerimizle sıcak bir mola sunuyoruz.
                            </p>
                            <div className="about-btn">
                                <Link href="/contact" className="fill-btn">İletişime Geçin<i className="fal fa-angle-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;