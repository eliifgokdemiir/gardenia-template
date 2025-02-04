import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import DonerProducts from '@/components/doner/DonerProducts';
import { donerProducts } from '@/data/doner-products-data';
import Image from 'next/image';
import styles from './doner.module.css';

const DonerPage = () => {
    const service = {
        id: 3,
        serviceTitle: 'Döner',
        serviceDesc: 'Lezzetli ve taze döner çeşitlerimizle damak tadınıza hitap ediyoruz.',
        serviceImg: '/assets/img/service/doner.jpg',
    };

    return (
        <MetaData pageTitle={service.serviceTitle}>
            <Wrapper>
                <main>
                    <Breadcrumb 
                        breadTitle={service.serviceTitle} 
                        breadSubtitle={'HİZMETLERİMİZ'} 
                        breadHome={'HİZMETLER'} 
                        breadMenu={service.serviceTitle} 
                    />
                    <div className="container mt-50">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4">
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={service.serviceImg}
                                        alt={service.serviceTitle}
                                        fill
                                        className={styles.roundedOval}
                                        style={{
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 mt-5">
                                <div className="ps-lg-4">
                                    <h2 className="text-black mb-3">Özel Döner Lezzetlerimiz</h2>
                                    <p className="lead mb-4">
                                        Geleneksel ustalıkla hazırlanan döner çeşitlerimiz, özenle seçilmiş malzemeler ve 
                                        nesilden nesile aktarılan tariflerle sunulmaktadır.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">✔ Günlük kesim taze et</li>
                                        <li className="mb-3">✔ Özel baharat karışımı</li>
                                        <li className="mb-3">✔ Odun ateşinde pişirme</li>
                                        <li className="mb-3">✔ Usta ellerde hazırlanış</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <DonerProducts products={donerProducts} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default DonerPage;