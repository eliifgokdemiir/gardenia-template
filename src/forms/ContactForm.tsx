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
          validate: (values) => {
              const errors: any = {};
              if (!values.name) {
                  errors.name = "Ad soyad zorunlu alan";
              }
              if (!values.email) {
                  errors.email = "E-posta zorunlu alan";
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = "Geçersiz e-posta adresi";
              }
              if (!values.massage) {
                  errors.massage = "Mesaj zorunlu alan";
              } else if (values.massage.length < 20) {
                  errors.massage = "En az 20 karakter giriniz";
              }
              return errors;
          },
          onSubmit: (values, { resetForm }) => {
            toast.success("Mesajınız iletildi");
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
                      placeholder="Ad - Soyad" />
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
                       placeholder="e-posta" 
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
                       placeholder="Mesajınızı Yazın"
                       >
                       </textarea>
                       {touched.massage && <ErrorMsg error={errors.massage} />}
                  </div>
              </div>
          </div>
          <div className="contact-btn">
              <button type="submit" className="fill-btn"><i className="fal fa-farm"></i><span>Gönder</span></button>
          </div>
      </form>
    </>
  );
};

export default ContactForm;
