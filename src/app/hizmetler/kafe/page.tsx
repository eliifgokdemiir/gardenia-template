import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import BlogSection from '@/components/home/BlogSection';
import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const KafePage = () => {
    const service = {
        id: 2,
        serviceTitle: 'Kafe',
        serviceDesc: 'Sıcak içecekler ve lezzetli atıştırmalıklarla dolu kafemizi deneyimleyin.',
        serviceImg: '/assets/img/service/kafe.jpg',
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

export default KafePage;