import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import ServicesList from '@/data/services-data';
import Image from 'next/image';
import styles from './hizmet.module.css';
import { pastryProducts } from '@/data/pastane-products-data';
import { donerProducts } from '@/data/doner-products-data';
import Link from 'next/link';

const HizmetDetay = ({ params }: { params: { slug: string } }) => {
    const service = ServicesList.find(item => item.slug === params.slug);
    
    // Hizmet türüne göre ürünleri belirle
    const products = service?.slug === 'pastane-kafe' 
        ? pastryProducts 
        : service?.slug === 'doner' 
            ? donerProducts 
            : [];
    
    // Başlık belirleme
    const sectionTitle = service?.slug === 'pastane-kafe' 
        ? 'Özel Pastane & Kafe Lezzetlerimiz' 
        : service?.slug === 'doner' 
            ? 'Özel Döner Lezzetlerimiz' 
            : 'Hizmetlerimiz';
    
    // Açıklama belirleme
    const description = service?.slug === 'pastane-kafe' 
        ? 'Taze ve lezzetli pastane ürünlerimiz, özenle seçilmiş malzemeler ve uzman pastacılarımızın ellerinde hazırlanmaktadır.' 
        : service?.slug === 'doner' 
            ? 'Geleneksel ustalıkla hazırlanan döner çeşitlerimiz, özenle seçilmiş malzemeler ve nesilden nesile aktarılan tariflerle sunulmaktadır.' 
            : service?.serviceDesc || '';
    
    // Özellikler listesi
    const features = service?.slug === 'pastane-kafe' 
        ? [
            'Günlük taze ürünler',
            'Özel tarifler',
            'Kaliteli malzemeler',
            'Hijyenik ortam'
        ] 
        : service?.slug === 'doner' 
            ? [
                'Günlük kesim taze et',
                'Özel baharat karışımı',
                'Odun ateşinde pişirme',
                'Usta ellerde hazırlanış'
            ] 
            : [];

    return (
        <MetaData pageTitle={service?.serviceTitle || "Hizmet"}>
            <Wrapper>
                <main>
                    <Breadcrumb 
                        breadTitle={service?.serviceTitle || "Hizmet"} 
                        breadSubtitle={'HİZMETLERİMİZ'} 
                        breadHome={'HİZMETLER'} 
                        breadMenu={service?.serviceTitle || "Hizmet"} 
                    />
                    
                    <div className="container mt-50">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={service?.serviceImg?.src || '/assets/img/product/meyvelipasta.jpg'}
                                        alt={service?.serviceTitle || "Hizmet"}
                                        fill
                                        className={styles.roundedOval}
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ps-lg-4">
                                    <h2 className="text-black mb-3">{sectionTitle}</h2>
                                    <p className="lead mb-4">
                                        {description}
                                    </p>
                                    {features.length > 0 && (
                                        <ul className="list-unstyled">
                                            {features.map((feature, index) => (
                                                <li className="mb-3" key={index}>✔ {feature}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <ServiceDetailsArea service={service} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default HizmetDetay; 