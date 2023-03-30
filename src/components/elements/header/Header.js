import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Header.css';

import { SearchIco, CategoriesIco, FavoritesIco, CartIco, PlusIco, DeleteIco } from '../../../Icons';
import categories from '../../../db/categories.json';

import { useSelector, useDispatch } from 'react-redux';
import { selectCartItemsNum } from '../../../redux/CartReducer';
import { selectBookmarks, add, remove } from '../../../redux/BookmarksReducer';


export default function Header() {
    const cartItemsNum = +useSelector(selectCartItemsNum);
    const bookmarks = useSelector(selectBookmarks);
    const dispatch = useDispatch();
    const location = useLocation().pathname;
    const cartNotification = (cartItemsNum !== 0) ? <div className="icon-notification">{cartItemsNum}</div> : "";

    console.log(location)

    const showCart = () => document.getElementById("cart").classList.remove("hidden");

    const addBookmark = () => dispatch(add(location));
    const removeBookmark = () => dispatch(remove(location));
    const showBookmarks = () => document.getElementById("bookmarks").classList.remove("hidden");

    let bookmarksButton;
    let bookmarkNotification;
    if(bookmarks[location]) {
        bookmarksButton = <button onClick={removeBookmark}><DeleteIco />Remove page</button>;
        bookmarkNotification = <div className="icon-notification">&#10003;</div>;
    } 
    else bookmarksButton = <button onClick={addBookmark}><PlusIco />Add page</button>

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("bookmarks").classList.add("hidden");
        document.querySelectorAll(".hdr-menu").forEach(item => item.classList.add("hidden"));
    }, [location]);

    return (
        <header id="hdr">
            <div className="container">
                <div className="hdr-block">
                    <Link to="/" className="logo">BlackPrick</Link>

                    <div className="hdr-btns">
                        {/* <button className="hdr-btn">
                            <SearchIco />
                            <span>Search</span>
                        </button> */}
                        <nav className="hdr-btn hdr-catalog" title="Show categories">
                            <CategoriesIco />
                            <span>Categories</span>
                            <ul className="hdr-menu hidden">
                                {Object.keys(categories).map(key => (
                                    <li key={key}>
                                        <Link to={"/catalog/" + key + "/1/"}>
                                            {categories[key]}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div id="hdr-bookmarks" className="hdr-bookmarks hdr-btn" title="bookmarks">
                            <FavoritesIco className="favorite-icon" />
                            {bookmarkNotification}
                            <span>Bookmarks</span>
                            <ul className="hdr-menu hidden">
                                <li>{bookmarksButton}</li>
                                <li className="show-bookmarks">
                                    <button onClick={showBookmarks}>
                                        <FavoritesIco className="favorite-icon" />
                                        Show bookmarks
                                    </button>
                                </li>
                            </ul>
                        </div>

                        <button className="show-cart hdr-btn" onClick={showCart} title="Show cart">
                            <CartIco />
                            {cartNotification}
                            <span>Cart</span>
                        </button>
                    </div>

                    <div className="hdr-srch hidden">
                        <form>
                            <input className="hdr-srch-inp" type="text" placeholder="Search" />
                            <ul id="hdr-srch-res">
                                <li>result</li>
                                <li>result</li>
                                <li>result</li>
                                <li>result</li>
                                <li>result</li>
                                <li>result</li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}
