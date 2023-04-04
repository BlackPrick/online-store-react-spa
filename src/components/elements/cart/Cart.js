import React from 'react';
import './Cart.css';

import goods from '../../../db/goods.json';

import { useSelector, useDispatch } from 'react-redux';
import { selectCart, selectCartTotal, remove, quantity } from '../../../redux/CartReducer';
import { selectSmallImgSrc } from '../../../redux/UrlReducer';

import { CloseIco } from '../../../Icons';

export default function Cart() {
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
    const imgUrlSmall = useSelector(selectSmallImgSrc);

    const setQuantity = (e) => {
        let quant = e.target.value;
        let itemId = e.target.id;
        dispatch(quantity([itemId, quant]));
    }
    const hideCart = (e) => {
        if (!e.target.closest('#cart dialog') || e.target.closest('#hide-cart-btn')) {
            document.getElementById("cart").classList.add("hidden")
        }
    }

    return (
        <aside className="cart-wrap hidden" id="cart" onClick={hideCart}>
            <dialog>
                <p className="cart-header">
                    <strong>Cart</strong>
                    <button id="hide-cart-btn" aria-label="Hide cart" title="Hide cart"><CloseIco /></button>
                </p>
                <ul>
                    {
                        Object.keys(cart).map(item => (
                            <li className="cart-item" key={item}>
                                <figure>
                                    <picture>
                                        <img src={imgUrlSmall + goods[item].label} alt={goods[item].name} />
                                    </picture>
                                    <figcaption>
                                        <a href={"/goods/" + item}><strong>{goods[item].name}</strong></a>
                                        <p className="cart-item-price">
                                            <b>&#36;{goods[item].price}</b>
                                            <span>Item total: &#36;{Number(cart[item] * Number(goods[item].price))}</span>
                                        </p>
                                        <p className="cart-item-footer">
                                            <button onClick={() => dispatch(remove(item))}>remove</button>
                                            <label>
                                                Quantity:
                                                <select defaultValue={cart[item]} id={item} onChange={setQuantity}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </label>
                                        </p>
                                    </figcaption>
                                </figure>
                            </li>
                        ))
                    }
                </ul>
                <form className="cart-total">
                    <label>
                        <span>Total:</span>
                        <output>&#36;{cartTotal}</output>
                    </label>
                    <button>Go to checkout</button>
                </form>
            </dialog>
        </aside>
    )
}