import React, { useState } from 'react';
import PaymentMethod from './PaymentMethod';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const OrderArea = () => {
    const [shippingCost, setShippingCost] = useState(0);
    const cartProducts = useSelector(
        (state: RootState) => state.cart.cartProducts
    );
    const totalPrice = cartProducts.reduce((total, product) => {
        if (typeof product.price === 'number' && product.price !== 0) {
            return total + (product.price ?? 0) * (product.quantity ?? 0);
        }
        return total;
    }, 0);

    return (
        <>
            <div className="col-lg-6">
                <div className="your-order mb-30 ">
                    <h3>Your order</h3>
                    <div className="your-order-table table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartProducts.map((item, index) => (
                                    <tr className="cart_item" key={index}>
                                        <td className="product-name">
                                            {item.productTitle} <strong className="product-quantity"> × {item?.quantity}</strong>
                                        </td>
                                        <td className="product-total">
                                            <span className="amount">{item?.quantity && item?.price ? `$${item.quantity * item.price}.00` : 'N/A'}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="cart-subtotal">
                                    <th>Cart Subtotal</th>
                                    <td><span className="amount">${totalPrice.toFixed(2)}</span></td>
                                </tr>
                                <tr className="shipping">
                                    <th>Shipping</th>
                                    <td>
                                        <ul>
                                            <li>
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    onClick={() => setShippingCost(7)}
                                                />
                                                <label>
                                                    Flat Rate: <span className="amount">$7.00</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    onClick={() => setShippingCost(7)}
                                                />
                                                <label>
                                                Local pickup:  <span className="amount">$25.00</span>
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="radio"
                                                    name="shipping"
                                                    onClick={() => setShippingCost(0)}
                                                />
                                                <label>Free Shipping:</label>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="order-total">
                                    <th>Order Total</th>
                                    <td>
                                        <strong>
                                            <span className="amount">${(totalPrice + shippingCost).toFixed(2)}</span>
                                        </strong>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <PaymentMethod />
                </div>
            </div>
        </>
    );
};

export default OrderArea;
