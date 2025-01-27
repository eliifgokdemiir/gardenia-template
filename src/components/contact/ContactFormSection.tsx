import Image from 'next/image';
import React from 'react';
import ContactImage from "../../../public/assets/img/about/contact-img.jpg";
import ContactForm from '@/forms/ContactForm';

const ContactFormSection = () => {
    return (
        <section className="contact-area pt-120">
            <div className="container">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12">
                        <div className="contact-wrapper">
                            <div className="contact-wrapper-content">
                                <div className="section-title">
                                    <span className="section-subtitle">call to action</span>
                                    <h2 className="section-main-title mb-35">Send Us A Message
                                        For Next Project</h2>
                                </div>
                                <div className="contact-form">
                                    <ContactForm/>
                                </div>
                            </div>
                            <div className="contact-wrapper-img">
                                <Image style={{width:"100%", height:"100%"}} src={ContactImage} alt="contact-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormSection;