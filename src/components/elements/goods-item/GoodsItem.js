import { Link } from 'react-router-dom';
import React from 'react';
import './GoodsItem.css';


export default function AdItem(props) {
    let imgRef = React.createRef()
    const info = props.goodsInfo;
    const goodsId = props.goodsId;
   

    return (
        <li className="goods-item">
            <figure>
                <Link to={"/goods/" + goodsId} className="goods-item-img-link">
                    <img src={'/online-store-react-spa/images/small/' + info['label']} ref={imgRef} alt={info['name']} />
                </Link>
                <figcaption>
                    <strong>{info['name']}</strong>
                    <p>&#36;{info['price']}</p>
                </figcaption>
            </figure>
        </li>
    );
}