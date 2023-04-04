import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Header.css';

import { CategoriesIco, FavoritesIco, CartIco, PlusIco, DeleteIco } from '../../../Icons';
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
    let isMenuShown = false;

    const showCart = () => document.getElementById("cart").classList.remove("hidden");

    const addBookmark = () => dispatch(add(location));
    const removeBookmark = () => dispatch(remove(location));
    const showBookmarks = () => document.getElementById("bookmarks").classList.remove("hidden");

    let bookmarksButton;
    let bookmarkNotification;
    if (bookmarks[location]) {
        bookmarksButton = <button onClick={removeBookmark}><DeleteIco />Remove page</button>;
        bookmarkNotification = <div className="icon-notification">&#10003;</div>;
    }
    else bookmarksButton = <button onClick={addBookmark}><PlusIco />Add page</button>

    const showHdrMenu = (e) => {
        if (e.target.closest('.hdr-menu')) return;

        const menu = e.target.closest(".hdr-btn").querySelector('.hdr-menu');

        if(menu.classList.contains("hidden")) {
            document.querySelectorAll(".hdr-menu").forEach(item => item.classList.add("hidden"));
            menu.classList.remove("hidden");
            isMenuShown = true;
        }
        else {
            menu.classList.add("hidden");
            isMenuShown = false;
        }
    }

    const hideHdrMenu = (e) => {
        if (e.target.closest(".hdr-menu") || !e.target.closest(".hdr-btn")) {
            document.querySelectorAll(".hdr-menu").forEach(item => item.classList.add("hidden"));
            isMenuShown = false;
        }
    }
    document.addEventListener("click", function(e) {
        if(isMenuShown && !e.target.closest(".hdr-menu-block")) {
            document.querySelectorAll(".hdr-menu").forEach(item => item.classList.add("hidden"));
            isMenuShown = false;
        }

    })


    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("bookmarks").classList.add("hidden");
        document.getElementById("cart").classList.add("hidden");
    }, [location]);


    return (
        <header id="hdr">
            <div className="container">
                <div className="hdr-block">
                    <Link to="/" className="logo">BlackPrick</Link>

                    <div className="hdr-btns">
                        <div onClick={showHdrMenu} className="hdr-btn hdr-menu-block" title="Show categories">
                            <CategoriesIco />
                            <span>Categories</span>
                            <nav className="hdr-menu hidden" onClick={hideHdrMenu}>
                                <ul>
                                    {Object.keys(categories).map(key => (
                                        <li key={key}>
                                            <Link to={"/catalog/" + key + "/1/"}>
                                                {categories[key]}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div onClick={showHdrMenu} className="hdr-btn hdr-menu-block" title="bookmarks">
                            <FavoritesIco className="favorite-icon" />
                            {bookmarkNotification}
                            <span>Bookmarks</span>
                            <nav className="hdr-menu hidden" onClick={hideHdrMenu}>
                                <ul>
                                    <li>{bookmarksButton}</li>
                                    <li className="show-bookmarks">
                                        <button onClick={showBookmarks}>
                                            <FavoritesIco className="favorite-icon" />
                                            Show bookmarks
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <button className="show-cart hdr-btn" onClick={showCart} title="Show cart">
                            <CartIco />
                            {cartNotification}
                            <span>Cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
