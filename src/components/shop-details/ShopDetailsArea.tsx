"use client"
import productList from '@/data/products';
import { idType, ProductsType } from '@/interFace/interFace';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import product1 from '../../../public/assets/img/product/product-8.png';
import product2 from '../../../public/assets/img/product/product-12.png';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { cart_product, decrease_quantity } from '@/redux/slices/cartSlice';
import ShopDescription from './ShopDescription';
import AdditionalInformation from './AdditionalInformation';
import ProductReview from './ProductReview';
import RiviewForm from '@/forms/RiviewForm';


const ShopDetailsArea = ({id}:idType) => {
    const product = productList?.find(item =>item?.id == id)as ProductsType;
    const dispatch = useDispatch()

    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const myData = cartProducts.find((item: { id: any; }) => item.id === product?.id);

    const handleAddToCart = (product: ProductsType) => {
        if (product) {
            dispatch(cart_product(product))
        }
    }
    const handleDecrease = (product: ProductsType) => {
        if (product) {
            dispatch(decrease_quantity(product));
        }
    }
    return (
        <>
            <section className="shop-details-area pt-120 pb-90">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay=".3s">
                        <div className="col-lg-6">
                            <div className="product-d-img-tab-wrapper mb-60">
                                <div className="product-d-img-nav">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pro-1-tab" data-bs-toggle="tab"
                                                data-bs-target="#pro-1" type="button" role="tab" aria-controls="pro-1"
                                                aria-selected="false">
                                                      {product?.productImg && <Image style={{ width: "100%", height: "auto" }} src={product?.productImg} alt="product"/>}
                                           
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-2-tab" data-bs-toggle="tab" data-bs-target="#pro-2"
                                                type="button" role="tab" aria-controls="pro-2" aria-selected="true">
                                                <Image style={{ width: "100%", height: "auto" }} src={product1}  alt="product"/>
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pro-3-tab" data-bs-toggle="tab" data-bs-target="#pro-3"
                                                type="button" role="tab" aria-controls="pro-3" aria-selected="false">
                                                    <Image style={{ width: "100%", height: "auto" }} src={product2} alt="product"/>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-d-img-tab">
                                    <div className="tab-content" id="productDetailsTab">
                                        <div className="tab-pane fade active show" id="pro-1" role="tabpanel"
                                            aria-labelledby="pro-1-tab">
                                                {product?.productImg && <Image className="active" style={{ width: "100%", height: "auto" }} src={product?.productImg} alt="product"/>}
                                        </div>
                                        <div className="tab-pane fade" id="pro-2" role="tabpanel" aria-labelledby="pro-2-tab">
                                       <Image className="active" style={{ width: "100%", height: "auto" }} src={product1}  alt="product"/>
                                        </div>
                                        <div className="tab-pane fade" id="pro-3" role="tabpanel" aria-labelledby="pro-3-tab">
                                        <Image className="active" style={{ width: "100%", height: "auto" }} src={product2} alt="product"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product-side-info mb-60">
                                <div className="product-category-review">
                                    <div className="product-d-category">
                                        Organic, Food
                                    </div>
                                    <div className="product-d-review">
                                        <div className="rating">
                                       
                                        </div>
                                        <span>10 Reviews</span>
                                    </div>
                                </div>
                                <h4 className="product-name">{product?.productTitle}</h4>
                                <div className="product-price">
                                    <span className="price-old">{`$${product?.priceOld}.00`}</span>
                                    <span className="price-now">{`$${product?.price}.00`}</span>
                                </div>

                                <p className="mb-30">Gardomia has brought to you 3 Pieces Combo Pack PS23 garden solution. It is a
                                    completely modern product and you feel comfortable to put on your garden.
                                    Buy it at the best price.</p>
                                <div className="product-quantity-cart mb-30">
                                    <div className="product-quantity-form">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <button onClick={() => handleDecrease(product)} className="cart-minus"><i className="far fa-minus"></i></button>
                                            <input className="cart-input" type="text" readOnly value={myData?.quantity || 0} />
                                            <button onClick={() => handleAddToCart(product)} className="cart-plus" ><i className="far fa-plus"></i></button>
                                        </form>
                                    </div>
                                    <Link href="/cart" className="fill-btn">View Cart</Link>
                                    <button className="border-btn" type='button'><i className="fas fa-heart"></i></button>
                                </div>
                                <div className="product-d-meta sku mb-10">
                                    <span>SKU:</span>
                                    <span>BO1D0MX8SJ</span>
                                </div>
                                <div className="product-d-meta ockcategories mb-10">
                                    <span>Categories:</span>
                                    <span>Garden, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta tags mb-10">
                                    <span>Tags:</span>
                                    <span>Vegetable, Flower, Leaf</span>
                                </div>
                                <div className="product-d-meta share mb-10">
                                    <span>Share:</span>
                                    <div className="social-links">
                                        <ul>
                                            <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-behance"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product_info-faq-area pb-0 pt-20 wow fadeInUp" data-wow-delay=".3s">
                        <div className="product-details-tab-wrapper">
                            <nav className="product-details-nav mb-30">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <Link className="nav-item nav-link active" id="pro-info-1-tab" data-bs-toggle="tab" href="#pro-info-1"
                                        role="tab" aria-selected="true">Description</Link>
                                    <Link className="nav-item nav-link" id="pro-info-2-tab" data-bs-toggle="tab" href="#pro-info-2"
                                        role="tab" aria-selected="false">Additional Information</Link>
                                    <Link className="nav-item nav-link" id="pro-info-3-tab" data-bs-toggle="tab" href="#pro-info-3"
                                        role="tab" aria-selected="false">Reviews (3)</Link>
                                </div>
                            </nav>
                            <div className="product-details-content mb-30">
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="pro-info-1" role="tabpanel">
                                   <ShopDescription/>
                                    </div>
                                    <div className="tab-pane fade" id="pro-info-2" role="tabpanel">
                                      <AdditionalInformation/>
                                    </div>
                                    <div className="tab-pane fade" id="pro-info-3" role="tabpanel">
                                        <div className="tabs-wrapper mt-0">
                                           <ProductReview/>
                                            <div className="product__details-comment ">
                                                <div className="comment-title mb-20">
                                                    <h3>Add a review</h3>
                                                    <p>Your email address will not be published. Required fields are marked *</p>
                                                </div>
                                                <div className="comment-rating mb-20">
                                                    <span>Overall ratings</span>
                                                    <ul>
                                                        <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                                        <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                                        <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                                        <li><Link href="#"><i className="fas fa-star"></i></Link></li>
                                                        <li><Link href="#"><i className="fal fa-star"></i></Link></li>
                                                    </ul>
                                                </div>
                                                <div className="comment-input-box mb-0">
                                                  <RiviewForm/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ShopDetailsArea;
