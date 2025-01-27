
"use client";
import CheckoutForm from '@/forms/CheckoutForm';
import React, { useState } from 'react';

const CheckoutLogin = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
        <>
            <div className="col-md-6">
                <div className="coupon-accordion">
                    <h3>
                        Returning customer?{' '}
                        <span id="showlogin" onClick={handleCheckboxChange}>
                            Click here to login
                        </span>
                    </h3>
                    <div id="checkout-login" className={`coupon-content ${isChecked ? "d-block" : "d-none"}`}>
                        <div className="coupon-info">
                            <p className="coupon-text">
                                Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                                sed est sit amet ipsum luctus.
                            </p>
                            <CheckoutForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutLogin;
