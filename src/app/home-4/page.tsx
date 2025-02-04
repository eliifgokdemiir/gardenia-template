import BlogSectionTwo from '@/components/home-2/BlogSectionTwo';
import FeatureSectionFour from '@/components/home-4/FeatureSectionFour';
import FoundationSectionFour from '@/components/home-4/FoundationSectionFour';
import PortfolioSectionFour from '@/components/home-4/PortfolioSectionFour';
import ServiceSectionFour from '@/components/home-4/ServiceSectionFour';
import TeamSection from '@/components/home-4/TeamSection';
import HeroSliderFour from '@/elements/sliders/hero/HeroSliderFour';
import TestimonialSliderFour from '@/elements/sliders/testimonial/TestimonialSliderFour';
import MetaData from '@/hooks/useMetaData';
import React from 'react';

const HomeFourMain = () => {
    return (
        <>
            <MetaData pageTitle="Mazali Patisserie & Coffee">
                <main>
                    <HeroSliderFour/>
                    <ServiceSectionFour />
                    <FoundationSectionFour />
                    <FeatureSectionFour />
                    <PortfolioSectionFour />
                    <TeamSection /> 
                 
                </main>
            </MetaData>
        </>
    );
};

export default HomeFourMain;

/*   <BlogSectionTwo 
                        blog_area_class="blog-area-4 pt-120 pb-75" 
                        blog_single_class="style-4 mb-45" 
                    /> */