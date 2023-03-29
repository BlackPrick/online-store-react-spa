import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import './GoodsPage.css';

import GoodsPageImages from './GoodsPageImages';
import BackButton from '../../elements/back-button/BackButton';

import goods from '../../../db/goods.json';
import allImages from '../../../db/goods-images.json';
import { CartIco } from '../../../Icons';

import { useSelector, useDispatch } from 'react-redux';
import { selectCart, add, remove } from '../../../redux/CartReducer';
import { setPageName } from '../../../redux/BookmarksReducer';

export default function GoodsPage() {
    const goodsId = useParams().goodsId;
    const dispatch = useDispatch();
    const cart = useSelector(selectCart);

    const name = goods[goodsId].name;
    const price = goods[goodsId].price;
    const description = goods[goodsId].description;
    const label = goods[goodsId].label;
    const characteristics = goods[goodsId].characteristics;
    const images = allImages[goodsId];

    dispatch(setPageName(name));

    const [cartValue, setCartValue] = useState("Add to cart");

    const addToCart = () => {
        if (cart[goodsId]) {
            dispatch(remove(goodsId));
            setCartValue("Add to cart");
        } else {
            dispatch(add(goodsId));
            setCartValue("Remove");
        }
    }

    return (
        <div className="container">
            <BackButton />
            <main className="goods-page-wrap">
                <section className="goods-page-hdr">
                    <h1>{name}</h1>
                </section>
                <section>
                    <GoodsPageImages data={{ images, label, name }} />
                </section>
                <section className="goods-page-info">
                    <h2>&#36;{price}</h2>
                    <div className="goods-page-tocart-wrap">
                        <button onClick={addToCart}><CartIco /> {cartValue}</button>
                    </div>
                    <figure>
                        <figcaption>Description</figcaption>
                        <p>{description}</p>
                    </figure>
                    <figure>
                        <figcaption>Characteristics</figcaption>
                        <ul>
                            {Object.keys(characteristics).map((key, index) => (
                                <li key={index}><span>&#8226; {key}</span><span>{characteristics[key]}</span></li>
                            ))}
                        </ul>
                    </figure>
                </section>
            </main>
        </div>
    );
}