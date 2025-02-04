import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import ContactFormSection from '@/components/contact/ContactFormSection';
import ContactMapSection from '@/components/contact/ContactMapSection';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const ContactMain = () => {
    return (
        <>
    <MetaData pageTitle="Mazali Patisserie & Coffee">
       <Wrapper>
        <main>
        <Breadcrumb breadTitle={'İLETİŞİM'} breadSubtitle={''} breadHome={'Anasayfa'} breadMenu={'İLETİŞİM'} />
            <ContactFormSection />
            <ContactMapSection />
        </main>
      </Wrapper>
   </MetaData>
        </>
    );
};

export default ContactMain;