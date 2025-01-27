
import ClientsSectionFive from '@/components/home-5/ClientsSectionFive';
import ProductSectionFive from '@/components/home-5/ProductSectionFive';
import ServiceSectionFive from '@/components/home-5/ServiceSectionFive';
import TeamIntroSectionTwo from '@/components/home-5/TeamIntroSection';
import VideoSectionFive from '@/components/home-5/VideoSectionFive';
import BlogSectionFive from '@/components/team/BlogSectionFive';
import HeroSliderFive from '@/elements/sliders/hero/HeroSliderFive';
import InstagramSlider from '@/elements/sliders/instragram/instragramSlider';
import ProductBanner from '@/elements/sliders/product/ProductBanner';
import ProductSliderFive from '@/elements/sliders/product/ProductSliderFive';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const HomeFiveMain = () => {
    return (
        <>
    <MetaData pageTitle="Home Five">
      <Wrapper>
        <main>
        <HeroSliderFive />
        <ProductBanner />
        <ProductSectionFive />
        <TeamIntroSectionTwo />
        <ServiceSectionFive />
        <VideoSectionFive />
        <ProductSliderFive />
        <ClientsSectionFive />
        <InstagramSlider />
        <BlogSectionFive />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default HomeFiveMain;