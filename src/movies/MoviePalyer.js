import React from 'react'
import { Modal } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import api from "../apiService";
import ReactPlayer from "react-player";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const BACKEND_API = process.env.REACT_APP_BACKEND_API;
const MoviePalyer = (props) => {
    const {id}=useParams();
    const [video, setVideo] = useState([]);
    const [detail, setDetail] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                let url = `/movie/${id}?api_key=${BACKEND_API}&language=en-US`;
                let urlvideo = `/movie/${id}/videos?api_key=${BACKEND_API}&language=en-US`
                const res = await api.get(url);
                const resvideo = await api.get(urlvideo);
                console.log("this is single ",res.data.results);
                setDetail(res.data)
                setVideo(resvideo.data.results[0])
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchData()
    },[])
    


    const youtubeUrl = `https://www.youtube.com/watch?v=${video.key}`;
    return (
        <div>
            <Modal
        {...props}
        size="lg"
        centered
        style={{background: 'rgb(0, 0, 0, 0.5)'}}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "white", fontWeight: "bolder" }}>
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="reactplayer">
          <ReactPlayer
            className="container"
            url={youtubeUrl}
            playing
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default MoviePalyer
