import React from 'react';
import Image from 'next/image';
import { homeOneWorkItems } from '@/data/work-data';

const WorkSection = () => {
    return (
      <section className="work-process-area process-area-bg pt-120 pb-65">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">work process</span>
                     <h2 className="section-main-title mb-45">how we work</h2>
                  </div>
               </div>
            </div>
            <div className="how-works-wrapper wow fadeInUp" data-wow-delay=".3s">
            {homeOneWorkItems &&
               <div className="working-steps working-steps-2">
                {homeOneWorkItems.map((item) => (     
                  <div className="work-step work-step-2" key={item.id}>
                     <div className={item.workClass}></div>
                     <div className="work-step-icon">
                        <Image src={item.workImg} width={62} height={60} alt="img not found"/>
                     </div>
                     <h4>{item.workTitle}</h4>
                     <p>{item.workDesc}</p>
                  </div>
                ))}
               </div>
            }
            </div>
         </div>
      </section>
   );
};

export default WorkSection;