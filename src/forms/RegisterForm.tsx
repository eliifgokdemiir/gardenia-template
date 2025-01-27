"use client"
import { register_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'sonner';
import ErrorMsg from './ErrorMsg';
import Link from 'next/link';
import FacebookIcon from '@/svg/FacebookIcon';
import GoogleIcon from '@/svg/GoogleIcon';

const RegisterForm = () => {
    const { handleSubmit, handleBlur, handleChange, values, errors, touched, setFieldValue } = useFormik({
        initialValues: {
            name:"",
            email: "",
            password: "",
        },
        validationSchema: register_schema,
        onSubmit: (values, { resetForm }) => {
            toast.success("Register successfully")
            resetForm()
        }
    })
    return (
        <>
             <form onSubmit={handleSubmit}>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      name='name'
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      placeholder="Enter your username"
                    />
                    {touched.name && <ErrorMsg error={errors.name} />} 
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      name='email'
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                     {touched.email && <ErrorMsg error={errors.email} />} 
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="password"
                      name='password'
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter your Password"
                      required
                    />
                     {touched.password && <ErrorMsg error={errors.password} />} 
                  </div>
                  <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        id="sing-in"
                      />
                      <label className="sign-check" htmlFor="sing-in">
                      Accept the terms and 
                        <span className='privacy-policy'> Privacy Policy</span>
                      </label>
                    </div>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                     Register Now
                    </button>
                  </div>
                </form>
                <div className="registered wrapper">
                  <div className="not-register">
                    <span>Already have an account? </span>
                    <span>
                      <Link href="/login">Log In</Link>
                    </span>
                  </div>
                </div>
                <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <div className="sign-facebook">
                    <FacebookIcon />
                    <Link className="social-icon" href="#">
                      Facebook
                    </Link>
                  </div>
                  <div className="sign-gmail">
                    <GoogleIcon />
                    <Link className="social-icon" href="#">
                      Google
                    </Link>
                  </div>
                </div>
        </>
    );
};

export default RegisterForm;