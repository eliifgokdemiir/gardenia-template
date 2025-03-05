import Link from 'next/link';
import React from 'react';
import missionIcon from "../../../public/assets/img/icon/mission-icon.png";
import visionIcon from "../../../public/assets/img/icon/vision-icon.png";
import approachIcon from "../../../public/assets/img/icon/approach-icon.png";
import Image from 'next/image';

const AboutFeatureSection = () => {
    return (
        <div className="section strategy-area pb-90">
            <div className="container mt-50">
                <div className="strategy-wrapper">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        {/* Misyon Kartı - Responsive Tasarım */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="card border-0 shadow h-100" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="card-body p-lg-4 p-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3" style={{ 
                                            backgroundColor: "#2c5e1a", 
                                            borderRadius: "50%", 
                                            padding: "12px", 
                                            display: "flex", 
                                            justifyContent: "center", 
                                            alignItems: "center",
                                            width: "60px",
                                            height: "60px"
                                        }}>
                                            <Image 
                                                src={missionIcon} 
                                                alt="Mission Icon" 
                                                width={30} 
                                                height={30} 
                                                style={{ width: "auto", height: "auto", filter: "brightness(0) invert(1)" }} 
                                            />
                                        </div>
                                        <h3 className="card-title mb-0 fw-bold fs-4">MİSYON</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="fs-6">Mazali olarak, "Lezzetin Sanata Dönüştüğü Yer" mottosuyla yola çıktık. Amacımız, misafirlerimize her ziyaretlerinde benzersiz bir deneyim sunmak; sıcak, samimi ve şık bir ortamda en iyi hizmeti vererek unutulmaz anlar yaşatmak. Geleneksel tatları modern dokunuşlarla yeniden yorumluyor, dünya mutfağının en sevilen lezzetlerini özgün tariflerle bir araya getiriyoruz.</p>
                                        
                                        <p className="fs-6">Müşteri memnuniyetini en üst düzeyde tutarak, her misafirimizin kendini özel hissetmesini sağlamak en büyük önceliğimiz. Taze, doğal ve kaliteli ürünler kullanarak sağlık ve hijyen standartlarından ödün vermeden hizmet sunuyor, şeffaf, güvenilir ve yenilikçi bir yaklaşımla sürekli gelişmeyi hedefliyoruz.</p>
                                        
                                        <p className="fs-6">Mazali, sadece bir restoran değil; keyifli sohbetlerin, mutlu anların ve unutulmaz tatların buluştuğu bir yaşam alanıdır. Kaliteli hizmet anlayışımız, misafirlerimize olan tutkumuz ve sektördeki yenilikçi vizyonumuz ile fark yaratmaya devam edeceğiz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Vizyon Kartı - Responsive Tasarım */}
                        <div className="col-lg-6 col-md-12 mb-4">
                            <div className="card border-0 shadow h-100" style={{ backgroundColor: "#f8f9fa" }}>
                                <div className="card-body p-lg-4 p-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3" style={{ 
                                            backgroundColor: "#2c5e1a", 
                                            borderRadius: "50%", 
                                            padding: "12px", 
                                            display: "flex", 
                                            justifyContent: "center", 
                                            alignItems: "center",
                                            width: "60px",
                                            height: "60px"
                                        }}>
                                            <Image 
                                                src={visionIcon} 
                                                alt="Vision Icon" 
                                                width={30} 
                                                height={30} 
                                                style={{ width: "auto", height: "auto", filter: "brightness(0) invert(1)" }} 
                                            />
                                        </div>
                                        <h3 className="card-title mb-0 fw-bold fs-4">VİZYON</h3>
                                    </div>
                                    <div className="card-text">
                                        <p className="fs-6">Mazali olarak, pastane, cafe ve dünya mutfağı konseptlerini bir araya getirerek, misafirlerimize sadece yemek sunan bir mekân değil, unutulmaz bir deneyim yaşatan bir adres olmayı hedefliyoruz.</p>
                                        
                                        <p className="fs-6">Kaliteyi, zarafeti ve lezzeti bir araya getirerek, yerel ve uluslararası mutfak kültürlerini modern dokunuşlarla harmanlıyor, her damak zevkine hitap eden eşsiz tatlar sunuyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-btn mb-30 d-flex justify-content-center">
                                <Link href="/iletisim" className="fill-btn">İLETİŞİME GEÇİN<i className="fal fa-angle-right"></i></Link>
                            </div>
        </div>
    );
};

export default AboutFeatureSection;


/*     <div className="col-lg-4 col-md-6">
                            <div className="single-strategy mb-30">
                                <div className="st-hover">
                                    <div className="st-h-content" style={{ background: "url(/assets/img/bg/st-h-bg.jpg)" }}>
                                        <p>Gardening is the practice of growing and cultivating plants as part of
                                            horticulture. In gardens, ornamental plants are often grown.</p>
                                    </div>
                                    <div className="st-h-btn">
                                        <Link href="/contact" className="fill-btn">get in touch<i className="fal fa-angle-right"></i></Link>
                                    </div>
                                </div>
                                <div className="strategy-icon">
                                <Image style={{width:"auto", height:"auto"}} src={approachIcon} alt="approach-icon"/>
                                </div>
                                <h4>our approach</h4>
                                <Link href="/contact" className="strategy-arrow"><i className="fal fa-long-arrow-right"></i></Link>
                            </div>
                        </div> */