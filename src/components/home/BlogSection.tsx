import Link from 'next/link';
import React from 'react';
import blogItemsList from '../../data/blogs';
import Image from 'next/image';

const BlogSection = () => {
    return (
        <section className="blog-area pt-120 pb-75">
         <div className="container">
            <div className="row justify-content-center wow fadeInUp" data-wow-delay=".3s">
               <div className="col-lg-8">
                  <div className="section-title text-center">
                     <span className="section-subtitle">news</span>
                     <h2 className="section-main-title mb-45">blog & insights</h2>
                  </div>
               </div>
            </div>
            <div className="blog-wrapper wow fadeInUp" data-wow-delay=".3s">
            {blogItemsList &&
               <div className="row">
                {blogItemsList.slice(0, 3).map((item, num) => (
                  <div className="col-lg-4 col-md-6" key={num}>
                     <div className="blog-single blog-general mb-45">
                        <div className="blog-thumb">
                           <Link href={`/blog-details/${item.id}`}>
                           <Image src={item.img} style={{ width: "100%", height: "auto" }} alt="blog-details"/>
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
                                 <Link href={`/blog-details/${item.id}`} className="text-btn">
                                 <i className="fal fa-long-arrow-right"></i>{item.blogBtn}<i className="fal fa-long-arrow-right"></i></Link>
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

export default BlogSection;