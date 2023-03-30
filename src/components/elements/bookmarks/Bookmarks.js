import React from 'react';
import './Bookmarks.css'
import { Link } from 'react-router-dom';

import { CloseIco, DeleteIco } from '../../../Icons';

import { useSelector, useDispatch } from 'react-redux';
import { selectBookmarks, remove } from '../../../redux/BookmarksReducer';

export default function Bookmarks() {
    const bookmarks = useSelector(selectBookmarks);
    const dispatch = useDispatch();

    const bookmarksEvents = (e) => {
        // Hide bookmarks
        if (!e.target.closest("#bookmarks figure") || e.target.closest("#hide-bookmarks-btn")) {
            document.getElementById("bookmarks").classList.add("hidden");
        }
        // Hide menu for each bookmark
        if (!e.target.closest(".bookmarks-item-menu, .bookmarks-item-menu-btn")) {
            document.querySelectorAll(".bookmarks-item-menu").forEach(item => item.classList.add("hidden"))
        }
    }

    const removeBookmark = (e) => {
        const dataId = e.target.closest("button").getAttribute("data-id");
        dispatch(remove(dataId));
    }

    return (
        <aside onClick={bookmarksEvents} className="bookmarks-wrap hidden" id="bookmarks">
            <figure>
                <figcaption>
                    <strong>Bookmarks</strong>
                    <button id="hide-bookmarks-btn" aria-label="Hide bookmarks" title="Hide bookmarks"><CloseIco /></button>
                </figcaption>
                <ul>
                    {Object.keys(bookmarks).map(href => (
                        <li className="bookmarks-item" key={href}>
                            <Link to={href}>{bookmarks[href]}</Link>
                            <button data-id={href} onClick={removeBookmark} aria-label="Remove bookmark" title="Remove bookmark">
                                <DeleteIco />
                            </button>
                        </li>
                    ))}
                </ul>
            </figure>
        </aside>
    )
}