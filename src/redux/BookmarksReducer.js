import { createSlice } from '@reduxjs/toolkit';


const bookmarksReducerSlice = createSlice({
    name: 'bookmarks',
    initialState: {
        bookmarks: (localStorage.getItem('bookmarks')) ? JSON.parse(localStorage.getItem('bookmarks')) : {},
        pageName: "Page"
    },
    reducers: {
        add: (state, data) => {
            const href = data.payload;
            if(state.pageName.toLowerCase() === "error") return;
            state.bookmarks[href] = state.pageName;
            localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
        },
        remove: (state, data) => {
            const href = data.payload;

            delete state.bookmarks[href];
            localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
        },
        setPageName: (state, data) => {
            state.pageName = data.payload;
        }
    }
})

export const { add, remove, setPageName } = bookmarksReducerSlice.actions

export const selectBookmarks = state => state.bookmarksReducer.bookmarks

export default bookmarksReducerSlice.reducer;
