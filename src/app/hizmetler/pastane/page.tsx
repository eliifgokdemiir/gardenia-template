import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import PastaneProducts from '@/components/pastane/PastaneProducts';
import { pastryProducts } from '@/data/pastane-products-data';

const PastanePage = () => {
    // Pastane ile ilgili veriyi burada tanımlayabilirsiniz veya komponent içinde çekebilirsiniz.
    const service = {
        id: 1,
        serviceTitle: 'Pastane',
        serviceDesc: 'Taze ve lezzetli unlu mamullerle dolu pastanelerimizi keşfedin.',
        serviceImg: '/assets/img/service/meyvelipasta.jpg',
        serviceBtn: 'Daha Fazla Oku',
        imgStyle: {
            width: '300px',
            height: '100px',
            borderRadius: '20px',
            objectFit: 'cover'
        }
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
                    <PastaneProducts products={pastryProducts} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default PastanePage;