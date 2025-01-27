import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ShopMainArea from '@/components/shop/ShopMainArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ShopMain = () => {
    return (
        <>
    <MetaData pageTitle="Shop">
      <Wrapper>
        <main>
        <Breadcrumb breadTitle={'our products'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'shop'} />
        <ShopMainArea />
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default ShopMain;