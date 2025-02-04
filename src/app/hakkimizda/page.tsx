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
        <MetaData pageTitle="Mazali Patisserie & Coffee">
          <Wrapper>
            <main>
            <Breadcrumb breadTitle={'HAKKIMIZDA'} breadSubtitle={''} breadHome={'ANASAYFA'} breadMenu={'HAKKIMIZDA'} />
            <AboutUsSection />
                <AboutFeatureSection />
               
            </main>
          </Wrapper>
        </MetaData>
            </>
    );
};

export default AboutPage;