import { createSlice } from '@reduxjs/toolkit';

const basename = "/online-store-react-spa";

const urlReducerSlice = createSlice({
    name: 'basename',
    initialState: {
        basename: basename,
        imgSrcLarge: basename + "/images/large/",
        imgSrcSmall: basename + "/images/small/"
    },
    reducers: {
       
    }
})

export const selectBasename = state => state.urlReducer.basename;
export const selectLargeImgSrc = state => state.urlReducer.imgSrcLarge;
export const selectSmallImgSrc = state => state.urlReducer.imgSrcSmall;

export default urlReducerSlice.reducer;