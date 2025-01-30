import Link from 'next/link';
import React from 'react';
import ServicesList from '../../data/services-data';

const ServiceSectionFour = () => {
    // Belirli hizmetlerin slug'lerini tanımlayın
    const targetedSlugs = ['pastane', 'kafe', 'doner'];

    // Filtrelenmiş hizmetleri alın
    const filteredServices = ServicesList.filter(service => targetedSlugs.includes(service.slug || ''));

    // Slug'e göre ikon sınıflarını tanımlayın
    const iconMapping: { [key: string]: string } = {
        'pastane': 'fas fa-birthday-cake fa-3x', // Pastane ikonu
        'kafe': 'fas fa-coffee fa-3x',           // Kafe ikonu
        'doner': 'fas fa-drumstick-bite fa-3x',  // Döner ikonu
    };

    return (
        <section className="services-area style-4 pb-90">
            <div className="container">
                <div className="services-wrapper">
                    {filteredServices.length > 0 && (
                        <div className="row">
                            {filteredServices.map((item) => (
                                <div className="col-lg-4 col-md-6" key={item.id}>
                                    <div className="single-service single-service-style-4 mb-30">
                                        <div className="service-icon">
                                            {/* Belirli slug'e göre ikonları göster */}
                                            <i className={iconMapping[item.slug || ''] || 'fas fa-concierge-bell fa-3x'}></i>
                                        </div>
                                        <div className="single-service-content">
                                            <span className="service-number"></span>
                                            <h4 className="service-title">
                                                <Link href={`/hizmetler/${item.slug}`}>
                                                    {item.serviceTitle}
                                                </Link>
                                            </h4>
                                            <p>{item.serviceDesc}</p>
                                            <Link href={`/hizmetler/${item.slug}`} className="text-btn">
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