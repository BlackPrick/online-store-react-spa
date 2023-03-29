import React from 'react';
import './DeliveryReturns.css';
import BackButton from '../../elements/back-button/BackButton';

import { useDispatch } from 'react-redux';
import { setPageName } from '../../../redux/BookmarksReducer';


export default function DeliveryReturns() {
    const dispatch = useDispatch();
    dispatch(setPageName("Delivery and returns information"));

    return (
        <main className="container">
            <BackButton />
            <div className="delivery-returns">
                <section>
                    <h1>DELIVERY & RETURNS</h1>
                    <p>
                        If you are a new customer and want to know a little bit more about how much you might pay for our convenient delivery services, you can find out with our guide below. Please note, these are our standard delivery charges - your individual delivery charge will be presented at checkout each time you place an order.
                    </p>
                    <ul>
                        <li>
                            <figure>
                                <figcaption>Standart Delivery from &#36;14.99</figcaption>
                                <blockquote>
                                    You can usually expect your delivery in 5 working days, however items which come direct from the manufacturer, such as large furniture items and goods requiring personalisation, may take longer.
                                </blockquote>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <figcaption>Express Delivery from &#36;17.99</figcaption>
                                <blockquote>
                                    *If this option is available to you we’ll let you know during checkout. Delivery times are based on the assumption that the items are in stock and Express Delivery may not be available on items delivered direct from the manufacturer. The order cut off time is calculated for you when you enter the checkout.
                                </blockquote>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <figcaption>Supplementary Charges</figcaption>
                                <blockquote>
                                    Larger items like heavy furniture and electricals cost more to deliver as they usually require more than one delivery person and a large delivery van. If your order contains multiple large items, you will only pay one large item delivery charge for this purchase.
                                </blockquote>
                            </figure>
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>FREE & EASY RETURNS</h2>
                    <p>
                        For more information on our returns process and policy please find an option below.
                    </p>
                    <ul>
                        <li>
                            <figure>
                                <figcaption>ParcelConnect</figcaption>
                                <blockquote>
                                    Please attach the Fastway return label to the outside of your parcel and take it to your nearest store.
                                </blockquote>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <figcaption>Post Office</figcaption>
                                <blockquote>
                                    Please attach the An Post return label to the outside of your parcel and take it to your nearest post office.
                                </blockquote>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <figcaption>ReturnPal</figcaption>
                                <blockquote>
                                    You’ll need to download the An Post ReturnPal app to use this service – it’s free to download on the App Store or on Google Play.
                                </blockquote>
                            </figure>
                        </li>
                        <li>
                            <figure>
                                <figcaption>Fastaway Collection</figcaption>
                                <blockquote>
                                    Fastway couriers can collect items that are too large/heavy for the other services.
                                </blockquote>
                            </figure>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}