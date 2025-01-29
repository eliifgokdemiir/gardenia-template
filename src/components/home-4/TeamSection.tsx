import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';
import Image from 'next/image';

const TeamSection = () => {
    return (
        <div className="team-area style-4 pt-120 pb-155">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-4 text-center">
                     <h2 className="section-main-title mb-45">Sosyal Medya Hesaplarımız</h2>
                  </div>
               </div>
            </div>
            <div className="team-wrapper hover-img-border wow fadeInUp" data-wow-delay=".3s">
            {TeamList &&
               <div className="row justify-content-center">
                {TeamList.slice(0, 4).map((item, num) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex" key={num}>
                     <div className="team-single style-4 mb-30 w-100">
                        <div className="team-member-wrapper h-100">
                           <div className="member-img rounded-circle overflow-hidden mx-auto" 
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '3px solid #fff',
                                    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
                                }}>
                              <Link href={`/team-details/${item.id}`}>
                               <Image 
                                   src={item.teamImg} 
                                   alt="image not found"
                                   style={{ 
                                       width: '100%', 
                                       height: '100%', 
                                       objectFit: 'cover',
                                       transform: 'scale(1)'
                                   }}
                                   width={300}
                                   height={300}
                               />
                              </Link>
                           </div>
                           <div className="member-content text-center p-3">
                              <span className="member-designation d-block mb-2">{item.teamSubtitle}</span>
                              <h4 className="member-name"><Link href={`/team-details/${item.id}`}>{item.teamTitle}</Link></h4>
                              <div className="social-links team-social mt-auto">
                                 <ul className="justify-content-center">
                                    <li>
                                      {item.id === 1 ? (
                                        <Link href="https://instagram.com/mazalipatisserie" target="_blank">
                                          <i className="fab fa-instagram"></i>
                                        </Link>
                                      ) : (
                                        <Link href="https://instagram.com/mazalidoner" target="_blank">
                                          <i className="fab fa-instagram"></i>
                                        </Link>
                                      )}
                                    </li>
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

export default TeamSection;