import Link from 'next/link';
import React from 'react';
import teamAwardImg from "../../../public/assets/img/team/team-award1.png";
import teamAwardImg2 from "../../../public/assets/img/team/team-award2.png";
import teamAwardImg3 from "../../../public/assets/img/team/team-award3.png";
import Image from 'next/image';
import IntroImage from "../../../public/assets/img/team/team-intro-img.jpg";

const TeamIntroSection = () => {
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
                                <Link href="#">
                                  <Image style={{width:"100%", height:"auto"}} src={teamAwardImg} alt="team-award"/>
                                </Link>
                                <Link href="#"> <Image style={{width:"100%", height:"auto"}} src={teamAwardImg2} alt="team-award"/></Link>
                                <Link href="#"> <Image style={{width:"100%", height:"auto"}} src={teamAwardImg3} alt="team-award"/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="team-intro-thumb">
                            <Image style={{width:"100%", height:"auto"}} src={IntroImage} alt="intro-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamIntroSection;