import { factList } from '@/data/fact-list-data';
import CountUpContent from '@/elements/counter/CountUpContent';
import Image from 'next/image';
import React from 'react';
import counterBg from "../../../public/assets/img/shape/counter-bg-img.png";

const FactSectionThree = () => {

    return (
        <div className="counter-area style-1">
            <div className="counter-bg-img-left">
                <Image style={{width:"100%", height:"auto"}} src={counterBg} alt="counter-bg"/>
            </div>
            <div className="counter-bg-img-right">
            <Image style={{width:"100%", height:"auto"}} src={counterBg} alt="counter-bg"/>
            </div>
            <div className="container">
                <div className="counter-wrapper">
                {factList &&
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        {factList.map((item, num) => (
                        <div className="col-lg-3 col-md-6" key={num}>
                            <div className="single-counter style-1">
                                <div className="counter-serial">{item.factSerial}</div>
                                <h2 className="counter-number"><span className="counter"><CountUpContent number={item.factNumber} text={item.factTextK} /></span></h2>
                                <p className="counter-text">{item.factText}</p>
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

export default FactSectionThree;