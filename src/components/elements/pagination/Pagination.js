import React from 'react';
import { Link, NavLink, Navigate } from 'react-router-dom';
import './Pagination.css';


export default function Pagination(props) {
    const link = props.data.link;
    const numOfPages = props.data.numOfPages;
    const page = props.data.page;
    const sorting = props.data.sorting;

    if (numOfPages === 1) return;
    if (page < 1 || page > numOfPages) return <Navigate to={link + "/1/"} replace />;

    if (numOfPages <= 9 && page > 0) {
        const rows = [];
        for (let i = 1; i < (numOfPages + 1); i++) {
            rows.push(<NavLink to={link + i + "/" + sorting} key={i}>{i}</NavLink>)
        }

        return <nav className="pagination">{rows}</nav>;
    }
    if ((page - 4) > 0 && (page + 4) < numOfPages) {
        return (
            <nav className="pagination">
                <NavLink to={link + "1/" + sorting}>1</NavLink>
                <Link>...</Link>
                <NavLink to={link + (page - 2) + "/" + sorting}>{page - 2}</NavLink>
                <NavLink to={link + (page - 1) + "/" + sorting}>{page - 1}</NavLink>
                <NavLink to={link + page + "/" + sorting}>{page}</NavLink>
                <NavLink to={link + (page + 1) + "/" + sorting}>{page + 1}</NavLink>
                <NavLink to={link + (page + 2) + "/" + sorting}>{page + 2}</NavLink>
                <Link>...</Link>
                <NavLink to={link + numOfPages + "/" + sorting}>{numOfPages}</NavLink>
            </nav>
        );
    }
    if ((page - 4) >= 0 && (page + 4) >= numOfPages && page <= numOfPages) {
        return (
            <nav className="pagination">
                <NavLink to={link + 1 + "/" + sorting}>1</NavLink>
                <Link>...</Link>
                <NavLink to={link + (numOfPages - 6) + "/" + sorting}>{numOfPages - 6}</NavLink>
                <NavLink to={link + (numOfPages - 5) + "/" + sorting}>{numOfPages - 5}</NavLink>
                <NavLink to={link + (numOfPages - 4) + "/" + sorting}>{numOfPages - 4}</NavLink>
                <NavLink to={link + (numOfPages - 3) + "/" + sorting}>{numOfPages - 3}</NavLink>
                <NavLink to={link + (numOfPages - 2) + "/" + sorting}>{numOfPages - 2}</NavLink>
                <NavLink to={link + (numOfPages - 1) + "/" + sorting}>{numOfPages - 1}</NavLink>
                <NavLink to={link + numOfPages + "/" + sorting}>{numOfPages}</NavLink>
            </nav>
        )
    }
    if ((page + 4) < numOfPages) {
        return (
            <nav className="pagination">
                <NavLink to={link + "1/" + sorting}>1</NavLink>
                <NavLink to={link + "2/" + sorting}>2</NavLink>
                <NavLink to={link + "3/" + sorting}>3</NavLink>
                <NavLink to={link + "4/" + sorting}>4</NavLink>
                <NavLink to={link + "5/" + sorting}>5</NavLink>
                <NavLink to={link + "6/" + sorting}>6</NavLink>
                <NavLink to={link + "7/" + sorting}>7</NavLink>
                <Link>...</Link>
                <NavLink to={link + numOfPages + "/" + sorting}>{numOfPages}</NavLink>
            </nav>
        )
    }
}