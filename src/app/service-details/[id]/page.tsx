import ServiceDetailsArea from "@/components/service-details/ServiceDetailsArea";
import { Metadata } from 'next';
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import ServicesList from '@/data/services-data';

// Metadata tanımlama
export const metadata: Metadata = {
  title: 'Hizmet Bulunamadı | Mazali',
  description: 'Aradığınız hizmet bulunamadı.',
};

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  
  const service = ServicesList.find(s => s.id === id);
  
  if (!service) {
    return (
      <Wrapper>
        <main>
          <div className="container py-5">
            <h1>Hizmet Bulunamadı</h1>
            <p>Aradığınız hizmet mevcut değil.</p>
          </div>
        </main>
      </Wrapper>
    );
  }
  
  return (
    <Wrapper>
      <main>
        <ServiceDetailsArea service={service} />
      </main>
    </Wrapper>
  );
}
