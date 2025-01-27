"use client"
import blogItemsList from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import blogImg from "../../../public/assets/img/blog/blog-3.jpg";
import blogImg2 from "../../../public/assets/img/blog/blog-1.jpg";
import quoteIcon from "../../../public/assets/img/icon/quote-icon.png";
import BlogAbout from './BlogAbout';
import BlogSearch from './BlogSearch';
import SidebarBlogs from './SidebarBlogs';
import BlogCategories from './BlogCategories';
import BlogTag from './BlogTag';
import SponsorAdd from './SponsorAdd';


const BlogSectionMain = () => {
   const [isOpen, setIsOpen] = useState(false);
   const openVideoModal = () => setIsOpen(!isOpen);

   return (
      <section className="blog-area pt-120 pb-60">
         <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
               <div className="col-xl-9 col-lg-8 col-md-12">
                  <div className="blog-main-wrapper mb-60">
                     {blogItemsList.slice(11, 15).map((blog, i) => (
                        <div key={i} className="blog-single">

                           {!blog.video && !blog.slider && !blog.withoutImg && <div className="blog-thumb">
                              <Link href={`/blog-details/${blog.id}`}><Image style={{width:"100%", height:"auto"}} src={blog.img} alt="blog-img" /></Link>
                           </div>}

                           {blog.video && <div className="blog-thumb">
                              <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openVideoModal(); }} />
                              <Link href={`/blog-details/${blog.id}`}><Image style={{width:"100%", height:"auto"}} src={blog.img} alt="blog-img" /></Link>
                              <span className="play-btn popup-video play-border-effect" onClick={() => { openVideoModal(); }}><i className="fas fa-play"></i></span>
                           </div>}

                           {blog.withoutImg && <div className="blog-thumb d-none">
                              <Link href={`/blog-details/${blog.id}`}><Image style={{width:"100%", height:"auto"}} src={blogImg} alt="blog-img"/></Link>
                           </div>}

                           {blog.slider && <div className="blog-thumb">
                              <div className="blog-thumb-slider">
                                    <Swiper
                                       modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                       spaceBetween={30}
                                       slidesPerView={1}
                                       loop={true}
                                       autoplay={{
                                          delay: 3000,
                                          disableOnInteraction: true
                                       }}
                                       navigation={{
                                          nextEl: '.blog-thumb-button-next',
                                          prevEl: '.blog-thumb-button-prev',
                                       }}
                                    >
                                       <SwiperSlide>
                                             <Link href={`/blog-details/${blog.id}`}>
                                                   <Image style={{width:"100%", height:"auto"}} src={blog.img} alt="blog-image" />
                                             </Link>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                             <Link href={`/blog-details/${blog.id}`}>{blogImg2 && <Image style={{width:"100%", height:"auto"}} src={blogImg2} alt="blog-image" />}</Link>
                                       </SwiperSlide>
                                       <SwiperSlide>
                                             <Link href={`/blog-details/${blog.id}`}>{blogImg && <Image style={{width:"100%", height:"auto"}} src={blogImg} alt="blog-image" />}</Link>
                                       </SwiperSlide>
                                    </Swiper>
                                 <div className="blog-thumb-nav blog-thumb-nav">
                                    <div className="blog-thumb-button-prev blog-thumb-nav-btn"><i
                                       className="fal fa-long-arrow-left"></i>
                                    </div>
                                    <div className="blog-thumb-button-next blog-thumb-nav-btn"><i
                                       className="fal fa-long-arrow-right"></i>
                                    </div>
                                 </div>
                              </div>
                           </div>}

                           <div className="blog-content">
                              <div className={blog.catClass}>
                                 <Link href="/blog">{blog.blogCat} </Link>
                                 <Link href="/blog">{blog.blogCatA}</Link>
                              </div>
                              <div className={blog.authorClass}>
                                 <div className="author-img">
                                    {blog.metaAuthorImg && <Image style={{width:"100%", height:"auto"}} src={blog.metaAuthorImg} alt="blog-image" />}
                                 </div>
                                 <h4 className="author-name">{blog.metaBy} <Link href="#">{blog.metaAuthor}</Link></h4>
                              </div>
                              <h2 className="blog-title"><Link href={`/blog-details/${blog.id}`}>{blog.title}</Link></h2>
                              <p>{blog.desc}</p>
                              <div className="hr-1"></div>
                              <div className="blog-meta-list">
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-eye"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       {blog.blogView}
                                    </div>
                                 </div>
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-comments"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       <Link href={`/blog-details/${blog.id}`}>{blog.blogComment}</Link>
                                    </div>
                                 </div>
                                 <div className="blog-meta-single">
                                    <div className="blog-meta-icon">
                                       <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="blog-meta-text">
                                       {blog.date}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}

                     <div className="blockquote-wrapper">
                        <div className="blockquote-content">
                           <div className="blockquote-icon">
                              <Image src={quoteIcon} alt="quote-icon" />
                           </div>
                           <p>Office/partnership by submitting all
                              the relevant documents</p>
                        </div>
                     </div>
                     <div className="basic-pagination mt-50">
                        <ul>
                           <li><Link className="prev page-numbers" href="#"><i className="fal fa-angle-double-left"></i></Link></li>
                           <li><span aria-current="page" className="page-numbers current">1</span></li>
                           <li><Link className="page-numbers" href="#">2</Link></li>
                           <li><Link className="next page-numbers" href="#"><i className="fal fa-angle-double-right"></i></Link></li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div className="col-xl-3 col-lg-4 col-md-8">
                  <div className="blog-sidebar_wrapper mb-60">
                     <BlogAbout />
                     <BlogSearch />
                     <SidebarBlogs />
                     <BlogCategories />
                     <BlogTag />
                     <SponsorAdd />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BlogSectionMain;