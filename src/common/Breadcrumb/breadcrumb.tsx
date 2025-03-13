import Link from 'next/link';
import React from 'react';
import breadcrumbBg from "../../../public/assets/img/bg/yeni-iletisim-bg.jpg";
import Image from 'next/image';

interface BreadcrumbProps {
    breadTitle?: string;
    breadSubtitle: string;
    breadHome: string;
    breadMenu: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
    breadTitle = 'Ürün Detayı',
    breadSubtitle, 
    breadHome, 
    breadMenu 
}) => {
    return (
        <section className="breadcrumb-area theme-bg">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="page-title-wrapper">
                        <p>{breadSubtitle}</p>
                        <h1 className="page-title mb-10">{breadTitle}</h1>
                     </div>
                  </div>
               </div>
            </div>
            <div className="breadcrumb-wrapper">
               <div className="container">
                  <div className="breadcrumb-menu">
                     <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                        <ul className="trail-items">
                           <li className="trail-item trail-begin"><Link href="/"><span>{breadHome}</span></Link></li>
                           <li className="trail-item trail-end"><span>{breadMenu}</span></li>
                        </ul>
                     </nav>
                  </div>
               </div>
            </div>
        </section>
    );
};

export default Breadcrumb;