import BlogSection from '@/components/home/BlogSection';
import FactSection from '@/components/home/FactSection';
import FoundationSection from '@/components/home/FoundationSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import PricingSection from '@/components/home/PricingSection';
import ServiceSection from '@/components/home/ServiceSection';
import TestimonialSection from '@/components/home/TestimonialSection';
import WorkSection from '@/components/home/WorkSection';
import BrandSlider from '@/elements/sliders/brand/BrandSliderOne';
import HeroSlider from '@/elements/sliders/hero/HeroSlider';
import React from 'react';

const  HomeMain= () => {
    return (
      <main>
          <HeroSlider/>
          <ServiceSection/>
          <FoundationSection/>
          <PricingSection/>
          <PortfolioSection/>
          <WorkSection/>
          <TestimonialSection/>
          <FactSection/>
          <BlogSection/>
          <BrandSlider/>
      </main>
    );
};

export default HomeMain;