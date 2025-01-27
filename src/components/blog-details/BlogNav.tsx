import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import portfolioImg from "../../../public/assets/img/portfolio/portfolio-3.jpg";
import portfolioTwo from "../../../public/assets/img/portfolio/portfolio-4.jpg";

const BlogNav = () => {
    return (
        <div className="blog-nav-wrapper mb-60">
            <div className="blog-nav-items">
                <div className="blog-single">
                    <div className="blog-img">
                        <Link href="/blog-details">
                          <Image width={45} height={45} src={portfolioImg} alt="image-not-found" />
                        </Link>
                    </div>
                    <div className="blog-content">
                        <span>Prev post</span>
                        <h4 className="blog-title"><Link href="/blog-details">Tips On Minimalist</Link></h4>
                    </div>
                </div>
                <div className="dot-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="40px" height="40px">
                        <path fillRule="evenodd" fill="rgb(11, 61, 44)"
                            d="M34.285,25.708 C31.135,25.708 28.571,23.145 28.571,19.993 C28.571,16.843 31.135,14.279 34.285,14.279 C37.436,14.279 40.000,16.843 40.000,19.993 C40.000,23.145 37.436,25.708 34.285,25.708 ZM34.285,15.708 C31.922,15.708 30.000,17.630 30.000,19.993 C30.000,22.357 31.922,24.279 34.285,24.279 C36.649,24.279 38.571,22.357 38.571,19.993 C38.571,17.630 36.649,15.708 34.285,15.708 ZM34.285,11.422 C31.135,11.422 28.571,8.859 28.571,5.709 C28.571,2.557 31.135,-0.005 34.285,-0.005 C37.436,-0.005 40.000,2.557 40.000,5.709 C40.000,8.859 37.436,11.422 34.285,11.422 ZM34.285,1.422 C31.922,1.422 30.000,3.346 30.000,5.709 C30.000,8.072 31.922,9.995 34.285,9.995 C36.649,9.995 38.571,8.072 38.571,5.709 C38.571,3.346 36.649,1.422 34.285,1.422 ZM20.000,39.995 C16.849,39.995 14.285,37.430 14.285,34.280 C14.285,31.129 16.849,28.564 20.000,28.564 C23.150,28.564 25.714,31.129 25.714,34.280 C25.714,37.430 23.150,39.995 20.000,39.995 ZM20.000,29.995 C17.636,29.995 15.714,31.917 15.714,34.280 C15.714,36.644 17.636,38.565 20.000,38.565 C22.363,38.565 24.285,36.644 24.285,34.280 C24.285,31.917 22.363,29.995 20.000,29.995 ZM20.000,25.708 C16.849,25.708 14.285,23.145 14.285,19.993 C14.285,16.843 16.849,14.279 20.000,14.279 C23.150,14.279 25.714,16.843 25.714,19.993 C25.714,23.145 23.150,25.708 20.000,25.708 ZM20.000,15.708 C17.636,15.708 15.714,17.630 15.714,19.993 C15.714,22.357 17.636,24.279 20.000,24.279 C22.363,24.279 24.285,22.357 24.285,19.993 C24.285,17.630 22.363,15.708 20.000,15.708 ZM20.000,11.422 C16.849,11.422 14.285,8.859 14.285,5.709 C14.285,2.557 16.849,-0.005 20.000,-0.005 C23.150,-0.005 25.714,2.557 25.714,5.709 C25.714,8.859 23.150,11.422 20.000,11.422 ZM20.000,1.422 C17.636,1.422 15.714,3.346 15.714,5.709 C15.714,8.072 17.636,9.995 20.000,9.995 C22.363,9.995 24.285,8.072 24.285,5.709 C24.285,3.346 22.363,1.422 20.000,1.422 ZM5.714,39.995 C2.563,39.995 -0.000,37.430 -0.000,34.280 C-0.000,31.129 2.563,28.564 5.714,28.564 C8.865,28.564 11.428,31.129 11.428,34.280 C11.428,37.430 8.865,39.995 5.714,39.995 ZM5.714,29.995 C3.350,29.995 1.428,31.917 1.428,34.280 C1.428,36.644 3.350,38.565 5.714,38.565 C8.078,38.565 10.000,36.644 10.000,34.280 C10.000,31.917 8.078,29.995 5.714,29.995 ZM5.714,25.708 C2.563,25.708 -0.000,23.145 -0.000,19.993 C-0.000,16.843 2.563,14.279 5.714,14.279 C8.865,14.279 11.428,16.843 11.428,19.993 C11.428,23.145 8.865,25.708 5.714,25.708 ZM5.714,15.708 C3.350,15.708 1.428,17.630 1.428,19.993 C1.428,22.357 3.350,24.279 5.714,24.279 C8.078,24.279 10.000,22.357 10.000,19.993 C10.000,17.630 8.078,15.708 5.714,15.708 ZM5.714,11.422 C2.563,11.422 -0.000,8.859 -0.000,5.709 C-0.000,2.557 2.563,-0.005 5.714,-0.005 C8.865,-0.005 11.428,2.557 11.428,5.709 C11.428,8.859 8.865,11.422 5.714,11.422 ZM5.714,1.422 C3.350,1.422 1.428,3.346 1.428,5.709 C1.428,8.072 3.350,9.995 5.714,9.995 C8.078,9.995 10.000,8.072 10.000,5.709 C10.000,3.346 8.078,1.422 5.714,1.422 ZM34.285,28.564 C37.436,28.564 40.000,31.129 40.000,34.280 C40.000,37.430 37.436,39.995 34.285,39.995 C31.135,39.995 28.571,37.430 28.571,34.280 C28.571,31.129 31.135,28.564 34.285,28.564 ZM34.285,38.565 C36.649,38.565 38.571,36.644 38.571,34.280 C38.571,31.917 36.649,29.995 34.285,29.995 C31.922,29.995 30.000,31.917 30.000,34.280 C30.000,36.644 31.922,38.565 34.285,38.565 Z">
                        </path>
                    </svg>
                </div>
                <div className="blog-single">
                    <div className="blog-img">
                        <Link href="/blog-details">
                        <Image width={45} height={45} src={portfolioTwo} alt="image-not-found" />
                        </Link>
                    </div>
                    <div className="blog-content">
                        <span>Next post</span>
                        <h4 className="blog-title"><Link href="/blog-details">Less Is More</Link></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogNav;