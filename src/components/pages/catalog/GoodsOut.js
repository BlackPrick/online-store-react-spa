import React from 'react';
import './GoodsOut.css';
import goods from '../../../db/goods.json';
import GoodsItem from '../../elements/goods-item/GoodsItem';


export default class goodsOut extends React.Component {
    constructor(props) {
        super();
        this.state = {
            goods: props.goods
        }
    }

    static getDerivedStateFromProps(props) { 
        return({goods : props.goods});
    }

    render() {
        return (
            <ul className="goods-out">
                {this.state.goods.map((item, key) => <GoodsItem key={key} goodsId={item} goodsInfo={goods[item]} />)}
            </ul>
        )
    }
}