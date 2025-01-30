import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const PastanePage = () => {
    // Pastane ile ilgili veriyi burada tanımlayabilirsiniz veya komponent içinde çekebilirsiniz.
    const service = {
        id: 1,
        serviceTitle: 'Pastane',
        serviceDesc: 'Taze ve lezzetli unlu mamullerle dolu pastanelerimizi keşfedin.',
        serviceImg: '/assets/img/service/pastane.jpg', // Resim yolunu güncelleyin
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
                    <ServiceChooseSection />
                    <BlogSection />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default PastanePage;