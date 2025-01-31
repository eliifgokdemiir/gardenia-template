import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionFour = () => {
   
    const targetedSlugs = ['pastane', 'kafe', 'doner'];

 
    const filteredServices = ServicesList.filter(service => targetedSlugs.includes(service.slug || ''));

  
    const iconMapping: { [key: string]: string } = {
        'pastane': 'fas fa-birthday-cake fa-3x', 
        'kafe': 'fas fa-coffee fa-3x',          
        'doner': 'fas fa-drumstick-bite fa-3x', 
    };

    return (
        <section className="services-area style-4 pb-90">
            <div className="container">
                <div className="services-wrapper">
                    {filteredServices.length > 0 && (
                        <div className="row">
                            {filteredServices.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="single-service single-service-style-4 mb-30" style={{ 
                                        minHeight: '400px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div className="service-icon" style={{ padding: '20px 0' }}>
                                            <i className={iconMapping[item.slug || ''] || 'fas fa-concierge-bell fa-3x'}></i>
                                        </div>
                                        <div className="single-service-content" style={{ 
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div>
                                                <h4 className="service-title" style={{ minHeight: '60px' }}>
                                                    <Link href={`/hizmetler/${item.slug}`}>
                                                        {item.serviceTitle}
                                                    </Link>
                                                </h4>
                                                <p style={{ 
                                                    minHeight: '80px',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                }}>{item.serviceDesc}</p>
                                            </div>
                                            <Link href={`/hizmetler/${item.slug}`} className="text-btn" style={{ marginTop: '20px' }}>
                                                <i className="fal fa-long-arrow-right"></i>
                                                {item.serviceBtn || 'Detaylı İncele'}
                                                <i className="fal fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ServiceSectionFour;