
import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <section className="bd-error__area pt-90 pb-130">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="bd-error__page-content text-center">
                                <div className="bd-error__number">
                                    <h2 className="error-number">404</h2>
                                </div>
                                <div className="bd-error__text">
                                    <h3>Opps! Page Not Found</h3>
                                    <p className='mb-30'>Sorry mate … Something is wrong</p>
                                </div>
                                <Link href="/" className="fill-btn">
                                    <span>Go Back Home</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;
