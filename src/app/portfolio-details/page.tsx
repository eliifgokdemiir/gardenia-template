
import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import PortfolioDetailsArea from '@/components/portfolio-details/PortfolioDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const PortfolioDetailsMain = () => {
  const id = 1;
    return (
        <>
        <MetaData pageTitle="Portfolio Details">
          <Wrapper>
            <main>
          <PortfolioDetailsArea id={id}/>
            </main>
          </Wrapper>
        </MetaData>
            </>
    );
};

export default PortfolioDetailsMain;