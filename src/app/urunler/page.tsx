import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import PortfolioTabSection from '@/components/portfolio/PortfolioTabSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const PortfolioMain = () => {
    return (
    <>
    <MetaData pageTitle="Mazali Patisserie & Coffee">
      <Wrapper>
        <main>
        <Breadcrumb breadTitle={'ÜRÜNLER'} breadSubtitle={''} breadHome={'ANASAYFA'} breadMenu={'ÜRÜNLER'} />
        <PortfolioTabSection />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default PortfolioMain;