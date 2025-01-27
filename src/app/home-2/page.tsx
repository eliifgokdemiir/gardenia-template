import AboutSectionTwo from '@/components/home-2/AboutSectionTwo';
import BlogSectionTwo from '@/components/home-2/BlogSectionTwo';
import ContactSection from '@/components/home-2/ContactSection';
import FaqSectionTwo from '@/components/home-2/FaqSectionTwo';
import NewsletterSection from '@/components/home-2/NewsLetterSection';
import ServiceSectionTwo from '@/components/home-2/ServicesTwo';
import BrandSliderTwo from '@/elements/sliders/brand/BrandSliderTwo';
import HeroSliderTwo from '@/elements/sliders/hero/HeroTwo';
import PortfolioSlider from '@/elements/sliders/portfolio/PortfolioSliderTwo';
import TestimonialSliderTwo from '@/elements/sliders/testimonial/TestimonialSliderTwo';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const HomeTwoMain = () => {
    return (
        <>
    <MetaData pageTitle="Home Two">
      <Wrapper>
        <main>
      <HeroSliderTwo/>
      <AboutSectionTwo/>
      <BrandSliderTwo/>
      <ServiceSectionTwo/>
      <PortfolioSlider/>
      <ContactSection/>
      <TestimonialSliderTwo/>
      <FaqSectionTwo/>
      <NewsletterSection/>
      <BlogSectionTwo />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default HomeTwoMain;