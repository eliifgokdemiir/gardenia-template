import { ProductsType } from '@/interFace/interFace';
import { remove_cart_product } from '@/redux/slices/cartSlice';
import { RootState } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
interface HeaderCartProps {
    setOpenCart: (isOpen: boolean) => void;
    openCart: boolean;
  }

const SidebarCart: React.FC<HeaderCartProps> = ({ openCart, setOpenCart }) => {
    const dispatch = useDispatch();
    const handleRemoveCart = (product: ProductsType) => {
      dispatch(remove_cart_product(product));
    };
  
    const cartProducts = useSelector(
      (state: RootState) => state.cart.cartProducts
    );
    const totalPrice = cartProducts.reduce(
      (total, product) => total + (product.price ?? 0) * (product.quantity ?? 0),
      0
    );
    
    return (
        <>
            <div className="fix">
                <div className={`sidebar-action sidebar-cart ${openCart ? 'cart-open' : ''}`}>
                    <button className="close-sidebar" onClick={() => setOpenCart(false)}>Close<i className="fal fa-times"></i></button>
                    <h4 className="sidebar-action-title">Shopping Cart</h4>
                    {cartProducts.length === 0 && <h5>Your cart is empty</h5>}

                    {cartProducts.length >= 1 && <><div className="sidebar-action-list">
                        {cartProducts.map((item, index) => (
                            <div className="sidebar-list-item" key={index}>
                                <div className="product-image pos-rel">
                                    <Link href={`/shop-details/${item.id}`}>
                                    <Image width={90} height={80} src={item.productImg} alt="product-img" />
                                    </Link>
                                </div>
                                <div className="product-desc">
                                    <div className="product-name">
                                        <Link href={`/shop-details/${item.id}`}>{item.productTitle} </Link>
                                    </div>
                                    <div className="product-pricing">
                                        <span className="item-number">{item?.quantity}</span>
                                        <span className="price-now">{`$${item.price}.00`}</span>
                                    </div>
                                    <button className="remove-item" onClick={() => handleRemoveCart(item)}><i className="fal fa-times"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                        <div className="product-price-total">
                            <span>Subtotal :</span>
                            <span className="subtotal-price">{`$${totalPrice.toFixed(2)}`}</span>
                        </div>
                        <div className="sidebar-action-btn">
                            <Link href="/cart" className="fill-btn">View cart</Link>
                            <Link href="/checkout" className="border-btn">Checkout</Link>
                        </div></>}
                </div>
            </div>
            <div onClick={() => setOpenCart(false)} className={`offcanvas-overlay ${openCart ? 'overlay-open' : ''}`}></div>
        </>
    );
};

export default SidebarCart;