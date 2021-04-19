import React from 'react'
import {Carousel} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import api from "../apiService";


const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const MovieDetailPage = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/movie/upcoming?api_key=${BACKEND_API}&language=en-US&`;
                const res = await api.get(url);
                console.log("this is ",res.data.results);
                setMovies(res.data.results)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])
   
    return (
        <Carousel fade>
        {movies.map((movie,index)=>{
            return <Carousel.Item interval={2500} key={index}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption className="moviesdetail">
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        })}
        
      
      </Carousel>
  );
}

export default MovieDetailPage
