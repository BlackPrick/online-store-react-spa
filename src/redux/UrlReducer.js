import { createSlice } from '@reduxjs/toolkit';


const urlReducerSlice = createSlice({
    name: 'basename',
    initialState: {
        basename: "/online-store-react-spa",
        // basename: window.location.pathname,
        imgSrcLarge: window.location.pathname + "/images/large/",
        imgSrcSmall: window.location.pathname + "/images/small/"
    },
    reducers: {
       
    }
})

export const selectBasename = state => state.urlReducer.basename;
export const selectLargeImgSrc = state => state.urlReducer.imgSrcLarge;
export const selectSmallImgSrc = state => state.urlReducer.imgSrcSmall;

export default urlReducerSlice.reducer;