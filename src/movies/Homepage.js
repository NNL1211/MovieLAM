import React from 'react'
import Popular from '../movies/Popular'
import api from "../apiService";
import { useEffect, useState } from 'react';
import Upcoming from './Upcoming';
import TopRate from './TopRate';
import MovieDetailPage from './MovieDetailPage';

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const Homepage = () => {
   
    return (
        <div>
            <MovieDetailPage/>
            <Popular/>
            <TopRate/>
            <Upcoming/>
        </div>
    )
}

export default Homepage
