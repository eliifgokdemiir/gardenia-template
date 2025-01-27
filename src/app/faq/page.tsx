import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import FaqQues from '@/components/faq/FaqSection';
import FaqSectionTwo from '@/components/home-2/FaqSectionTwo';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const FaqMain = () => {
    return (
        <>
   <MetaData pageTitle="Faq">
       <Wrapper>
        <main>
        <Breadcrumb breadTitle={'some ans & q.'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'FAQ'} />
          <FaqQues />
            <FaqSectionTwo faq_area="faq-area style-2 pt-120 pb-60" />
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default FaqMain;