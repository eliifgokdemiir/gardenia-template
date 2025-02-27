import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TServiceData } from '@/data/services-data';
import { pastryProducts } from '@/data/pastane-products-data';
import styles from './ServiceDetailsArea.module.css';

// Doner ürünleri için import
import { donerProducts } from '@/data/doner-products-data';

interface ServiceDetailsProps {
    service: TServiceData;
}

const ServiceDetailsArea: React.FC<ServiceDetailsProps> = ({ service }) => {
    // Hizmet türüne göre ürünleri belirle
    const products = service?.slug === 'pastane-kafe' 
        ? pastryProducts 
        : service?.slug === 'doner' 
            ? donerProducts 
            : [];

    // Başlık belirleme
    const sectionTitle = service?.slug === 'pastane-kafe' 
        ? 'Pastane & Kafe Ürünlerimiz' 
        : service?.slug === 'doner' 
            ? 'Döner Çeşitlerimiz' 
            : 'Ürünlerimiz';
            
    // Tanıtım metni belirleme
    const introText = service?.slug === 'pastane-kafe' 
        ? 'Dünya lezzetlerinden ilham alan özel tariflerimiz, taze ve kaliteli malzemelerle hazırlanıyor. Her bir ürünümüzde geleneksel tatları modern dokunuşlarla buluşturuyoruz.' 
        : service?.slug === 'doner' 
            ? 'Geleneksel Türk mutfağının vazgeçilmez lezzeti döner, usta ellerden sofranıza geliyor. Özel baharatlarla marine edilmiş etlerimiz, odun ateşinde yavaşça pişirilerek eşsiz bir tat sunuyor.' 
            : 'Özenle seçilmiş malzemelerle hazırlanan ürünlerimiz, damak tadınıza hitap edecek çeşitlilikte sunuluyor.';

    return (
        <section className="service-details-area pt-50 pb-50">
            <div className="container">
                {/* Hizmet Başlığı ve Açıklaması */}
                

                {/* Ürünler Bölümü */}
                <section className="container pt-0 pb-30">
                    <h3 className="section-title mb-3 text-center">{sectionTitle}</h3>
                    
                    {/* Yeni eklenen tanıtım paragrafı */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8">
                            <p className="text-center lead">{introText}</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-lg-3 col-md-6 mb-20" key={product.id}>
                                <div className={`${styles.productCard} product-card h-100 d-flex flex-column`}>
                                    <div className={styles.productImg} style={{ 
                                        position: 'relative',
                                        paddingTop: '75%',
                                        overflow: 'hidden'
                                    }}>
                                        <Image 
                                            src={product.img}
                                            alt={product.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                        />
                                        <div className={styles.imageOverlay}>
                                           
                                        </div>
                                    </div>
                                    <div className="p-3 flex-grow-1">
                                        <h4 className="mb-2" style={{ minHeight: '3rem' }}>{product.title}</h4>
                                        <p className="text-muted mb-3" style={{ 
                                            minHeight: '4.5rem',
                                            display: '-webkit-box',
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden'
                                        }}>{product.desc}</p>
                                        {product.price && (
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="fw-bold text-primary">{product.price}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-center mt-20">
                            <Link href="https://qrmenu.flexytr.app/" className="btn btn-primary">
                                Menüyü İnceleyin <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default ServiceDetailsArea;