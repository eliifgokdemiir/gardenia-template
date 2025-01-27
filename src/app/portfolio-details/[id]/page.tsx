import PortfolioDetailsArea from '@/components/portfolio-details/PortfolioDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = ({ params }: { params: { id: number } }) => {
    const id = params.id;
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

export default page;