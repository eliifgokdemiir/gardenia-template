import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';
import Image from 'next/image';

const TeamsSection = () => {
    return (
        <div className="team-area pt-120 pb-60">
         <div className="container">
            <div className="team-wrapper hover-img-border">
                {TeamList &&
                <div className="row">
                    {TeamList.slice(0, 8).map((item, num) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={num}>
                        <div className="team-single mb-30">
                            <div className="team-member-wrapper">
                            <div className="member-img">
                                <Link href={`/team-details/${item.id}`}>
                                     <Image width={220} height={220} style={{width:"auto", height:"auto"}} src={item.teamImg} alt="team-img"/>
                                </Link>
                            </div>
                            <div className="member-content">
                                <span className="member-designation">{item.teamSubtitle}</span>
                                <h4 className="member-name"><Link href={`/team-details/${item.id}`}>{item.teamTitle}</Link></h4>
                                <div className="social-links team-social">
                                    <ul>
                                        <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                }
            </div>
         </div>
      </div>
    );
};

export default TeamsSection;