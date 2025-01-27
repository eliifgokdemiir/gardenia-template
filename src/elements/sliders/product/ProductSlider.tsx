"use client"
import ProductModal from '@/common/modal/ProductModal';
import productList from '@/data/products';
import GetRatting from '@/hooks/GetRatting';
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductSlider = () => {
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
            <div className="swiper-container product-active">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Scrollbar, A11y, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true
                        }}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            }
                        }}
                    >
                        {productList.slice(0, 10).map((item, index) => {

                            return (
                                <SwiperSlide key={index}>
                                    <div className="product-single">
                                        <div className="product-thumb">
                                            <Link href={`/shop-details/${item.id}`}>
                                             <Image style={{width:"100%", height:"auto"}} src={item.productImg} alt="product-image" />
                                            </Link>
                                            <div className="product-item-action">
                                                <span onClick={() => handleAddToCart(item)}><i className={item.cartIcon}></i></span>
                                                <span onClick={() => setModalData(item)} data-bs-toggle="modal" data-bs-target="#productModalId"><i className={item.cartEye}></i></span>
                                                <span onClick={() => handleAddToWishlist(item)}><i className={item.cartHeart}></i></span>
                                            </div>
                                        </div>
                                        <div className="product-description">
                                            <div className="rating">
                                            {item.ratings && <GetRatting averageRating={item.ratings} />}
                                            </div>
                                            <h4 className="product-name"><Link href={`/shop-details/${item.id}`}>{item.productTitle}</Link></h4>
                                            <div className="product-price">
                                                <span className="price-old">${item.priceOld}</span>
                                                <span className="price-now">${item.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )

                        })}
                    </Swiper>
                </div>
            </div>
            <ProductModal />

        </>
    );
};

export default ProductSlider;