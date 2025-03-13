import React from 'react';
import Breadcrumb from '@/common/Breadcrumb/breadcrumb';

interface PortfolioDetailsAreaProps {
  portfolio?: {
    portfolioTitle?: string;
    portfolioImg?: { src: string };
    portfolioDesc?: string;
    // Diğer özellikler...
  };
}

const PortfolioDetailsArea: React.FC<PortfolioDetailsAreaProps> = ({ portfolio }) => {
  return (
    <>
      <Breadcrumb 
        breadSubtitle='Ürün detaylarını inceleyebilirsiniz' 
        breadTitle={portfolio?.portfolioTitle || 'Ürün Detayı'} 
        breadHome={'Ana Sayfa'} 
        breadMenu={'Ürünler'}
      />
      <section className="portfolio-details-area pt-120 pb-90">
        <div className="container">
          <div className="portfolio-details-wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h2>{portfolio?.portfolioTitle || 'Ürün Detayı'}</h2>
                <p>{portfolio?.portfolioDesc || 'Bu ürün hakkında detaylı bilgi yakında eklenecektir.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsArea; 