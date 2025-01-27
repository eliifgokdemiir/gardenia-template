"use client"
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import ErrorMsg from './ErrorMsg';
import { forgotten_schema } from '@/utils/validation-schema';
import Link from 'next/link';

const ForgotForm = () => {

    const { handleSubmit, handleBlur, handleChange, values, errors, touched } = useFormik({
        initialValues: {
            email: ""
        },
        validationSchema: forgotten_schema,
        onSubmit: (values, { resetForm }) => {
          toast.success("Password reset link sent successfully");
            resetForm()
        }
    })
    return (
        <>
        <form onSubmit={handleSubmit}>
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      name='email'
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      className='mb-20'
                      placeholder="Enter your email"
                    />
                     <div className="login-action mb-20 fix">
                    <span className="forgot-login">
                        Remember your password?
                        <Link href="/login"> Login</Link>
                    </span>
                </div>
                    {touched.email && <ErrorMsg error={errors.email} />} 
                  </div>
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Forgot Now
                    </button>
                  </div>
                </form>
        </>
    );
};

export default ForgotForm;