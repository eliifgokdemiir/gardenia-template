import Link from 'next/link';
import React from 'react';

const BlogActions = () => {
    return (
        <div className="blog-actions mb-60">
            <div>
                <h4>Releted Tags</h4>
                <div className="blog-tag-list">
                    <Link href="/blog" className="tag">Popular</Link>
                    <Link href="/blog" className="tag">Design</Link>
                    <Link href="/blog" className="tag">UX</Link>
                </div>
            </div>
            <div>
                <h4>Social Share</h4>
                <div className="social-links blog-share">
                    <ul>
                        <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                        <li><Link href="https://x.com/"  target="_blank"><i className="fab fa-twitter"></i></Link></li>
                        <li><Link href="https://www.behance.net/" target="_blank"><i className="fab fa-behance"></i></Link></li>
                        <li><Link href="https://www.youtube.com/" target="_blank"><i className="fab fa-youtube"></i></Link></li>
                        <li><Link href="https://www.linkedin.com/" target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BlogActions;