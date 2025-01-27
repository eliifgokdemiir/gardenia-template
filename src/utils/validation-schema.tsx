import * as Yup from 'yup';

//blog Comment schema
export const commentForm = Yup.object().shape({
  comment: Yup.string().required().min(20).label("Comment"),
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  website: Yup.string().required().url().label("Website"),
});
//coupon schema
export const couponForm = Yup.object().shape({
  coupon: Yup.string().required('Coupon code is required').min(5, 'Coupon must be at least 5 characters long').label("Coupon"),
});
// contact_schema
export const contact_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  massage: Yup.string().required().min(20).label("Massage"),
});
// review_schema
export const review_schema = Yup.object().shape({
  comment: Yup.string().required().min(20).label("Comment"),
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
});
// Login_schema
export const login_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

//forgot schema
export const forgotten_schema = Yup.object().shape({
  email: Yup.string().required().email().label("Email")
});
// Login_schema
export const register_schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});