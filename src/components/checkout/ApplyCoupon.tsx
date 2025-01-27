"use client"
import CheckoutApplyCoupon from '@/forms/CheckoutApplyCoupon';
import React, { useState } from 'react';

const ApplyCoupon = () => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    return (
        <>
              <div className="col-md-6">
                <div className="coupon-accordion">
                    <h3>Have a coupon? <span id="showcoupon" onClick={handleCheckboxChange}>Click here to enter your code</span></h3>
                    <div id="checkout_coupon" className={`coupon-checkout-content ${isChecked ? "danger" : "d-block"}`}>
                        <div className="coupon-info">
                            <CheckoutApplyCoupon/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApplyCoupon;