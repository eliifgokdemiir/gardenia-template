import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import DonerProducts from '@/components/doner/DonerProducts';
import { donerProducts } from '@/data/doner-products-data';

const DonerPage = () => {
    const service = {
        id: 3,
        serviceTitle: 'Döner',
        serviceDesc: 'Lezzetli ve taze döner çeşitlerimizle damak tadınıza hitap ediyoruz.',
        serviceImg: '/assets/img/service/doner.jpg', // Resim yolunu güncelleyin
        serviceBtn: 'Daha Fazla Oku'
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
                    <ServiceDetailsArea service={service} />
                    <DonerProducts products={donerProducts} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default DonerPage;