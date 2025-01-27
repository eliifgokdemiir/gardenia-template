import Link from 'next/link';
import React from 'react';
import portfolioThumb from "../../../public/assets/img/portfolio/portfolio-d-thumb.jpg";
import portfolioSub1 from "../../../public/assets/img/portfolio/portfolio-sub1.jpg";
import portfolioSub2 from "../../../public/assets/img/portfolio/portfolio-sub2.jpg";
import portfolioSub3 from "../../../public/assets/img/portfolio/portfolio-sub3.jpg";
import quoteIcon from "../../../public/assets/img/icon/qoute.png";
import portfolioImg from "../../../public/assets/img/portfolio/portfolio-3.jpg";
import portfolioIcon from "../../../public/assets/img/icon/port-dot.png";
import portfolioImgTwo from "../../../public/assets/img/portfolio/portfolio-4.jpg";
import Image from 'next/image';
import Breadcrumb from '@/common/Breadcrumb/breadcrumb';
import { idType } from '@/interFace/interFace';
import portfolioList from '@/data/portfolio-data';

const PortfolioDetailsArea = ({id}:idType) => {
    const portfolio = portfolioList?.find(item => item?.id == id);
    return (
        <>
        <Breadcrumb breadSubtitle='Provides hassle-free backyard transformation' breadTitle={portfolio?.portfolioTitle} breadHome={'Home'} breadMenu={'Portfolio Details'}/>
            <section className="portfolio-details-area pt-120 pb-90">
                <div className="container">
                    <div className="portfolio-details-wrapper wow fadeInUp" data-wow-delay=".3s">
                        <div className="portfolio-thumb">
                        <Image style={{width:"100%", height:"auto"}} src={portfolioThumb} alt="portfolio-thumb"/>
                        </div>
                        <div className="portfolio-meta-wrapper">
                            <div className="portfolio-meta">
                                <div className="meta-list">
                                    <div className="meta-item">
                                        <span>Client:</span>
                                        <p>Alonso D. Dowson</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Date:</span>
                                        <p>June 21, 2022</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Services:</span>
                                        <p>UI & UX, Website Design</p>
                                    </div>
                                    <div className="meta-item">
                                        <span>Category:</span>
                                        <p>Digital Marketing</p>
                                    </div>
                                </div>
                                <div className="portfolio-meta-btn">
                                    <Link href="#" className="fill-btn">Live Preview<i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <p className="mb-20">Our customized content solutions utilize key word density that we craft specifically for
                            your needs.We take pride in writing original, effective and engaging content that sets you
                            apart in an Internet awash with thin, dull filler copy. We develop your feature articles, newsletters,
                            white papers, social media messages harmoniously to generate top internet
                            rankings in any market. We take pride in giving your blog, newsletter or website the professional
                            polish it deserves and helping you build your brand. <Link href="/team">Our marketing team</Link> has
                            more than three decades of industry experience developing and promoting content across a broad
                            spectrum of channels. Our integrated marketing strategies have a proven
                            success record backed with industry-leading database management tools. When you choose Business
                            Content, you gain access to some of the most informative analytics in the industry, making every campaign an investment in your future success.</p>
                            <p><span>We know you have a choice.</span> We believe you’ll choose Business Content for our knowledge
                            and comprehensive marketing
                            programs. We know you’ll stay with us because of the
                            outstanding results and customer satisfaction we deliver. We’re dedicated to staying ahead of the
                            curve and being your
                            value-added marketing partner. We know you have a
                            choice. We believe you’ll choose Business Content for our knowledge and comprehensive marketing
                            programs. We know you’ll
                            stay with us because of the outstanding results &
                            customer satisfaction we deliver. We’re dedicated to staying ahead of the curve and being your
                            value-added marketing
                            partner.</p>
                        <div className="portfolio-sub-image">
                        <Image width={404} height={404}  src={portfolioSub1} alt="sub-image"/>
                        <Image width={404} height={404}  src={portfolioSub2} alt="sub-image"/>
                        <Image width={404} height={404}  src={portfolioSub3} alt="sub-image"/>
                        </div>
                        <div className="portfolio-quote">
                            <div className="quote-icon">
                            <Image style={{width:"auto", height:"auto"}} src={quoteIcon} alt="qoute"/>
                            </div>
                            <div className="quote-content">
                                <p>Business Content provides fully integrated marketing services designed to reach your target
                                    audience through specialized content and effective creative.</p>
                                <div className="author-name">James Anderson <span>-Head Of Idea</span></div>
                            </div>
                        </div>
                        <div className="portfolio-faq-wrapper">
                            <h4>some question & answers</h4>
                            <p className="mb-35">Still not convinced that gaming is good for you? That’s understandable, considering
                                concerns
                                long raised by parents that
                                include the treatment of women social gaming, violence in
                                games and gaming addiction. For more information, explore the Safer Gaming Guide from the Family
                                Online Safety
                                Institute.</p>
                            <div className="faq-wrapper">
                                <div className="gm-faq gm-faq-2column">
                                    <div className="accordion" id="accordionExample">
                                        <div className="gm-faq-group">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                        What does an inch of water mean?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                                                    data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                        How does gardening make you feel?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse show"
                                                    aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseThree" aria-expanded="false"
                                                        aria-controls="collapseThree">
                                                        How often should I fertilize my plants?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse collapse"
                                                    aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gm-faq-group">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingSeven">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseSeven" aria-expanded="false"
                                                        aria-controls="collapseSeven">
                                                        when it is the first frost or last frost?
                                                    </button>
                                                </h2>
                                                <div id="collapseSeven" className="accordion-collapse collapse"
                                                    aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingEight">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseEight" aria-expanded="false"
                                                        aria-controls="collapseEight">
                                                        Review Community Garden Proposal?
                                                    </button>
                                                </h2>
                                                <div id="collapseEight" className="accordion-collapse collapse"
                                                    aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingNine">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                        data-bs-target="#collapseNine" aria-expanded="false"
                                                        aria-controls="collapseNine">
                                                        What are the questions for gardening?
                                                    </button>
                                                </h2>
                                                <div id="collapseNine" className="accordion-collapse collapse"
                                                    aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                                                    <div className="accordion-body">
                                                        Gardens consist of a mix of natural and constructed elements, although
                                                        even very natural gardens are always an inherently artificial creation.
                                                        Natural elements present in a garden principally.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="portfolio-nav-wrapper">
                            <div className="portfolio-nav-items">
                                <div className="portfolio-single">
                                    <div className="portfolio-img">
                                        <Link href="#">
                                            <Image width={45} height={45} src={portfolioImg} alt="portfolio-img"/>
                                        </Link>
                                    </div>
                                    <div className="portfolio-content">
                                        <span>Prev Case</span>
                                        <h4 className="portfolio-title"><a href="#">Tips On Minimalist</a></h4>
                                    </div>
                                </div>
                                <div className="dot-icon">
                                <Image style={{width:"100%", height:"auto"}} src={portfolioIcon} alt="dot-img"/>
                                </div>
                                <div className="portfolio-single">
                                    <div className="portfolio-img">
                                        <Link href="#">
                                          <Image width={45} height={45} src={portfolioImgTwo} alt="portfolio-img"/>
                                        </Link>
                                    </div>
                                    <div className="portfolio-content">
                                        <span>Next Case</span>
                                        <h4 className="portfolio-title"><Link href="#">Less Is More</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PortfolioDetailsArea;