import React, { useState } from 'react';
import { imgUrlLarge } from '../../../urls.json';


export default function AdPageImages(props) {
    const name = props.data.name;
    const images = props.data.images;
    const label = props.data.label;

    const [imgView, setView] = useState(<img src={imgUrlLarge + label} alt={name} />);

    const displayImg = (e) => {
        let targetImg = e.target.firstChild;
        if (targetImg.tagName.toLowerCase() !== 'img') return;
        setView(<img src={targetImg.getAttribute('src')} alt={targetImg.getAttribute('alt')} />);
        document.querySelectorAll('.goods-page-images ul li').forEach(item => item.classList.remove("active"));
        e.target.classList.add("active");
    }

    return (
        <div className="goods-page-images">
            <ul>
                {images.map(function (item, key) {
                    const image = <img src={imgUrlLarge + item} alt={name} />;
                    const setClass = (item === label) ? "active" : "";
                    return <li className={setClass} onClick={displayImg} key={key}>{image}</li>;
                })}
            </ul>
            <figure>
                {imgView}
            </figure>
        </div>
    );
}