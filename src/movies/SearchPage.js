import React from 'react'
import api from "../apiService";
import { useEffect } from 'react';
import { useState } from 'react';
import {CardColumns,Card,Row,Container} from 'react-bootstrap'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const SearchPage = ({keyword}) => {
    const[searchmovie,setSearchmovie] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/search/movie?api_key=${BACKEND_API}&query=${keyword}&language=en-US&page=1`;
                const res = await api.get(url);
                setSearchmovie(res.data.results)
                console.log("this is search",res)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])
    return (
        
        <>
        <Row className="mt-5"></Row>
        
        <Row>
        <Container>
         <CardColumns className="mt-3">{searchmovie.length>0 && searchmovie.map((item, index) => {
        return (<Card className="md-3 sm-6 cardmovie" key={index}>
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
        </Row>
        </>
    )
}

export default SearchPage
