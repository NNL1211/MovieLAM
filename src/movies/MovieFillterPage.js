import React from 'react'
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import api from "../apiService";
import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const MovieFillterPage = () => {
    const [genres, setGenres] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/genre/movie/list?api_key=${BACKEND_API}&language=en-US&page=1`;
                let urlmoviegenre = `/discover/movie?api_key=${BACKEND_API}&language=en-US&page=1&with_genres=`
                const res = await api.get(url);
                console.log("this is genres ",res.data.genres)
                setGenres(res.data.genres)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])

    return (
        <div>
            
        </div>
    )
}

export default MovieFillterPage
