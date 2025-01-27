import React from 'react';
import blogImg from '../../../public/assets/img/blog/img-details1.jpg';
import quoteIcon from '../../../public/assets/img/icon/quote-icon-white-small.png';
import Image from 'next/image';
import { idType } from '@/interFace/interFace';
import blogItemsList from '@/data/blogs';
import Link from 'next/link';
import BlogActions from './BlogActions';
import BlogNav from './BlogNav';
import BlogWritter from './BlogWriter';
import BlogComment from './BlogComment';
import BlogForm from '@/forms/BlogForm';
import BlogAbout from '../blog/BlogAbout';
import BlogSearch from '../blog/BlogSearch';
import SidebarBlogs from '../blog/SidebarBlogs';
import BlogCategories from '../blog/BlogCategories';
import BlogTag from '../blog/BlogTag';
import SponsorAdd from '../blog/SponsorAdd';

const BlogDetailsArea = ({id}:idType) => {
    const item = blogItemsList?.find(item => item.id == id);

    return (
        <>
            <section className="blog-area pt-120 pb-60">
            <div className="container">
               <div className="row wow fadeInUp" data-wow-delay=".3s">
                  <div className="col-xl-9 col-lg-8 col-md-12">
                     <div className="blog-details-wrapper mb-60">
                        <div className="blog-single-details">
                           <div className="blog-meta-list">
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-eye"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item?.blogView && item.blogView}
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-comments"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    <Link href="/blog-details">{item?.blogComment && item.blogComment}</Link>
                                 </div>
                              </div>
                              <div className="blog-meta-single">
                                 <div className="blog-meta-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                 </div>
                                 <div className="blog-meta-text">
                                    {item?.date}
                                 </div>
                              </div>
                           </div>
                           <p className="mb-55">A great commerce experience cannot be distilled to a single number. It’s not a
                              Lighthouse
                              score, or a set of Core Web
                              Vitals figures, although both are important inputs. A great commerce experience is a trilemma
                              that carefully balances
                              competing needs of delivering great customer experience, dynamic storefront capabilities, and
                              long-term business —
                              conversion, retention, re-engagement — objectives. As developers, we rightfully obsess about
                              the customer experience,
                              relentlessly working to squeeze every millisecond out of the critical rendering path,
                              optimize input latency, and
                              eliminate jank. At the limit, statically generated, edge delivered, and HTML-first pages look
                              like the optimal strategy.
                              That is until you are confronted with the realization that the next step function in
                              improving conversion rates and
                              business.</p>
                           <div className="blog-thumb">
                        {item?.img && <Image style={{width:"100%", height:"auto"}} src={item?.img} alt="blog-img" />}
                           </div>
                           <h3>{item?.title}</h3>
                           <p className="pb-50">The journey, often, starts “simple” with localization. But then, quickly
                              advances to
                              contextual pricing, juggling
                              complexity of large and frequently updated product catalog, managing continuously running
                              multivariate tests and
                              promotion campaigns, and serving customer-tailored dynamic recommendations. Eventually, you
                              reach a realization that
                              every page is similar to an open Tetris board where each “slot” can and should be dynamically
                              tailored by dynamic
                              visitor preferences, all powered by an ever-growing set of dynamic business rules.</p>
                           <div className="hr-1"></div>
                           <h3>Setting the mood with incense</h3>
                           <div className="img-details mb-50">
                              <Image style={{width:"100%", height:"auto"}} src={blogImg} alt="blog-img" />
                              <p>From connecting back-office operations to front-of-the-house A/B testing and dynamic
                                 personalization for each customer,
                                 the shared foundation is fast
                                 server-side rendering powered by fast storefront data access. On top of this foundation,
                                 we add layers of caching,
                                 prerendering and edge delivery
                                 optimizations — not the other way around.</p>
                           </div>
                           <div className="blockquote-d-wrapper mb-50">
                              <div className="blockquote-d-content">
                                 <div className="blockquote-d-icon">
                                 <Image  src={quoteIcon} alt="icon" />
                                 </div>
                                 <p>Choices to take a holiday and travelling
                                    out inthis pandemic situation are limited. Why not take a stay action on quality.</p>
                                 <h4 className="author-name">Rosalina D. William</h4>
                                 <span className="author-designation">Founder</span>
                              </div>
                           </div>
                           <p className="mb-45">Surveying the existing landscape of available developer tools and runtimes, we
                              felt that
                              there is a gap. Enabling
                              dynamic commerce requires close integration between server and client, an optimized streaming
                              and data fetch strategy,
                              and a production platform that operates at scale. These are hard technical problems that
                              Shopify can help solve and this
                              is why we’ve been hard at work on the Hydrogen framework. It’s a React-based framework
                              optimized for commerce and
                              specialized to be powered by Shopify APIs and infrastructure: The future of commerce is
                              dynamic and personalized.</p>
                           <BlogActions />
                           <BlogNav />
                           <BlogWritter />
                           <BlogComment />
                           <div className="hr-1"></div>
                           <BlogForm />
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
        </>
    );
};

export default BlogDetailsArea;