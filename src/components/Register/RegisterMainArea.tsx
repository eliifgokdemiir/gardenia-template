"use client";
import React from "react";
import RegisterForm from "@/forms/RegisterForm";


const RegisterMainArea = () => {

  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
               <RegisterForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterMainArea;
