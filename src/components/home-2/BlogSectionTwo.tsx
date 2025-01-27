"use client"
import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';
import Image from 'next/image';
import { imageLoader } from '@/hooks/image-loader';

interface TBlogProps {
    blog_area_class?:string,
    blog_single_class?:string,
}

const BlogSectionTwo = ({blog_area_class , blog_single_class}:TBlogProps) => {
    return (
        <section className={`blog-area ${blog_area_class ? blog_area_class : 'blog-area-2 pb-75'}`}>
            <div className="container">
                <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-8">
                        <div className="section-title text-center style-2">
                            <span className="section-subtitle">[ blog ]</span>
                            <h2 className="section-main-title mb-45">blog & insights</h2>
                        </div>
                    </div>
                </div>
                <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
                    {blogItemsList &&
                        <div className="row">
                            {blogItemsList.slice(3, 6).map((item, num) => (
                                <div className="col-lg-4 col-md-6" key={num}>
                                    <div className={`blog-single ${blog_single_class ? blog_single_class : 'style-2 mb-45'}`}>
                                        <div className="blog-thumb">
                                            <Link href={`/blog-details/${item.id}`}>
                                               <Image style={{width:"100%", height:'auto'}} loader={imageLoader} src={item.img} alt="blog-image" />
                                            </Link>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-meta-list">
                                                <div className="blog-meta-single">
                                                    <div className="blog-meta-text">
                                                        <div className="blog-date">{item.date}</div>
                                                    </div>
                                                </div>
                                                <div className="blog-meta-single">
                                                    <div className="blog-meta-text">
                                                        {item.metaBy} <span>{item.metaAuthor}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="blog-title"><Link href={`/blog-details/${item.id}`}>{item.title}</Link></h2>
                                            <div className="blog-btn">
                                                <Link href={`/blog-details/${item.id}`} className="text-btn"><i className="fal fa-long-arrow-right">
                                                    </i>{item.blogBtn}<i className="fal fa-long-arrow-right"></i></Link>
                                            </div>
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

export default BlogSectionTwo;