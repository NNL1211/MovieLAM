import React from 'react'
import api from "../apiService";
import { useEffect, useState } from 'react';
import { Container, Card} from "react-bootstrap";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const Upcoming = () => {
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/movie/now_playing?api_key=${BACKEND_API}&language=en-US&page=2`;
                const res = await api.get(url);
                console.log("this is ",res.data.results);
                setMovies(res.data.results)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])
    var settings = {
    pauseOnHover: true,
    focusOnSelect: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 2,
      cssEase: "linear"
      };
    return (
        <Container>
        <div className="clearfix mt-5 mb-2">
        <h4 className="float-left title">UpComing</h4>
        <Link className="float-right text-uppercase" style={{color:"white"}} to="/">
        see all
        </Link>
        </div>
        <Slider {...settings}>
        {movies.map((movie,index)=>{
            return <React.Fragment key={index}>
            <Link to={`/movies/${movie.id}`}>
            <Card className="bg-dark text-white overlay">
                <Card.Img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Card image" />
                <Card.ImgOverlay className="image__overlay ">
                <h6>{movie.title}</h6>
                <div><FontAwesomeIcon icon={faStar}/>{movie.vote_average}</div>
                <div>Popularity: {movie.popularity}</div>
                <div>Release Date: {movie.release_date}</div>
                </Card.ImgOverlay>
            </Card>
        
            
            </Link>    
            
          </React.Fragment>
                    
        })}
        </Slider>
        </Container>
    )
}

export default Upcoming
