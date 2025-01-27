import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import BlogSectionMain from '@/components/blog/BlogSectionMain';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const page = () => {
    return (
        <>
        <MetaData pageTitle="Blog">
            <Wrapper>
                <main>
                <Breadcrumb breadTitle={'blog & insights'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'Blog'} />
                <BlogSectionMain />
                </main>
            </Wrapper>
        </MetaData>
        </>
    );
};

export default page;