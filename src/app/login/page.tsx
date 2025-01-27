import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import LoginForm from '@/forms/LoginForm';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const LoginMain = () => {
    return (
        <>
        <MetaData pageTitle="Login">
          <Wrapper>
            <main>
            <Breadcrumb breadTitle={'Login'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Login'} />
            <LoginForm/>
            </main>
          </Wrapper>
        </MetaData>
        </>
    );
};

export default LoginMain;