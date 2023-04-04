import React from 'react';
import { Link } from 'react-router-dom';
import './MainPromotions.css';
import promotions from '../../../db/promotions.json';

import { useSelector } from 'react-redux';
import { selectLargeImgSrc } from '../../../redux/UrlReducer';


export default function MainPromotions() {
    const imgUrlLarge = useSelector(selectLargeImgSrc);
    const imgOrientation = (imgId) => {
        const image = document.getElementById(imgId)
        let w = image.naturalWidth;
        let h = image.naturalHeight;
        if (w > h || w === h) image.style.height = "100%";
        else image.style.width = "100%";
    }

    const promoArr = [];
    promotions.forEach((promo, key) => {
        const heading = promo.heading;
        const imgSrc = imgUrlLarge + promo.img;
        const link = promo.link;
        const textLines = promo.textLines.map((line, index) => <span key={index}>{line}</span>);
        const imgId = "promo-img" + key;
        promoArr.push(
            <article key={key}>
                <picture>
                    <img onLoad={() => imgOrientation(imgId)} id={imgId} src={imgSrc} alt={heading} />
                </picture>
                <aside>
                    <strong>{heading}</strong>
                    <p>{textLines}</p>
                    <Link to={link} aria-label={"See more about promotion: " + heading}>See more</Link>
                </aside>
            </article>);
    })

    return (
        <article className="main-promotions">{promoArr}</article>
    )
}