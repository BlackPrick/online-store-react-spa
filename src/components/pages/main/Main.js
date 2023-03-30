import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Promotions from './MainPromotions';

import { useDispatch } from 'react-redux';
import { setPageName } from '../../../redux/BookmarksReducer';


export default function Main() {
    const dispatch = useDispatch();
    dispatch(setPageName("Main page"));
    
    return (
        <main className="main-page">
            <section className="showcase">
                <blockquote>
                    <h1>Let's sleep with us</h1>
                    <strong>Bedding store</strong>
                </blockquote>
            </section>
            <section>
                <div className="container">
                    <div className="main-delivery">
                        <h2>Express delivery and free returns</h2>
                        <Link to={"/online-store-react-spa/delivery-returns/"}>
                            Find out more
                        </Link>
                    </div>
                </div>
            </section>
            <section className="main-categories">
                <div className="container">
                    <h3>Categories</h3>
                    <nav>
                        <Link to={"/online-store-react-spa/catalog/beds/1/"}>
                            <figure>
                                <img src="/online-store-react-spa/images/small/bed2-1.jpg" alt="Luxury bed" />
                                <figcaption>Beds</figcaption>
                            </figure>
                        </Link>
                        <Link to={"/online-store-react-spa/catalog/mattresses/1/"}>
                            <figure>
                                <img src="/online-store-react-spa/images/small/mattress1-1.jpg" alt="Memory foam mattress" />
                                <figcaption>Mattresses</figcaption>
                            </figure>
                        </Link>
                        <Link to={"/online-store-react-spa/catalog/pillows/1/"}>
                            <figure>
                                <img src="/online-store-react-spa/images/small/pillow5-1.jpg" alt="Comfortable pillows" />
                                <figcaption>Pillows</figcaption>
                            </figure>
                        </Link>
                    </nav>
                </div>
            </section>
            <section>
                <h4>
                    Special offers
                </h4>
                <div className="container">
                    <Promotions />
                </div>
            </section>
        </main>
    );
}