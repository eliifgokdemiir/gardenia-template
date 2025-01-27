import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import TeamList from '@/data/team-data';
import ContactForm from '@/forms/ContactForm';
import { idType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TeamDetailsArea = ({id}:idType) => { 
    const team = TeamList?.find(item => item?.id == id);
    return (
        <>
   <Breadcrumb breadTitle={team?.teamTitle} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Team Details'} />
            <div className="team-details-area pt-120 pb-60">
                <div className="container">
                    <div className="team-detais-wrapper">
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-xl-5">
                                <div className="member-img">
                                   {team?.teamImg &&  <Image style={{width:"100%", height:"auto"}} src={team?.teamImg} alt="member-img" />}
                                    <div className="member-contact">
                                        <ul>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-phone"></i>
                                                    </div>
                                                    <p>Tel: <a href="tel:+123-4561-5523">+123-4561-5523</a></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-envelope-open"></i>
                                                    </div>
                                                    <p>Email: <Link href="mailto:example@email.com">example@email.com</Link></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="single-contact">
                                                    <div className="contact-icon">
                                                        <i className="fas fa-map-marked-alt"></i>
                                                    </div>
                                                    <p>Add: <Link href="#">Flat 20, Reynolds Neck</Link></p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="team-details-content-wrapper mb-60">
                                    <span className="member-designation">{team?.teamSubtitle}</span>
                                    <h4 className="member-name">{team?.teamTitle}</h4>
                                    <p className="mb-20">Most gardens consist of a mix of natural and constructed elements, although
                                        even very
                                        natural gardens are always an inherently artificial creation. Natural elements present in
                                        a garden principally.</p>
                                    <p className="mb-35">The English garden usually included a lake, sweeps of gently rolling lawns set
                                        against
                                        groves of trees, and recreations of classical temples, Gothic ruins, bridges, and other
                                        picturesque architecture, designed to recreate an idyllic pastoral landscape. Gardens are
                                        also thought of as an image of the soul and innocence.</p>
                                    <div className="hr-1"></div>
                                    <div className="team-details-social">
                                        <h4 className="section-widget-title">follow me on</h4>
                                        <div className="social-links team-social">
                                            <ul>
                                                <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="hr-1"></div>
                                    <div className="team-details-skill mt-35">
                                        <h4 className="section-widget-title">skillset</h4>
                                        <p className="mb-20">The English garden usually included a lake, sweeps of gently rolling lawns
                                            set against
                                            groves of trees, and recreations of classical temples.</p>
                                        <div className="bd-skill--content">
                                            <div className="bd-skill__wrapper mb-25">
                                                <div className="bd-skill--title__wrapper">
                                                    <h5 className="bd-skill--title">soil making</h5>
                                                    <span style={{ right: 0 }}>90%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                                                        data-wow-delay="0.5s" role="progressbar" style={{ width: '90%' }} aria-valuenow={25}
                                                        aria-valuemin={0} aria-valuemax={100}><span></span></div>
                                                </div>
                                            </div>
                                            <div className="bd-skill__wrapper mb-25">
                                                <div className="bd-skill--title__wrapper">
                                                    <h5 className="bd-skill--title">troubleshooting</h5>
                                                    <span style={{ right: 0 }}>60%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                                                        data-wow-delay="0.6s" role="progressbar" style={{ width: '60%' }} aria-valuenow={25}
                                                        aria-valuemin={0} aria-valuemax={100}><span></span></div>
                                                </div>
                                            </div>
                                            <div className="bd-skill__wrapper mb-25">
                                                <div className="bd-skill--title__wrapper">
                                                    <h5 className="bd-skill--title">fund rise</h5>
                                                    <span style={{ right: 0 }}>70%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                                                        data-wow-delay="0.7s" role="progressbar" style={{ width: '70%' }} aria-valuenow={25}
                                                        aria-valuemin={0} aria-valuemax={100}><span></span></div>
                                                </div>
                                            </div>
                                            <div className="bd-skill__wrapper mb-25">
                                                <div className="bd-skill--title__wrapper">
                                                    <h5 className="bd-skill--title">day time support</h5>
                                                    <span style={{ right: 0 }}>50%</span>
                                                </div>
                                                <div className="progress">
                                                    <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                                                        data-wow-delay="0.8s" role="progressbar" style={{ width: '50%' }} aria-valuenow={25}
                                                        aria-valuemin={0} aria-valuemax={100}><span></span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hr-1"></div>
                                    <div className="team-details-contact mt-35">
                                        <h4 className="section-widget-title">Contact Me</h4>
                                        <p className="mb-25">It also symbolizes consciousness because of its enclosed characteristics, as
                                            opposed
                                            to the forest. Gardens are commonly considered feminine and represent fertility.</p>
                                        <div className="contact-form">
                                           <ContactForm/>
                                        </div>
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

export default TeamDetailsArea;