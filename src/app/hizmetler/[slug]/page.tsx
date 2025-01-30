import ServiceDetailsArea from '@/components/service-details/ServiceDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';
import ServicesList from '@/data/services-data';

const HizmetDetay = ({ params }: { params: { slug: string } }) => {
    const service = ServicesList.find(item => item.slug === params.slug);

    return (
        <MetaData pageTitle={service?.serviceTitle || "Hizmet"}>
            <Wrapper>
                <main>
                    <ServiceDetailsArea service={service} />
                </main>
            </Wrapper>
        </MetaData>
    );
};

export default HizmetDetay; 