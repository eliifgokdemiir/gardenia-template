import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import PortfolioTabSection from '@/components/portfolio/PortfolioTabSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const PortfolioMain = () => {
    return (
    <>
    <MetaData pageTitle="Portfolio">
      <Wrapper>
        <main>
        <Breadcrumb breadTitle={'case study'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'portfolio'} />
        <PortfolioTabSection />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default PortfolioMain;