import Link from 'next/link';
import React from 'react';
import serviceImg1 from '../../../public/assets/img/service/service-img1.jpg';
import Image from 'next/image';
//service work icon
import workIcon1 from "../../../public/assets/img/icon/work-icon1.png";
import workIcon2 from "../../../public/assets/img/icon/work-icon2.png";
import workIcon3 from "../../../public/assets/img/icon/work-icon3.png";

import subImg1 from "../../../public/assets/img/service/service-sub1.jpg";
import subImg2 from "../../../public/assets/img/service/service-sub2.jpg";
import serviceSidebarImg from "../../../public/assets/img/service/service-sidebar-adv.jpg";
import { idType } from '@/interFace/interFace';
import ServicesList from '@/data/services-data';
import { TServiceData } from '@/data/services-data';

interface Props {
    service?: TServiceData;
}

const ServiceDetailsArea = ({ service }: Props) => {
    return (
        <>
            <section className="breadcrumb-area theme-bg pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-title-wrapper">
                            <h1>{service?.serviceTitle}</h1>
                            <p>{service?.serviceDesc}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-wrapper">
                    <div className="container">
                        <div className="breadcrumb-menu">
                            <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link href="/"><span>Anasayfa</span></Link></li>
                                    <li className="trail-item"><Link href="/service"><span>HİZMETLER</span></Link></li>
                                    <li className="trail-item trail-end"><span>{service?.serviceTitle || "Yükleniyor..."}</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-area pt-60 pb-90">
                <div className="container">
                    <div className="services-wrapper">
                        {ServicesList && 
                            <div className="row">
                                {ServicesList.slice(0, 6).map((item, num) => (
                                    <div className="col-lg-4 col-md-6" key={num}>
                                        <div className="single-service single-service-default mb-30">
                                            <div className="service-icon">
                                                {item.serviceIconImg && 
                                                    <Image 
                                                        style={{ width: "100%", height: "auto" }} 
                                                        src={item.serviceIconImg} 
                                                        alt="service icon" 
                                                    />}
                                            </div>
                                            <div className="single-service-content">
                                                <h4 className="service-title">
                                                    <Link href={`/service-details/${item.id}`}>
                                                        {item.serviceTitle}
                                                    </Link>
                                                </h4>
                                                <p>{item.serviceDesc}</p>
                                                <Link 
                                                    href={`/service-details/${item.id}`} 
                                                    className='text-btn'
                                                >
                                                    <i className="fal fa-long-arrow-right"></i>
                                                    {item.serviceBtn}
                                                    <i className="fal fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsArea;