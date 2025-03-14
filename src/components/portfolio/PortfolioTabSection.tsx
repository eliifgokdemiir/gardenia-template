import Link from 'next/link';
import React from 'react';
import portfolioList from '../../data/portfolio-data';
import Image from 'next/image';

const PortfolioTabSection = () => {
    // Kategorilere göre filtreleme fonksiyonları
    const filterPortfolio = (tag: string) => {
        if(tag === 'hepsi') {
            return portfolioList;
        }
        return portfolioList.filter(item => item.portfolioTag === tag);
    };

    return (
        <div className="portfolio-area pt-100 pb-100">
               <div className="row justify-content-center mb-40">
                  <div className="col-lg-8">
                     <p className="text-center lead">
                        Dünya lezzetlerinden ilham alan özel tariflerimiz ve geleneksel tatlarımız, 
                        modern sunumlarla buluşuyor. Mazali'nin eşsiz lezzet dünyasından seçkin örnekleri 
                        keşfedin ve damak tadınıza hitap eden çeşitlerimizi görün.
                     </p>
                  </div>
               </div>
         <div className="container">
            <div className="portfolio-tab-wrapper wow fadeInUp" data-wow-delay=".3s">
               <div className="portfolio-tab-nav mb-30">
                  <nav>
                     <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1"
                           type="button" role="tab" aria-controls="nav-1" aria-selected="true">hepsi</button>
                        <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2"
                           type="button" role="tab" aria-controls="nav-2" aria-selected="false">pastane</button>
                        <button className="nav-link" id="nav-3-tab" data-bs-toggle="tab" data-bs-target="#nav-3"
                           type="button" role="tab" aria-controls="nav-3" aria-selected="false">kafe</button>
                        <button className="nav-link" id="nav-5-tab" data-bs-toggle="tab" data-bs-target="#nav-5"
                           type="button" role="tab" aria-controls="nav-4" aria-selected="false">döner</button>
                     </div>
                  </nav>
               </div>
               
         
               
               <div className="portfolio-tab-content">
               {portfolioList &&
                  <div className="tab-content" id="nav-tabContent">
                     <div className="tab-pane fade show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                        {filterPortfolio('hepsi').map((item, num) => (
                           <div className="portfolio-single portfolio-hover-style" key={num}>
                              <div className="portfolio-thumb">
                               
                                    <div style={{ 
                                       position: 'relative', 
                                       width: '100%', 
                                       paddingTop: '75%', // 4:3 aspect ratio
                                       overflow: 'hidden' 
                                    }}>
                                       <Image
                                          src={item.portfolioImg}
                                          alt="portfolio-img"
                                          layout="fill"
                                          objectFit="cover"
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                          }}
                                       />
                                    </div>
                           
                                 <div className="portfolio-content">
                                    <div className="portfolio-hover-bg"></div>
                                    <div className="portfolio-inner">
                                       <span className="portfolio-tag">{item.portfolioTag}</span>
                                       <h4 className="portfolio-title">{item.portfolioTitle}</h4>
                                      
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                        {filterPortfolio('pastane').map((item, num) => (
                           <div className="portfolio-single portfolio-hover-style" key={num}>
                              <div className="portfolio-thumb">
                                 
                                    <div style={{ 
                                       position: 'relative', 
                                       width: '100%', 
                                       paddingTop: '75%', // 4:3 aspect ratio
                                       overflow: 'hidden' 
                                    }}>
                                       <Image
                                          src={item.portfolioImg}
                                          alt="portfolio-img"
                                          layout="fill"
                                          objectFit="cover"
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                          }}
                                       />
                                    </div>
                            
                                 <div className="portfolio-content">
                                    <div className="portfolio-hover-bg"></div>
                                    <div className="portfolio-inner">
                                       <span className="portfolio-tag">{item.portfolioTag}</span>
                                       <h4 className="portfolio-title">{item.portfolioTitle}</h4>
                                   
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                        </div>
                     </div>
                     <div className="tab-pane fade" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {filterPortfolio('kafe').map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                    
                                    <div style={{ 
                                       position: 'relative', 
                                       width: '100%', 
                                       paddingTop: '75%', // 4:3 aspect ratio
                                       overflow: 'hidden' 
                                    }}>
                                       <Image
                                          src={item.portfolioImg}
                                          alt="portfolio-img"
                                          layout="fill"
                                          objectFit="cover"
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                          }}
                                       />
                                    </div>
                            
                                    <div className="portfolio-content">
                                        <div className="portfolio-hover-bg"></div>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title">{item.portfolioTitle}</h4>
                                    
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
              
                  
                    
                     </div>
                     <div className="tab-pane fade" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
                        <div className="portfolio-wrapper portfolio-hover-items-wrapper">
                            {filterPortfolio('döner').map((item, num) => (
                            <div className="portfolio-single portfolio-hover-style" key={num}>
                                <div className="portfolio-thumb">
                                   
                                    <div style={{ 
                                       position: 'relative', 
                                       width: '100%', 
                                       paddingTop: '75%', // 4:3 aspect ratio
                                       overflow: 'hidden' 
                                    }}>
                                       <Image
                                          src={item.portfolioImg}
                                          alt="portfolio-img"
                                          layout="fill"
                                          objectFit="cover"
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                          }}
                                       />
                                    </div>
                                   
                                    <div className="portfolio-content">
                                        <div className="portfolio-hover-bg"></div>
                                        <div className="portfolio-inner">
                                        <span className="portfolio-tag">{item.portfolioTag}</span>
                                        <h4 className="portfolio-title">{item.portfolioTitle}</h4>
                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                     </div>
                  
                     </div>
                 
                }
               </div>
            </div>
            <div className="portfolio-btn mt-40 mb-30 text-center wow fadeInUp d-none" data-wow-delay=".3s">
               <a href="/urunler" className="fill-btn">Daha fazla<i className="fal fa-plus"></i></a>
            </div>
         </div>
      </div>
    );
};

export default PortfolioTabSection;