import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BackButton.css';
import { ArrowSIco } from '../../../Icons';


export default function BackButton() {
    const navigate = useNavigate();
    return (
        <aside className="back-button">
            <button onClick={() => navigate(-1)}>
                <ArrowSIco />
                Previos page
            </button>
        </aside>
    )
}