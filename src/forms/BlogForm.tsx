"use client"
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'sonner';
import ErrorMsg from './ErrorMsg';
import { commentForm } from '@/utils/validation-schema';

const BlogForm = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
        useFormik({
            initialValues: {
                comment: "",
                name: "",
                email: "",
                website: "",
                
            },
            validationSchema: commentForm,
            onSubmit: (values, { resetForm }) => {
                toast.success("Your comment has been successfully submitted!");
                resetForm();
            },
        });
    return (
        <div className="post-comment-form">
            <h3>Post Comment</h3>
            <div className="blog-comment-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="single-input-field field-message">
                                <textarea
                                 name="comment" 
                                 id="comment"
                                 placeholder="Type your comments...."
                                 value={values.comment}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 > </textarea>
                            {touched.comment && <ErrorMsg error={errors.comment} />}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-name">
                                <input 
                                type="text" 
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Type your name...." 
                                />
                                {touched.name && <ErrorMsg error={errors.name} />}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-email">
                                <input 
                                type="email" 
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Type your email...." 
                                />
                                {touched.email && <ErrorMsg error={errors.email} />}
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="single-input-field field-website">
                                <input 
                                type="text" 
                                name='website'
                                value={values.website}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                placeholder="Type your website...." 
                                />
                                {touched.website && <ErrorMsg error={errors.website} />}
                            </div>
                        </div>

                    </div>
                    <div className="comment-btn mt-10">
                        <button className="fill-btn"><i className="fas fa-comments"></i><span>Get a
                            Quote</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogForm;