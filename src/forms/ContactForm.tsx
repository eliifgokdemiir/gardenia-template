"use client"
import { contact_schema } from "@/utils/validation-schema";
import { useFormik } from "formik";
import React from "react";
import { toast } from "sonner";
import ErrorMsg from "./ErrorMsg";


const ContactForm = () => {
      // use formik
      const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
      useFormik({
          initialValues: {
              name: "",
              email: "",
              massage: "",
              
          },
          validationSchema: contact_schema,
          onSubmit: (values, { resetForm }) => {
            toast.success("Contact Successful")
            resetForm();
          },
      });
  return (
    <>
       <form onSubmit={handleSubmit}>
          <div className="row">
              <div className="col-sm-6">
                  <div className="single-input-field field-name">
                      <input 
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required  
                      placeholder="Enter full name" />
                      {touched.name && <ErrorMsg error={errors.name} />}
                  </div>
              </div>
              <div className="col-sm-6">
                  <div className="single-input-field field-email">
                      <input
                       type="email"
                       name="email"
                       value={values.email}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       id="email"
                       required
                       placeholder="email address" 
                       />
                         {touched.email && <ErrorMsg error={errors.email} />}
                  </div>
              </div>
              <div className="col-sm-12">
                  <div className="single-input-field field-message">
                      <textarea
                       name="massage"
                       id="massage"
                       value={values.massage}
                       onChange={handleChange}
                       onBlur={handleBlur}
                       placeholder="massage"
                       >
                       </textarea>
                       {touched.massage && <ErrorMsg error={errors.massage} />}
                  </div>
              </div>
          </div>
          <div className="contact-btn">
              <button type="submit" className="fill-btn"><i className="fal fa-farm"></i><span>Get a Quote</span></button>
          </div>
      </form>
    </>
  );
};

export default ContactForm;
