import React from 'react'
import api from "../apiService";
import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router';
import MoviePalyer from './MoviePalyer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import ReactStars from 'react-stars'
import {Link} from 'react-router-dom'



const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const SingleMoviePage = () => {
    const {id}=useParams();
    const [detail, setDetail] = useState([]);
    const [movies, setMovies] = useState({});
    const [casts, setCasts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [similarMovie, setSimilarMovie] = useState([]);
    // let genres = [];
    // let genresList;
    // if (genres) {
    //   genresList = genres.map((g, i) => {
    //     return (
    //       <li className="list-inline-item" key={i}>
    //         <button type="button" className="btn btn-outline-info">
    //           {g.name}
    //         </button>
    //       </li>
    //     );
    //   });
    // }
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/movie/${id}?api_key=${BACKEND_API}&language=en-US`;
                let urlvideo = `/movie/${id}/videos?api_key=${BACKEND_API}&language=en-US`;
                let urlcasts = `/movie/${id}/credits?api_key=${BACKEND_API}&language=en-US`;
                let urlsimilar = `/movie/${id}/similar?api_key=${BACKEND_API}&language=en-US`;
                const res = await api.get(url);
                const resvideo = await api.get(urlvideo);
                const rescasts = await api.get(urlcasts);
                const ressimilar = await api.get(urlsimilar);
                console.log("this is single ",res.data);
                console.log("this is video",resvideo.data.results[0])
                console.log("this is casts",rescasts.data.cast)
                console.log("this is similar",ressimilar.data.results)
                setMovies(res.data)
                setDetail(res.data)
                setCasts(rescasts.data.cast)
                setSimilarMovie(ressimilar.data.results)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[id])
    console.log( movies.genres);
    
    return (

        <Container className="mt-5 pt-5 ">
          <Row className="mt-2">
        <MoviePalyer show={isOpen} onHide={() => {setIsOpen(false);}}/>
        <Col className="text-center" style={{ width: "100%" }}>
          <img
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title}
          ></img>
          <div className="carousel-center">
          <FontAwesomeIcon icon={faPlayCircle} onClick={() => setIsOpen(true)} style={{ fontSize: 75, color: "#7F0000", cursor: "pointer" }}/>
          </div>
        </Col>
        </Row>

        <Row>
        <Col md="6" className="singlepage">
          <h2>{movies.title}</h2>
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>OVERVIEW</p>
          <p>{movies.overview}</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <div className="col">
          <div className="text-center">
            <ReactStars
              count={detail.vote_average}
              size={20}
              color1={"#7F0000"}
            ></ReactStars>
          </div>
        </div>
      </Row>

        <Row className="mt-3">
        <Col>
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>GENRE</p>
        </Col>
      </Row>

      <Row>
        <Col className="col">
        <ul className="movie-details-genres">
        {Array.isArray(movies.genres) && movies.genres.map((el,index) => <li className="ml-2" key={index}>{el.name}</li>)}
        </ul>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RELEASE DATE</p>
          <p style={{ color: "#7F0000" }}>{detail.release_date}</p>
        </Col>
        <Col className="md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>RUN TIME</p>
          <p style={{ color: "#7F0000" }}>{detail.runtime}</p>
        </Col>
        <Col className="md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>BUDGET</p>
          <p style={{ color: "#7F0000" }}>{detail.budget}</p>
        </Col>
        <Col className="md-3">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>HOMEPAGE</p>
          <p style={{ color: "#7F0000" }}>{detail.homepage}</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="col">
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>CASTS</p>
        </Col>
      </Row>
      <Row className="mt-3">{casts.slice(0, 4).map((cast, i) => {
    return <Col className="md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
          alt={cast.name}
        ></img>
        <p className="font-weight-bold text-center" style={{ color: "#5a606b" }} >{cast.name}</p>
        <p className="font-weight-light text-center" style={{ color: "#5a606b" }}>
          {cast.character}
        </p>
      </Col>
    
  })}
      </Row>

      <Row className="mt-3">
        <Col>
          <p style={{ color: "#5a606b", fontWeight: "bolder" }}>
            SIMILAR MOVIES
          </p>
        </Col>
      </Row>
      
      <Row className="mt-3">{similarMovie.slice(0, 4).map((item, index) => {
    return (
      <Col className="md-3 sm-6" key={index}>
        <div className="card">
          <Link to={`/movies/${item.id}`}>
            <img className="img-fluid" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Rated: {item.vote_average}</p>
          <ReactStars
            count={item.vote_average}
            size={20}
            color1={"#7F0000"}
          ></ReactStars>
        </div>
      </Col>
    )
  })}
      </Row>
      
    </Container>
    )
}

export default SingleMoviePage
