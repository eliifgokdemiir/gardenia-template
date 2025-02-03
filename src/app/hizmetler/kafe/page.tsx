import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import KafeProducts from '@/components/kafe/KafeProducts';
import { kafeProducts } from '@/data/kafe-products-data';
import styles from './kafe.module.css'
import Image from 'next/image';

const KafePage = () => {
    const service = {
        id: 2,
        serviceTitle: 'Kafe',
        serviceDesc: 'Sıcak içecekler ve lezzetli atıştırmalıklarla dolu kafemizi deneyimleyin.',
        serviceImg: '/assets/img/service/kahve.jpg',
        
    };

    return (
        <MetaData pageTitle={service.serviceTitle}>
            <Wrapper>
                <main>
                    <Breadcrumb 
                        breadTitle={service.serviceTitle} 
                        breadSubtitle={'Hizmetlerimiz'} 
                        breadHome={'Hizmetler'} 
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
                                    <h2 className="text-black mb-3">Özel Kafe Ürünlerimiz</h2>
                                    <p className="lead mb-4">
                                        Geleneksel tariflerimiz ve modern sunum anlayışımızla 
                                        birbirinden özel unlu mamuller.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">✔ Günlük taze üretim</li>
                                        <li className="mb-3">✔ Doğal malzemeler</li>
                                        <li className="mb-3">✔ Usta şeflerin elinden</li>
                                        <li className="mb-3">✔ Kahve ve çay çeşitleri</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <KafeProducts products={kafeProducts} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default KafePage;