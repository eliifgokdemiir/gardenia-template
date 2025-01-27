"use client"
import Image from 'next/image';
import React from 'react';
import factBatch from "../../../public/assets/img/icon/fact-batch.png"
import CountUpContent from '@/elements/counter/CountUpContent';
import { factListData } from '@/data/fact-list-data';

const FactSection = () => {
    return (
        <section className="fact-area fact-area-bg">
            <div className="fact-batch">
                <Image src={factBatch} style={{ width: "100%", height: "auto" }} alt="fact-batch"/>
            </div>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-12 col-md-10">
                        <div className="section-title fact-title text-center">
                            <span className="section-subtitle">fun fact</span>
                            <h2 className="section-main-title mb-45">We handle everything for you!</h2>
                        </div>
                    </div>
                </div>
                <div className="fact-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {factListData &&
                        <div className="row">
                            {factListData.map((item) => (
                                <div className="col-lg-4" key={item.id}>
                                    <div className={item.factPlant}>
                                        <div className="fact-content">
                                            <span className="fact-title">{item.factTitle}</span>
                                            <span className="fact-number counter">
                                            <CountUpContent number={item.factNumber}/>
                                                </span>
                                            <div className="fact-icon">
                                                <Image width={28} height={26} src={item.factIcon} alt="fact-icon"/>
                                            </div>
                                            <p>{item.factDesk}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default FactSection;