import Link from 'next/link';
import React from 'react';

const BlogTag = () => {
    return (
        <div className="sidebar-widget sidebar-tags mb-50">
            <h4 className="sidebar-widget-title">Tags</h4>
            <div className="sidebar-tag-list">
                <Link href="/blog" className="tag">Popular</Link>
                <Link href="/blog" className="tag">Design</Link>
                <Link href="/blog" className="tag">UX</Link>
                <Link href="/blog" className="tag">Usability</Link>
                <Link href="/blog" className="tag">Develop</Link>
                <Link href="/blog" className="tag">Icon</Link>
                <Link href="/blog" className="tag">Business</Link>
                <Link href="/blog" className="tag">Consult</Link>
                <Link href="/blog" className="tag">Kit</Link>
                <Link href="/blog" className="tag">Keyboard</Link>
                <Link href="/blog" className="tag">Mouse</Link>
                <Link href="/blog" className="tag">Tech</Link>
            </div>
        </div>
    );
};

export default BlogTag;