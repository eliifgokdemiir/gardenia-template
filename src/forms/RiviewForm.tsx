"use client"
import { review_schema } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'sonner';
import ErrorMsg from './ErrorMsg';

const RiviewForm = () => {
          // use formik
          const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
          useFormik({
              initialValues: {
                  comment: "",
                  name:"",
                  email: ""
              },
              validationSchema: review_schema,
              onSubmit: (values, { resetForm }) => {
                toast.success("Review Successful")
                resetForm();
              },
          });
    return (
        <>
              <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-xxl-12 mb-20">
                        <textarea
                        name="comment"
                        value={values.comment}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Your review"
                        className="comment-input comment-textarea "></textarea>
                        {touched.comment && <ErrorMsg error={errors.comment} />}
                    </div>
                    <div className="col-xxl-6">
                        <div className="comment-input mb-20">
                            <input
                             type="text"
                             name="name"
                             value={values.name}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             placeholder="Your Name" 
                             />
                             {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="comment-input mb-20">
                            <input 
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Your Email" 
                            />
                             {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="comment-submit">
                            <button type="submit" className="fill-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default RiviewForm;