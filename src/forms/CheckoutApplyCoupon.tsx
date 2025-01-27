import { couponForm } from '@/utils/validation-schema';
import { useFormik } from 'formik';
import React from 'react';
import { toast } from 'sonner';
import ErrorMsg from './ErrorMsg';

const CheckoutApplyCoupon = () => {
    // use formik
    const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
      initialValues: {
        coupon: "",
      },
      validationSchema: couponForm,
      onSubmit: (values, { resetForm }) => {
        toast.success("Coupon applied successfully!");
        resetForm();
      },
    });
  
    return (
      <form onSubmit={handleSubmit}>
        <p className="checkout-coupon">
          <input
            type="text"
            name="coupon"
            placeholder="Coupon Code"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.coupon}
          />
          {touched.coupon && <ErrorMsg error={errors.coupon} />}
          <button className="fill-btn" type="submit">
            Apply Coupon
          </button>
        </p>
      </form>
    );
  };
  
  export default CheckoutApplyCoupon;