import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import CartSection from '@/components/cart/CartSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const CartMain = () => {
    return (
        <>
        <MetaData pageTitle="Cart">
            <Wrapper>
                <main>
                <Breadcrumb breadTitle={'my cart'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'my cart'} />
                <CartSection />
                </main>
            </Wrapper>
        </MetaData>
        </>
    );
};

export default CartMain;