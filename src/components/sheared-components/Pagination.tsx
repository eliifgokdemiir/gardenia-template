import Link from 'next/link';
import React from 'react';

const Pagination = () => {
    return (
        <div className="basic-pagination mt-0 wow fadeInUp" data-wow-delay=".3s">
            <ul>
                <li><Link className="prev page-numbers" href="#"><i className="fal fa-angle-double-left"></i></Link></li>
                <li><span aria-current="page" className="page-numbers current">1</span></li>
                <li><Link className="page-numbers" href="#">2</Link></li>
                <li><Link className="page-numbers" href="#">3</Link></li>
                <li><Link className="next page-numbers" href="#"><i className="fal fa-angle-double-right"></i></Link></li>
            </ul>
        </div>
    );
};

export default Pagination;