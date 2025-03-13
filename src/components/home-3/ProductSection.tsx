import React from 'react';
import Link from 'next/link';

// ProductSlider import'unu kaldırın veya yorum satırına alın
// import ProductSlider from '@/elements/sliders/product/ProductSlider';

const ProductSection = () => {
    return (
        <section className="product-area pt-120 pb-70">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8 col-md-8">
                        <div className="section-title style-3">
                            <span className="section-subtitle">products</span>
                            <h2 className="section-main-title mb-45">our product</h2>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <div className="product-area-btn product-slider-area-btn">
                            <Link href="/shop" className="fill-btn-rounded"><i className="fas fa-shopping-basket"></i><span>All Product</span></Link>
                        </div>
                    </div>
                </div>
                <div className="procuct-wrapper product-slide-wrapper mb-0 wow fadeInUp" data-wow-delay=".3s">
                    {/* ProductSlider yerine basit bir içerik gösterin */}
                    <div className="row">
                        <div className="col-12 text-center">
                            <p>Ürün slider bileşeni geçici olarak kullanılamıyor.</p>
                            <Link href="/urunler" className="btn btn-primary">
                                Tüm Ürünleri Görüntüle
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;