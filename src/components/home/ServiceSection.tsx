"use client"
import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';
import ShapeImg from '../../../public/assets/img/shape/pattern-1270.png';
import Image from 'next/image';
import { imageLoader } from '@/hooks/image-loader';

const ServiceSection = () => {
    return (
        <section className="services-area services-area-2">
         <div className="container">
            <div className="services-wrapper services-wrapper-2">
            {ServicesList &&
                <div className="services-inner services-inner-2 wow fadeInUp" data-wow-delay=".3s">
                    <div className="row g-0">
                    {ServicesList.slice(0, 4).map ((item) => (
                        <div className="col-lg-3 col-md-6" key={item.id}>
                            <div className="single-service style-2">
                            <div className="service-img">
                             {
                                item.serviceImg && 
                                <Image loader={imageLoader}
                                width={500} 
                                height={300} 
                            style={{ width: "100%", height: "auto" }} src={item.serviceImg}  alt="service-img"/>
                             }
                            </div>
                            <div className="single-service-content">
                                <div className="service-icon">
                                    <i className={item.serviceIcon}></i>
                                </div>
                                <h4 className="service-title"><Link href={`/service-details/${item.id}`}>{item.serviceTitle}</Link></h4>
                                <p>{item.serviceDesc}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            }
               <div className="services-action-wrapper wow fadeInUp" data-wow-delay=".3s">
                  <div className="service-action-bg-shape">
                  <Image
              src={ShapeImg}
              width={1270} 
              height={500}
              style={{ width: "100%", height: "auto" }}
              alt="shape-img"
            />
                  </div>
                  <h3>Provides Hassle-Free Backyard Transformations
                     with Artistic Solutions.</h3>
                    <Link href="/contact" className="fill-btn-rounded"><i className="fal fa-farm"></i><span>Get a Quote</span></Link>
               </div>
            </div>
         </div>
      </section>
    );
};

export default ServiceSection;