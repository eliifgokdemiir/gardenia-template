import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import WishlistSection from '@/components/wishlist/WishlistSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const WishlistMain = () => {
    return (
        <>
   <MetaData pageTitle="Wishlist">
       <Wrapper>
        <main>
          <Breadcrumb breadTitle={'Wishlist'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Wishlist'} />
          <WishlistSection />
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default WishlistMain;