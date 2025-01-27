import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import CheckOutSection from '@/components/checkout/CheckoutSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CheckoutMain = () => {
    return (
        <>
    <MetaData pageTitle="Checkout">
       <Wrapper>
        <main>
        <Breadcrumb breadTitle={'checkout'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'checkout'} />
        <CheckOutSection />
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default CheckoutMain;