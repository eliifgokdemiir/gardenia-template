import Image from 'next/image';
import React from 'react';
import blogWriterImg from "../../../public/assets/img/blog/blog-writer-img.jpg";

const BlogWritter = () => {
    return (
        <div className="blog-writer">
            <div className="blog-writer-img">
                <Image src={blogWriterImg} alt="blog" />
            </div>
            <div className="blgo-writer-content">
                <span>Written by</span>
                <h4 className="writer-name">Rosalina D. William</h4>
                <p>Getting fast initial render with streaming server-side rendering, efficient
                    component-level updates and state transitions, while also setting up a
                    performant loading and bundling strategy.</p>
            </div>
        </div>
    );
};

export default BlogWritter;