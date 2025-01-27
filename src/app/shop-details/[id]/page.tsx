import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ShopDetailsArea from '@/components/shop-details/ShopDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ShopDetailsMain = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
    <MetaData pageTitle="Shop Details">
      <Wrapper>
        <main>
        <Breadcrumb breadTitle={'product details'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'shop'} />
        <ShopDetailsArea id={id}/>
        </main>
      </Wrapper>
    </MetaData>
        </>
    );
};

export default ShopDetailsMain;