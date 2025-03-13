import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TServiceData } from '@/data/services-data';
import { pastryProducts } from '@/data/pastane-products-data';
import styles from './ServiceDetailsArea.module.css';
import ServicesList from '@/data/services-data';

// Döner ürünleri import'unu tutuyoruz ama kullanmayacağız
import { donerProducts } from '@/data/doner-products-data';

interface ServiceDetailsAreaProps {
    service?: TServiceData;
    id?: number;
}

const ServiceDetailsArea: React.FC<ServiceDetailsAreaProps> = ({ service, id }) => {
    // Eğer service yoksa ve id varsa, id'ye göre servisi bulun
    const serviceData = service || (id ? ServicesList.find(s => s.id === id) : undefined);
    
    // serviceData undefined ise erken dönüş yapın
    if (!serviceData) {
        return <div className="container py-5">
            <h1>Hizmet Bulunamadı</h1>
            <p>Aradığınız hizmet mevcut değil.</p>
        </div>;
    }

    // Hizmet türüne göre ürünleri belirle
    const products = serviceData?.slug === 'pastane-kafe' 
        ? pastryProducts 
        : [];

    // Başlık belirleme
    const sectionTitle = serviceData?.slug === 'pastane-kafe' 
        ? 'Pastane & Kafe Ürünlerimiz' 
        : serviceData?.slug === 'doner' 
            ? 'Döner Çeşitlerimiz' 
            : 'Ürünlerimiz';
            
    // Tanıtım metni belirleme
    const introText = serviceData?.slug === 'pastane-kafe' 
        ? 'Dünya lezzetlerinden ilham alan özel tariflerimiz, taze ve kaliteli malzemelerle hazırlanıyor. Her bir ürünümüzde geleneksel tatları modern dokunuşlarla buluşturuyoruz.' 
        : serviceData?.slug === 'doner' 
            ? 'Çok Yakında Hizmetinizde' 
            : 'Özenle seçilmiş malzemelerle hazırlanan ürünlerimiz, damak tadınıza hitap edecek çeşitlilikte sunuluyor.';

    // Döner sayfası için özel içerik
    if (serviceData?.slug === 'doner') {
        return (
            <section className="service-details-area pt-50 pb-50">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h2 className="section-title mb-4">Döner Çeşitlerimiz</h2>
                            <div className="alert alert-info p-4 mb-5" style={{ fontSize: '1.2rem' }}>
                                <strong>Çok Yakında Hizmetinizde</strong>
                                <p className="mt-3 mb-0">Geleneksel lezzetlerimizle çok yakında sizlerle olacağız.</p>
                            </div>
                            <Link href="/" className="btn btn-primary">
                                Ana Sayfaya Dön <i className="fas fa-home ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="service-details-area pt-50 pb-50">
            <div className="container">
                {/* Ürünler Bölümü */}
                <section className="container pt-0 pb-30">
                    <h3 className="section-title mb-3 text-center">{sectionTitle}</h3>
                    
                    {/* Tanıtım paragrafı */}
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
                                        <div className={styles.imageOverlay}></div>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="text-center mt-20">
                            <Link href="https://qrmenu.flexytr.app/11178b2e-6075-4713-8cbc-4063d453a8d3" target="_blank" className="btn btn-primary">
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