import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import RegisterMainArea from '@/components/Register/RegisterMainArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const RegisterMain = () => {
    return (
        <>
       <MetaData pageTitle="Register">
          <Wrapper>
            <main>
            <Breadcrumb breadTitle={'Register'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Register'} />
              <RegisterMainArea/>
            </main>
          </Wrapper>
        </MetaData>
        </>
    );
};

export default RegisterMain;