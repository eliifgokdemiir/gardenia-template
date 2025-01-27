import Link from 'next/link';
import React from 'react';
import awardImg from "../../../public/assets/img/team/team-award1.png";
import awardImg2 from "../../../public/assets/img/team/team-award2.png";
import awardImg3 from "../../../public/assets/img/team/team-award3.png";
import teamIntro from "../../../public/assets/img/team/team-intro-img.jpg";
import Image from 'next/image';

const TeamIntroSectionTwo = () => {
    return (
        <section className="team-intro-area pt-120 pb-60 wow fadeInUp" data-wow-delay=".3s">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="team-intro-content mb-60">
                            <div className="section-title">
                                <span className="section-subtitle">winning awards</span>
                                <h2 className="section-main-title mb-45">Every single olive<br/>
                                    oil has been carefully chosen by our expert</h2>
                            </div>
                            <div className="team-award-logo">
                                <Link href="#"><Image style={{width:"100%", height:"auto"}} src={awardImg} alt="image not found"/></Link>
                                <Link href="#"><Image style={{width:"100%", height:"auto"}} src={awardImg2} alt="image not found"/></Link>
                                <Link href="#"><Image style={{width:"100%", height:"auto"}} src={awardImg3} alt="image not found"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="team-intro-thumb">
                        <Image style={{width:"100%", height:"auto"}} src={teamIntro} alt="image not found"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamIntroSectionTwo;