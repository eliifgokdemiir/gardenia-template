"use client"
import Link from 'next/link';
import React from 'react';
import productList from '../../data/products';
import Image from 'next/image';
import Pagination from '../sheared-components/Pagination';
import ProductModal from '@/common/modal/ProductModal';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlistSlice';
import { ProductsType } from '@/interFace/interFace';
import { useDispatch } from 'react-redux';
import useGlobalContext from '@/hooks/use-context';


const ShopMainArea = () => {
    const { setModalData } = useGlobalContext()
    const dispatch = useDispatch()
    const handleAddToCart = (product: ProductsType) => {
        if (product) {
            dispatch(cart_product(product))
        }
    }
    const handleAddToWishlist = (product: ProductsType) => {
        if (product) {
            dispatch(wishlist_product(product))
        }
    }
    return (
        <>
            <div className="product-area pt-120 pb-120">
                <div className="container">
                    <div className="product-filter-wrapper mb-20 wow fadeInUp" data-wow-delay=".3s">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="items-showing-text mb-15"><span className="items-showing">20</span> Item On List</div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="filter-buttons mb-15">
                                    <div className="dropdown filter-category-btn">
                                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="far fa-list"></i>filter
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item">Featured</button>
                                            </li>
                                            <li><button className="dropdown-item">Price: Low to
                                                High</button></li>
                                            <li><button className="dropdown-item">Price: High to
                                                Low</button></li>
                                            <li><button className="dropdown-item">New </button></li>
                                            <li><button className="dropdown-item">Avg. Rating</button></li>
                                        </ul>
                                    </div>
                                    <div className="v-line">|</div>
                                    <div className="dropdown filter-item-btn">
                                        <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Show 12<i className="fal fa-angle-down"></i>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><button className="dropdown-item">Show 12</button></li>
                                            <li><button className="dropdown-item">Show 16</button></li>
                                            <li><button className="dropdown-item">Show 20</button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="filter-tab-contents wow fadeInUp" data-wow-delay=".3s">
                        {productList &&
                            <div className="product-wrapper">
                                {productList.slice(0, 12).map((item, index) => {
                                    return (
                                        <div className="product-single" key={index}>
                                            <div className="product-thumb">
                                                <Link href={`/shop-details/${item.id}`}>
                                                <Image style={{width:"100%", height:"auto"}} src={item.productImg} alt="image" /></Link>
                                                <div className="product-item-action">
                                                    <span onClick={() => handleAddToCart(item)}><i className={item.cartIcon}></i></span>
                                                    <span onClick={() => setModalData(item)} data-bs-toggle="modal" data-bs-target="#productModalId"><i className={item.cartEye}></i></span>
                                                    <span onClick={() => handleAddToWishlist(item)}><i className={item.cartHeart}></i></span>
                                                </div>
                                            </div>
                                            <div className="product-description">
                                                <div className="rating"></div>
                                                <h4 className="product-name"><Link href={`/shop-details/${item.id}`}>{item.productTitle}</Link></h4>
                                                <div className="product-price">
                                                    <span className="price-old">{`$${item.priceOld}.00`}</span>
                                                    <span className="price-now">{`$${item.price}.00`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                    <Pagination />
                </div>
            </div>
            <ProductModal />
        </>
    );
};

export default ShopMainArea;