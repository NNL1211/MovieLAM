import React from 'react'
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import api from "../apiService";
import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Carousel,CardColumns,Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const MovieFillterPage = () => {
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/genre/movie/list?api_key=${BACKEND_API}&language=en-US&page=1`;
                let urlmovie = `/movie/upcoming?api_key=${BACKEND_API}&language=en-US&`;
                const res = await api.get(url);
                const resmovie = await api.get(urlmovie);
                console.log("this is genres ",res.data.genres)
                setGenres(res.data.genres)
                setMovies(resmovie.data.results)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])
    const handleGenreClick = async (genre_id) => {
        try {
            let urlmoviegenre = `/discover/movie?api_key=${BACKEND_API}&language=en-US&page=1&with_genres=${genre_id}`
            const resMoviegenre = await api.get(urlmoviegenre);
            console.log("this is genrebymovie",resMoviegenre.data)
            setMovieByGenre(resMoviegenre.data.results)
            
        } catch (error) {
            console.log(error.message)
        }
      };


    return (
        <>
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
        
        <Container>
        
         <Row className="mt-3">
            <Col>
            <ul className="list-inline">{genres.map((item, index) => {
    return (<li className="list-inline-item" key={index}>
            <button type="button" className="btn btn-outline-danger" onClick={() => {
                handleGenreClick(item.id);
            }}>
            {item.name}
            </button>
            </li>)})}
            </ul>
            </Col>
        </Row>
        
        <Row className="mt-3">
        <Col>
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </Col>
      </Row>
      <CardColumns className="mt-3">{movieByGenre.length>0 && movieByGenre.map((item, index) => {
        return (<Card className="md-3 sm-6" key={index}>
                <Link to={`/movies/${item.id}`}>
                <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}></img>
                </Link>
                <Card.Body>
                <Card.Title  style={{ color: "#5a606b", }}>{item.title}</Card.Title>
                </Card.Body>
                </Card> 
                )})}
        </CardColumns>
        </Container>
        </>
    )
}

export default MovieFillterPage
