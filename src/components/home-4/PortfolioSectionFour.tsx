"use client"
import Link from 'next/link';
import React from 'react';
import portfolioList from '../../data/portfolio-data';
import Image from 'next/image';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PortfolioSectionFour = () => {

    // Kategorilere göre filtreleme fonksiyonları
    const filterPortfolio = (tag: string) => {
        if(tag === 'hepsi') {
            return portfolioList;
        }
        return portfolioList.filter(item => item.portfolioTag === tag);
    };

    return (
        <>
            <section className="portfolio-area pt-120 pb-90 portfolio-bg fix">
                <div className="container">
                    <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8">
                            <div className="section-title style-4 text-center">
                                <h2 className="section-main-title mb-45">ÜRÜNLER</h2>
                            </div>
                        </div>
                    </div>
                    {portfolioList &&
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper style-4 wow fadeInUp" data-wow-delay=".3s">
                            <span className="portfolio-shape-1"></span>
                            <i className="flaticon-gardening-1 portfolio-shape-2"></i>
                            <PhotoProvider
                            speed={() => 800}
                            easing={(type) =>
                                type === 2
                                    ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                                    : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }
                        >
                            {filterPortfolio('hepsi').slice(10, 16).map((item, index) => (
                                <div className="portfolio-single portfolio-hover-style style-4" key={index}>
                                    <div className="portfolio-thumb">
                                       
                                            <Image 
                                                src={item.portfolioImg} 
                                                alt="image not found" 
                                                width={400}
                                                height={300}
                                                style={{
                                                    width: '100%',
                                                    height: '300px',
                                                    objectFit: 'cover',
                                                    borderRadius: '8px'
                                                }}
                                            />
                                    
                                        <div className="portfolio-content">
                                            <div  className="portfolio-hover-bg"></div>
                                            <div className="portfolio-inner">
                                                <div className="portfolio-inner-text">
                                                    <span className="portfolio-tag">{item.portfolioTag}</span>
                                                    <h4 className="portfolio-title">{item.portfolioTitle}</h4>
                                                </div>
                                                <span>
                                                <PhotoView src={item.portfolioImg.src}>
                                                    <button className="icon-btn image-popups"><i className={item.portfolioIcon}></i></button>
                                                    </PhotoView>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </PhotoProvider>
                        </div>
                    }
                    <div className="portfolio-btn style-4 mt-40 mb-30 text-center wow fadeInUp" data-wow-delay=".3s">
                        <Link href="/urunler" className="fill-btn">DAHA FAZLA<i className="fal fa-plus"></i></Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioSectionFour;