import { configureStore } from '@reduxjs/toolkit';
import cartReducerSlice from './CartReducer';
import bookmarksReducerSlice from './BookmarksReducer';
import urlReducerSlice from './UrlReducer';

export default configureStore({
    reducer : {
        cartReducer : cartReducerSlice,
        bookmarksReducer : bookmarksReducerSlice,
        urlReducer: urlReducerSlice
    }
})