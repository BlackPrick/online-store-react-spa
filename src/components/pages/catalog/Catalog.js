import React from 'react';
import { useParams, useNavigate, useLocation } from "react-router-dom";

import './Catalog.css';
import Pagination from '../../elements/pagination/Pagination';
import GoodsOut from './GoodsOut';
import BackButton from '../../elements/back-button/BackButton';

import goods from '../../../db/goods.json';
import categoriesGoods from '../../../db/categories-goods.json';
import categories from '../../../db/categories.json';

import { useDispatch } from 'react-redux';
import { setPageName } from '../../../redux/BookmarksReducer';

export default function Catalog() {
    const navigate = useNavigate();
    const cId = useParams().category;
    const page = (useParams().page === undefined) ? 1 : Number(useParams().page);
    const sorting = (useParams().sorting === undefined) ? "" : useParams().sorting;
    const baseUrl = "/online-store-react-spa/catalog/" + cId + "/";

    const dispatch = useDispatch();
    dispatch(setPageName(`${categories[cId]} (Page ${page})`));

    const GOODS_LIMIT = 10;
    const offset = GOODS_LIMIT * (page - 1);

    let categoryGoods = [];
    let sortableGoods = [];
    let sortedGoods = [];
    categoriesGoods[cId].map(id => sortableGoods.push([id, goods[id].price]));

    if (sorting === "priceup") sortedGoods = sortableGoods.slice().sort((a, b) => a[1] - b[1]);
    else if (sorting === "pricedown") sortedGoods = sortableGoods.slice().sort((a, b) => b[1] - a[1]);
    else sortedGoods = sortableGoods;

    sortedGoods.map(item => categoryGoods.push(item[0]));

    const pageGoods = categoryGoods.slice(offset, (GOODS_LIMIT + offset));

    const paginationProps = {
        "numOfPages": Math.ceil(categoryGoods.length / GOODS_LIMIT),
        "page": page,
        "link": baseUrl,
        "sorting": sorting
    }

    return (
        <main className="catalog">
            <div className="container">
                <BackButton />
                <h1>{categories[cId]}</h1>
                <section className="tools">
                    <select onChange={(e) => navigate(baseUrl + "1/" + e.target.value)} defaultValue="actual">
                        <option value="actual">Actual first</option>
                        <option value="priceup">Lowest price first</option>
                        <option value="pricedown">Highest price first</option>
                    </select>
                </section>
                <section>
                    <GoodsOut goods={pageGoods} />
                    <Pagination data={paginationProps} />
                </section>
            </div>
        </main>
    );
}
