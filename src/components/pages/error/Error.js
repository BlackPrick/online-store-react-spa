import React from 'react';

import { useDispatch } from 'react-redux';
import { setPageName } from '../../../redux/BookmarksReducer';


export default function Error() {
    const dispatch = useDispatch();
    dispatch(setPageName("Error"));
    
    return (
        <>
            <h1>Error</h1>
        </>
    );
}