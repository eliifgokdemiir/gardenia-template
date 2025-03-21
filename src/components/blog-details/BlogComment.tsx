import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import blogImg from "../../../public/assets/img/blog/blog-sm-6.jpg";
import blogImgTwo from "../../../public/assets/img/blog/blog-sm-7.jpg";
import avatar from "../../../public/assets/img/blog/blog-sm-8.jpg";

const BlogComment = () => {
    return (
        <div className="post-comments mb-45">
            <div className="post-comment-title mb-40">
                <h3>3 Comments</h3>
            </div>
            <div className="latest-comments">
                <ul>
                    <li>
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <Image style={{width:"100%", height:"auto"}} src={blogImg} className="img-fluid" alt="img" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>David Angel Makel</h5>
                                    <span className="post-meta"><i className="fas fa-calendar-alt"></i>24th June
                                        2022</span>
                                </div>
                                <p>For all the assets is hard and time-consuming technical work. And, of
                                    course, the result needs to be seamless and
                                    delightful — dare we say, even fun — to develop and maintain. Regardless of
                                    whether you’re ing up a storefront for a new
                                    merchant.</p>
                                <Link href="#" className="comment-reply"><i className="fas fa-reply"></i> Reply</Link>
                            </div>
                        </div>
                    </li>
                    <li className="children">
                        <div className="comments-box">
                            <div className="comments-avatar">
                            <Image style={{width:"100%", height:"auto"}} src={blogImgTwo} className="img-fluid" alt="img" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>Bailey Wonger</h5>
                                    <span className="post-meta"><i className="fas fa-calendar-alt"></i>18th June
                                        2022</span>
                                </div>
                                <p>Building a customer experience that will be visited by millions, the goal
                                    for Hydrogen is to eliminate undifferentiated
                                    and gnarly technical plumbing and enable you to start fast and focus on
                                    delivering merchant value.</p>
                                <Link href="#" className="comment-reply"><i className="fas fa-reply"></i> Reply</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="comments-box">
                            <div className="comments-avatar">
                                <Image style={{width:"100%", height:"auto"}} src={avatar} className="img-fluid" alt="img" />
                            </div>
                            <div className="comments-text">
                                <div className="avatar-name">
                                    <h5>Arista Williamson</h5>
                                    <span className="post-meta"><i className="fas fa-calendar-alt"></i>05th June
                                        2022</span>
                                </div>
                                <p>Unlocking such features and making them all work nicely together required
                                    that we work hands-on with React core team on
                                    helping define and prototype server components; Vite ecosystem on
                                    server-side streaming; Google’s Aurora team on
                                    integrating conformance.</p>
                                <Link href="#" className="comment-reply"><i className="fas fa-reply"></i> Reply</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BlogComment;