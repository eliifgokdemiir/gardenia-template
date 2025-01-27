"use client";
import { ProductsType } from '@/interFace/interFace';
import { cart_wishlist_product } from '@/redux/slices/cartSlice';
import { remove_wishlist_product } from '@/redux/slices/wishlistSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const WishlistSection = () => {
    const dispatch = useDispatch();
    const wishlistProducts = useSelector(
        (state: RootState) => state.wishlist.cartProducts
    );

    const handleAddToCart = (product: ProductsType) => {
        const modifyProduct = wishlistProducts.find(
            (item) => item.id === product?.id
        );
        if (modifyProduct) {
            dispatch(cart_wishlist_product(modifyProduct));
        }
    };

    return (
        <div className="cart-area pt-100 pb-100">
            <div className="container container-small">
                {wishlistProducts?.length ? (
                    <>
                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                            <div className="col-12">
                                <form>
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="product-thumbnail">Images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="product-price">Unit Price</th>
                                                    <th className="product-quantity">Add to cart</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {wishlistProducts?.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="product-thumbnail">
                                                            <Link href={`/shop-details/${item.id}`}>
                                                                <Image width={125} height={146} src={item.productImg.src} alt="img" />
                                                            </Link>
                                                        </td>
                                                        <td className="product-name">
                                                            <Link href={`/shop-details/${item.id}`}>
                                                                {item.productTitle}
                                                            </Link>
                                                        </td>
                                                        <td className="product-price">
                                                            <span className="amount">
                                                                ${item.price ? item.price.toFixed(2) : "0.00"}
                                                            </span>
                                                        </td>
                                                        <td className="product-quantity">
                                                            <button
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    handleAddToCart(item);
                                                                }}
                                                                className="border-btn"
                                                            >
                                                                Add to Cart
                                                            </button>
                                                        </td>
                                                        <td className="product-subtotal">
                                                            <span className="amount">{`$${item.price ?? 0}.00`}</span>
                                                        </td>
                                                        <td
                                                            className="product-remove"
                                                            onClick={() => dispatch(remove_wishlist_product(item))}
                                                        >
                                                            <i className="fa fa-times"></i>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center">
                        <h3>Your wishlist is empty</h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WishlistSection;
