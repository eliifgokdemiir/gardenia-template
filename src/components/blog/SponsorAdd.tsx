import Image from 'next/image';
import React from 'react';
import blogSidebarImg from "../../../public/assets/img/blog/blog-sidebar-adv.jpg";

const SponsorAdd = () => {
    return (
        <div className="sidebar-widget sidebar-adv mb-50">
            <h4 className="sidebar-widget-title">Sponsor Adds</h4>
            <Image style={{width:"100%", height:"auto"}} src={blogSidebarImg} alt="image not found" />
        </div>
    );
};

export default SponsorAdd;