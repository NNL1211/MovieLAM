import React from 'react'
import Popular from '../movies/Popular'
import Upcoming from './Upcoming';
import TopRate from './TopRate';
import MovieDetailPage from './MovieDetailPage';



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
