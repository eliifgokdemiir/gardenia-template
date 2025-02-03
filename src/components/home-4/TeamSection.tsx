import Link from 'next/link';
import React from 'react';
import TeamList from '../../data/team-data';
import Image from 'next/image';
import styles from './TeamSection.module.css';

const TeamSection = () => {
    return (
        <div className="team-area style-4 pt-20 pb-30">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title style-4 text-center">
                     <h2 className="section-main-title mb-45">Sosyal Medya Hesaplarımız</h2>
                     <p className="text-muted fs-6 mt-n2">Bizi Takip Edin</p>
                  </div>
               </div>
            </div>
            <div className="team-wrapper wow fadeInUp" data-wow-delay=".3s">
            {TeamList &&
               <div className="row justify-content-center">
                {TeamList.slice(0, 4).map((item, num) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex" key={num}>
                     <div className="team-single style-4 mb-30 w-100">
                        <div className="team-member-wrapper h-100">
                           <div className={`member-img rounded-circle overflow-hidden mx-auto ${styles.memberImgContainer}`}
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    border: '3px solid transparent',
                                    cursor: 'pointer'
                                }}>
                            <Link href={item.id == 1 ? "https://www.instagram.com/mazalipatisserie" : "https://www.instagram.com/mazalidoner"}>
                               <Image 
                                   src={item.teamImg} 
                                   alt="image not found"
                                   style={{ 
                                       width: '100%', 
                                       height: '100%', 
                                       objectFit: 'cover',
                                       transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)' 
                                   }}
                                   width={300}
                                   height={300}
                               />
                           </Link>
                           </div>
                           <div className="member-content text-center p-3">
                              <span className="member-designation d-block mb-2">{item.teamSubtitle}</span>
                              <h4 className="member-name">{item.teamTitle}</h4>
                              <div className="social-links team-social mt-auto">
                                 <ul className="justify-content-center">
                                    <li>
                                      {item.id === 1 ? (
                                        <Link 
                                            href="https://instagram.com/mazalipatisserie" 
                                            target="_blank"
                                            className={styles.socialLink}>
                                          <i className="fab fa-instagram"></i>
                                        </Link>
                                      ) : (
                                        <Link 
                                            href="https://instagram.com/mazalidoner" 
                                            target="_blank"
                                            className={styles.socialLink}>
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