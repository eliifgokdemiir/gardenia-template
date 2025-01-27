"use client"
import useGlobalContext from '@/hooks/use-context';
import { ProductsType } from '@/interFace/interFace';
import { cart_product } from '@/redux/slices/cartSlice';
import { wishlist_product } from '@/redux/slices/wishlistSlice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import product1 from "../../../public/assets/img/product/product-3.png";
import product2 from "../../../public/assets/img/product/product-4.png";
import product3 from "../../../public/assets/img/product/product-5.png";
import GetRatting from '@/hooks/GetRatting';

const ProductModal = () => {
    const dispatch = useDispatch()
    const { modalData } = useGlobalContext()
    const handleAddToCart = (product: ProductsType) => {
        dispatch(cart_product(product))
    }
    const handleAddToWishlist = (product: ProductsType) => {
        if (product) {
            dispatch(wishlist_product(product))
        }
    }
    return (
        <div className="modal fade" id="productModalId" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered product__modal" role="document">
                <div className="modal-content">
                    <div className="product__modal-wrapper p-relative">
                        <div className="product__modal-close p-absolute">
                            <button data-bs-dismiss="modal"><i className="fal fa-times"></i></button>
                        </div>
                        <div className="product__modal-inner">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-box">
                                        <div className="tab-content" id="modalTabContent">
                                            <div className="tab-pane fade show active" id="nav1" role="tabpanel"
                                                aria-labelledby="nav1-tab">
                                                <div className="product__modal-img w-img">
                                                {modalData?.productImg && <Image src={modalData?.productImg} style={{ width: "100%", height: "auto" }} alt="product" />}
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                                <div className="product__modal-img w-img">
                                                <Image src={product1} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                                <div className="product__modal-img w-img">
                                                <Image src={product2} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                                <div className="product__modal-img w-img">
                                                <Image src={product3} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="nav nav-tabs" id="modalTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                    data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                    aria-selected="true">
                                                  {modalData?.productImg && <Image src={modalData?.productImg} style={{ width: "100%", height: "auto" }} alt="product" />}
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav2-tab" data-bs-toggle="tab" data-bs-target="#nav2"
                                                    type="button" role="tab" aria-controls="nav2" aria-selected="false">
                                                     <Image src={product1} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav3-tab" data-bs-toggle="tab" data-bs-target="#nav3"
                                                    type="button" role="tab" aria-controls="nav3" aria-selected="false">
                                                    <Image src={product2} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="nav4-tab" data-bs-toggle="tab" data-bs-target="#nav4"
                                                    type="button" role="tab" aria-controls="nav4" aria-selected="false">
                                                     <Image src={product3} style={{ width: "100%", height: "auto" }} alt="product" />
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="product__modal-content">
                                        <h4><Link href={`/shop-details/${modalData?.id}`}>{modalData?.productTitle}</Link></h4>
                                        <div className="product__modal-des mb-40">
                                            <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum
                                                claritatem.
                                                Investigationes demonstraverunt </p>
                                        </div>
                                        <div className="product__stock">
                                            <span>Availability :</span>
                                            <span>In Stock</span>
                                        </div>
                                        <div className="product__stock sku mb-30">
                                            <span>SKU:</span>
                                            <span>Juicera C49J89: £875, Debenhams Plus</span>
                                        </div>
                                        <div className="product__review d-sm-flex">
                                            <div className="rating rating__shop mb-15 mr-35">
                                                <ul>
                                                <GetRatting averageRating={modalData.ratings} />
                                                </ul>
                                            </div>
                                            <div className="product__add-review mb-15">
                                                <span><span>{modalData.ratings} Review</span></span>
                                                <span><span>Add Review</span></span>
                                            </div>
                                        </div>
                                        <div className="product__price">
                                            <span>{`$${modalData?.price}.00`}</span>
                                        </div>
                                        <div className="product__modal-form">
                                            <div className="product-quantity-cart mb-30">
                                                <button onClick={() => handleAddToCart(modalData)} type='button' className="fill-btn">Add to Cart</button>
                                            </div>
                                        </div>
                                        <div className="product__modal-links">
                                            <ul>
                                                <li><button onClick={() => handleAddToWishlist(modalData)} type='button' title="Add to Wishlist"><i className="fal fa-heart"></i></button></li>
                                                <li><Link href="#" title="Compare"><i className="far fa-sliders-h"></i></Link></li>
                                                <li><Link href="#" title="Print"><i className="fal fa-print"></i></Link></li>
                                                <li><Link href="#" title="Share"><i className="fal fa-share-alt"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;