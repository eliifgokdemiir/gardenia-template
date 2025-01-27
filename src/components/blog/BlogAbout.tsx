import Image from 'next/image';
import React from 'react';
import aboutImg from "../../../public/assets/img/team/team-9.jpg";
import Link from 'next/link';


const BlogAbout = () => {
    return (
        <div className="sidebar-widget sidebar-about mb-50">
            <h4 className="sidebar-widget-title">About Me</h4>
            <div className="sidebar-about-content">
                <div className="profile-thumb">
                    <Image style={{width:"100%", height:"auto"}} src={aboutImg} alt="about-img" />
                </div>
                <h4 className="member-name">Alonso D. Dowson</h4>
                <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore.</p>
                <div className="social-links">
                    <ul>
                        <li><Link href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                        <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                        <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogAbout;