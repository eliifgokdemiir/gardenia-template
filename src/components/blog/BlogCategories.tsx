import Link from 'next/link';
import React from 'react';

const BlogCategories = () => {

    interface TBlogCategory {
        id:number,
        catName:string,
        catNumber:number
    }

    const blogCategoryItems:TBlogCategory[] = [
        {
            id: 1,
            catName: 'Business',
            catNumber: 26,
        },
        {
            id: 2,
            catName: 'Consultant',
            catNumber: 30,
        },
        {
            id: 3,
            catName: 'Creative',
            catNumber:71,
        },
        {
            id: 4,
            catName: 'UI/UX',
            catNumber: 5,
        },
        {
            id: 5,
            catName: 'Technology',
            catNumber: 60,
        }
    ]

    return (
        <div className="sidebar-widget sidebar-category mb-50">
            <h4 className="sidebar-widget-title">Categories</h4>
            <div className="sidebar-category-list">
                {blogCategoryItems && 
                <ul>
                    {blogCategoryItems.map((item, num) => ( 
                        <li key={num}>
                            <Link href="/blog">
                                <span className="category-name">{item.catName}</span>
                                <div className="category-item-number">{item.catNumber}</div>
                           </Link>
                        </li>
                    ))}
                </ul>
                }
            </div>
        </div>
    );
};

export default BlogCategories;