import React from "react";
/*
Contents:
- SearchIco
- CategoriesIco
- FavoritesIco
- CartIco
- PlusIco
- DeleteIco
- ArrowSIco
- CloseIco
- MenuSIco
*/

export function SearchIco() {
    return (
        <svg fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="10.5" cy="10.5" r="7.5" fill="none" />
            <line x1="21" x2="15.8" y1="21" y2="15.8" />
        </svg>
    );
}

export function CategoriesIco() {
    return (
        <svg stroke="none" viewBox="0 0 24 24">
            <path clipRule="evenodd" d="M5 16C5 14.8954 5.89543 14 7 14H10C11.1046 14 12 14.8954 12 16V19C12 20.1046 11.1046 21 10 21H7C5.89543 21 5 20.1046 5 19V16ZM10 16H7V19H10V16Z" fillRule="evenodd" />
            <path clipRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H10C11.1046 3 12 3.89543 12 5V10C12 11.1046 11.1046 12 10 12H5C3.89543 12 3 11.1046 3 10V5ZM10 5H5V10H10V5Z" fillRule="evenodd" />
            <path clipRule="evenodd" d="M14 16C14 14.8954 14.8954 14 16 14H19C20.1046 14 21 14.8954 21 16V19C21 20.1046 20.1046 21 19 21H16C14.8954 21 14 20.1046 14 19V16ZM19 16H16V19H19V16Z" fillRule="evenodd" />
            <path clipRule="evenodd" d="M14 7C14 5.89543 14.8954 5 16 5H19C20.1046 5 21 5.89543 21 7V10C21 11.1046 20.1046 12 19 12H16C14.8954 12 14 11.1046 14 10V7ZM19 7H16V10H19V7Z" fillRule="evenodd" />
        </svg>
    );
}

export function FavoritesIco(props) {
    return (
        <svg className={props.className} strokeWidth="2" viewBox="0 0 24 24"><path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" /></svg>
    );
}

export function CartIco() {
    return (
        <svg viewBox="0 0 48 48">
            <path d="M19,38c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S21.2,38,19,38z M19,44c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S20.1,44,19,44z" />
            <path d="M37,38c-2.2,0-4,1.8-4,4s1.8,4,4,4s4-1.8,4-4S39.2,38,37,38z M37,44c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S38.1,44,37,44z" />
            <path d="M43.9,9.1C43.3,8.4,42.5,8,41.6,8H12.8l-0.6-3.5C12,3,10.8,2,9.3,2H2v2h7.3c0.5,0,0.9,0.4,1,0.9l4.5,28.6   c0.3,1.5,1.5,2.5,3,2.5H40v-2H17.8c-0.5,0-0.9-0.4-1-0.9L16.3,30h22.9c1.5,0,2.7-1,3-2.6l2.4-16C44.7,10.6,44.5,9.8,43.9,9.1z    M27,20v8h-4.1l-1.2-8H27z M21.4,18l-1.2-8H27v8H21.4z M29,20h5.3l-1.2,8H29V20z M29,18v-8h6.8l-1.2,8H29z M18.1,10l1.2,8h-4.9   l-1.3-8H18.1z M14.7,20h4.9l1.2,8H16L14.7,20z M40.2,27.1c-0.1,0.5-0.5,0.9-1,0.9h-4l1.2-8h4.9L40.2,27.1z M42.6,11.2l-1,6.8h-4.9   l1.2-8h3.7c0.3,0,0.6,0.1,0.8,0.4C42.5,10.5,42.7,10.8,42.6,11.2z" />
        </svg>
    );
}

export function PlusIco() {
    return (
        <svg strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="12" x2="12" y1="5" y2="19" />
            <line x1="5" x2="19" y1="12" y2="12" />
        </svg>
    )
}

export function DeleteIco() {
    return (
        <svg viewBox="0 0 32 32">
            <path d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z" />
            <path d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z" />
            <path d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z" />
            <path d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z" />
            <path d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z" />
            <path d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z" />
        </svg>
    )
}

export function ArrowSIco() {
    return (
        <svg viewBox="0 0 96 96">
            <path d="M81.8457,25.3876a6.0239,6.0239,0,0,0-8.45.7676L48,56.6257l-25.396-30.47a5.999,5.999,0,1,0-9.2114,7.6879L43.3943,69.8452a5.9969,5.9969,0,0,0,9.2114,0L82.6074,33.8431A6.0076,6.0076,0,0,0,81.8457,25.3876Z" />
        </svg>
    )
}

export function CloseIco() {
    return (
        <svg viewBox="0 0 48 48" stroke="none">
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
            <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
    )
}

export function MenuSIco() {
    return (
        <svg viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
        </svg>
    )
}