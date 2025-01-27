"use client";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import ErrorMsg from "./ErrorMsg";
import { login_schema } from "@/utils/validation-schema";


const LoginForm = () => {
  const { handleSubmit, handleBlur, handleChange, values, errors, touched, setFieldValue } = useFormik({
    initialValues: {
        email: "",
        password: "",
        rememberMe: false
    },
    validationSchema: login_schema,
    onSubmit: (values, { resetForm }) => {
        toast.success("Login successfully")
        resetForm()
    }
})
  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      name='email'
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
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
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        id="sing-in"
                      />
                      <label className="sign-check" htmlFor="sing-in">
                        <span>Remember me</span>
                      </label>
                    </div>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Login Now
                    </button>
                  </div>
                </form>

                <div className="registered wrapper">
                  <div className="not-register">
                    <span>Not registered?</span>
                    <span>
                      <Link href="/register">Sign up</Link>
                    </span>
                  </div>
                  <div className="forget-password">
                    <Link href="/forgot-password">Forgot password?</Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
