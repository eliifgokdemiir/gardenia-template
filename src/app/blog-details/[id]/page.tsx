import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import BlogDetailsArea from '@/components/blog-details/BlogDetailsArea';
import MetaData from '@/hooks/useMetaData';
import Wrapper from '@/layout/DefaultWrapper';
import React from 'react';

const BlogDetailsMain = ({ params }: { params: { id: number } }) => {
    const id = params.id;
    return (
        <>
        <MetaData pageTitle="Blog Details">
            <Wrapper>
                <main>
                <Breadcrumb breadTitle={'blog details'} breadSubtitle={'Provides hassle-free backyard transformation'} breadHome={'Home'} breadMenu={'blog details'} />
                <BlogDetailsArea id={id}/>
                </main>
            </Wrapper>
        </MetaData>
        </>
    );
};

export default BlogDetailsMain;