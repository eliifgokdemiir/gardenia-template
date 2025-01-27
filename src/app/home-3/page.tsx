import AboutSectionThree from '@/components/home-3/AboutSectionThree';
import ClientsSection from '@/components/home-3/ClientsSection';
import ContactSectionThree from '@/components/home-3/ContactSectionThree';
import FactSectionThree from '@/components/home-3/FactSectionThree';
import ProductSection from '@/components/home-3/ProductSection';
import ServiceSectionThree from '@/components/home-3/ServiceSectionThree';
import HeroSliderThree from '@/elements/sliders/hero/HeroSliderThree';
import PortfolioSliderThree from '@/elements/sliders/portfolio/PortfolioSliderThree';
import TestimonialSliderThree from '@/elements/sliders/testimonial/TestimonialSliderThree';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const HomeThreeMain = () => {
    return (
        <>
    <MetaData pageTitle="Home Three">
      <Wrapper>
        <main>
        <HeroSliderThree />
        <AboutSectionThree />
        <ServiceSectionThree />
        <FactSectionThree />
        <ClientsSection />
        <PortfolioSliderThree />
        <TestimonialSliderThree />
        <ProductSection />
        <ContactSectionThree />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default HomeThreeMain;