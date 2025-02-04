import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import PastaneProducts from '@/components/pastane/PastaneProducts';
import { pastryProducts } from '@/data/pastane-products-data';
import Image from 'next/image';
import styles from './pastane.module.css';

const PastanePage = () => {
    const service = {
        id: 1,
        serviceTitle: 'Pastane',
        serviceDesc: 'Taze ve lezzetli unlu mamullerle dolu pastanelerimizi keşfedin.',
        serviceImg: '/assets/img/service/meyvelipasta.jpg',
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
                                    <h2 className="text-black mb-3">Özel Pastane Ürünlerimiz</h2>
                                    <p className="lead mb-4">
                                        Geleneksel tariflerimiz ve modern sunum anlayışımızla 
                                        birbirinden özel unlu mamuller.
                                    </p>
                                    <ul className="list-unstyled">
                                        <li className="mb-3">✔ Günlük taze üretim</li>
                                        <li className="mb-3">✔ Doğal malzemeler</li>
                                        <li className="mb-3">✔ Usta şeflerin elinden</li>
                                        <li className="mb-3">✔ Özel günler için tasarımlar</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PastaneProducts products={pastryProducts} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default PastanePage;