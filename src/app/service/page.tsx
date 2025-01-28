import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import BlogSection from '@/components/home/BlogSection';
import ServiceChooseSection from '@/components/service/ServiceChooseSection';
import ServicesSection from '@/components/service/ServicesSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ServiceMain = () => {
    return (
    <>
    <MetaData pageTitle="Services">
      <Wrapper>
        <main className="home-four-main">
        <Breadcrumb breadTitle={'DÖNER ÇEŞİTLERİ'} breadSubtitle={'HİZMETLERİMİZ'} breadHome={'HİZMETLER'} breadMenu={'DÖNER'} />
        <ServicesSection />
            <ServiceChooseSection />
            <BlogSection />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default ServiceMain;