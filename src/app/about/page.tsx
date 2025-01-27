import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import AboutFeatureSection from '@/components/about/AboutFeatureSection';
import AboutUsSection from '@/components/about/AboutSection';
import AboutTimeline from '@/components/about/AboutTimeline';
import AboutVideoSection from '@/components/about/AboutVideoSection';
import BrandSliderTwo from '@/elements/sliders/brand/BrandSliderTwo';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const AboutPage = () => {
    return (
        <>
        <MetaData pageTitle="About">
          <Wrapper>
            <main>
            <Breadcrumb breadTitle={'about us'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'about us'} />
            <AboutUsSection />
                <AboutFeatureSection />
                <AboutVideoSection />
                <BrandSliderTwo />
                <AboutTimeline />
            </main>
          </Wrapper>
        </MetaData>
            </>
    );
};

export default AboutPage;