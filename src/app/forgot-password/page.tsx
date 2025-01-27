import React from "react";
import ForgotPasswordArea from "@/components/forgot-password/ForgotPasswordArea";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import Breadcrumb from "@/common/Breadcrumb/breadcrumb";


const ForgotMain = () => {

  return (
    <>
          <MetaData pageTitle="Forgot Password">
          <Wrapper>
            <main>
            <Breadcrumb breadTitle={'Forgot Password?'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Forgot Password'} />
            <ForgotPasswordArea/>
            </main>
          </Wrapper>
        </MetaData>
    </>
  );
};

export default ForgotMain;
