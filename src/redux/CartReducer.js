import { createSlice } from '@reduxjs/toolkit';
import goods from '../db/goods.json';


const cartReducerSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {},
        cartTotal: cartTotal(),
        cartItemsNum: cartItemsNum()
    },
    reducers: {
        add: (state, data) => {
            let itemId = data.payload;
            state.cart[itemId] = 1;
            localStorage.setItem("cart", JSON.stringify(state.cart));

            state.cartItemsNum = cartItemsNum();
            state.cartTotal = cartTotal();
        },
        remove: (state, data) => {
            let itemId = data.payload;

            delete state.cart[itemId];
            localStorage.setItem("cart", JSON.stringify(state.cart));
            state.cartItemsNum = cartItemsNum();
            state.cartTotal = cartTotal();
        },
        quantity: (state, data) => {
            let itemId = data.payload[0];
            let quant = data.payload[1];

            state.cart[itemId] = quant;
            localStorage.setItem("cart", JSON.stringify(state.cart));
            state.cartItemsNum = cartItemsNum();
            state.cartTotal = cartTotal();
        }
    }
})

export const { add, remove, quantity } = cartReducerSlice.actions

export const selectCart = state => state.cartReducer.cart
export const selectCartItemsNum = state => state.cartReducer.cartItemsNum
export const selectCartTotal = state => state.cartReducer.cartTotal

export default cartReducerSlice.reducer;

function cartItemsNum() {
    let itemsNum = 0;
    let cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {};
    Object.keys(cart).map(item => itemsNum += Number(cart[item]));
    return itemsNum;
}
function cartTotal() {
    let total = 0;
    let cart = (localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : {};
    Object.keys(cart).map(item => {
        let itemPrice = +goods[item].price;
        let quant = cart[item];
        total += itemPrice * quant;
    });
    return total;
}