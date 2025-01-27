import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ServiceDetailsMain = () => {
    const id = 1;
    return (
        <>
        <MetaData pageTitle="Service Details">
          <Wrapper>
            <main>
      <ServiceDetailsArea id={id}/>
            </main>
          </Wrapper>
        </MetaData>
            </>
    );
};

export default ServiceDetailsMain;