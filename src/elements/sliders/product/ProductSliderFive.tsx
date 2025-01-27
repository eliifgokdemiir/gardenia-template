"use client"
import ProductModal from '@/common/modal/ProductModal';
import productList from '@/data/products';
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigation, Scrollbar, A11y, Autoplay, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const ProductSliderFive = () => {
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
            <section className="featured-product-area style-2 pt-120 pb-90">
                <div className="container">
                    <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-8 col-md-12">
                            <div className="section-title style-5">
                                <span className="section-subtitle">featured product</span>
                                <h2 className="section-main-title mb-45">handpicked product</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="featured-porduct-nav mb-60">
                                <div className="featured-button-prev featured-nav-button"><i className="fal fa-long-arrow-left"></i></div>
                                <div className="featured-button-next featured-nav-button"><i className="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="procuct-wrapper featured-product-slide-wrapper mb-0 wow fadeInUp" data-wow-delay=".3s">
                        <div className="featured-product-active">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: true
                                    }}
                                    navigation={{
                                        nextEl: '.featured-button-next',
                                        prevEl: '.featured-button-prev',
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
                                    {productList.slice(16, 21).map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="product-single style-2">
                                                    <div className="product-thumb">
                                                        <Link href={`/shop-details/${item.id}`}>
                                                            <Image style={{width:"100%", height:'auto'}} src={item.productImg} alt="image not found" />
                                                        </Link>
                                                        <div className={item.trendingClass}><i className={item.trendingValue}></i></div>
                                                        <div className="product-batches">
                                                            <div className={item.newClass}>{item.newValue}</div>
                                                            <div className={item.discountClass}>{item.discountValue}</div>
                                                        </div>
                                                        <div className="product-item-action">
                                                            <span onClick={() => handleAddToCart(item)}><i className={item.cartIcon}></i></span>
                                                            <span onClick={() => setModalData(item)} data-bs-toggle="modal" data-bs-target="#productModalId"><i className={item.cartEye}></i></span>
                                                            <span onClick={() => handleAddToWishlist(item)}><i className={item.cartHeart}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="product-description">
                                                        <h4 className="product-name"><Link href={`/shop-details/${item.id}`}>{item.productTitle}</Link></h4>
                                                        <div className="product-price">
                                                            <span className="price-old">{`$${item.priceOld}.00`}</span>
                                                            <span className="price-now">{`$${item.price}.00`}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                        </div>
                    </div>
                </div>
            </section>
            <ProductModal />
        </>
    );
};

export default ProductSliderFive;