import ForgotForm from '@/forms/ForgotPass';
import React from 'react';

const ForgotPasswordArea = () => {
    return (
        <>
    <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
              <div className="login__top mb-30 text-center">
                    <h2 className="section-main-title">
                      Enter Your Email
                    </h2>
                    <p>Check Your Email , We Send You A Verification <br/>Code For Reset Your Password.</p>
                  </div>
                 <ForgotForm />
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default ForgotPasswordArea;