"use client"
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { RootState } from '@/redux/store';
import { cart_product, clear_cart, decrease_quantity, remove_cart_product } from '@/redux/slices/cartSlice';
import { ProductsType } from '@/interFace/interFace';

const CartSection = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
      );
      const totalPrice = cartProducts.reduce(
        (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
        0
      );
      const removeAllProduct = () => {
        dispatch(clear_cart());
      };
    
      const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product));
      };
    
      const handDecressCart = (product: ProductsType) => {
        dispatch(decrease_quantity(product));
      };
    
      const handleDelteProduct = (product: ProductsType) => {
        dispatch(remove_cart_product(product));
      };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
    
    return (
        <>
            {cartProducts.length === 0 && 
                <div className="container">
                    <div className="empty-text pt-100 pb-100 text-center">
                        <h3>Your cart is empty</h3>
                    </div>
                </div>
            }

            {cartProducts.length >= 1 && <section className="cart-area pt-100 pb-100">
            <div className="container container-small">
                <div className="row wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-12">
                        <div className="table-content table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Images</th>
                                        <th className="cart-product-name">Product</th>
                                        <th className="product-price">Unit Price</th>
                                        <th className="product-quantity">Quantity</th>
                                        <th className="product-subtotal">Total</th>
                                        <th className="product-remove">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {cartProducts.map((item, index) => (
                                        <tr key={index}>
                                            <td className="product-thumbnail">
                                                <Link href={`/shop-details/${item.id}`}>
                                                   <Image width={125} height={146} src={item.productImg} alt="" />
                                                </Link>
                                            </td>
                                            <td className="product-name"><Link href={`/shop-details/${item.id}`}>{item.productTitle}</Link></td>
                                            <td className="product-price"><span className="amount">{`$${item.price}.00`}</span></td>
                                            <td className="product-quantity text-center">
                                                <div className="product-quantity mt-10 mb-10">
                                                    <div className="product-quantity-form">
                                                        <form onSubmit={e => e.preventDefault()}>
                                                            <button type='button' className="cart-minus" onClick={() => handDecressCart(item)}><i className="far fa-minus"></i></button>
                                                            <input className="cart-input" type="text" onChange={handleChange}
                                    value={item.quantity}
                                    readOnly />
                                                            <button type='button' className="cart-plus" onClick={() => handleAddToCart(item)}><i className="far fa-plus"></i></button>
                                                        </form>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="product-subtotal"><span className="amount"> {`$${(item?.quantity ?? 1) * (item?.price ?? 0)}.00`}</span></td>
                                            <td className="product-remove" onClick={() => handleDelteProduct(item)}><i className="fa fa-times"></i></td>
                                        </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="coupon-all">
                                    <div className="coupon d-flex align-items-center">
                                        <input id="coupon_code" className="input-text" name="coupon_code" 
                                            placeholder="Coupon code" type="text" />
                                        <button className="fill-btn" name="apply_coupon" type="submit">Apply
                                            coupon</button>
                                    </div>
                                    <div className="coupon2">
                                        <button className="fill-btn" name="update_cart" type="submit" onClick={removeAllProduct}>Clear cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 ml-auto">
                                <div className="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul className="mb-20">
                                        <li>Subtotal <span>{`$${totalPrice.toFixed(0)}.00`}</span></li>
                                        <li>Total <span>{`$${totalPrice.toFixed(0)}.00`}</span></li>
                                    </ul>
                                    <Link href="/checkout" className="border-btn">Proceed to checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>}
        </>
    );
};

export default CartSection;