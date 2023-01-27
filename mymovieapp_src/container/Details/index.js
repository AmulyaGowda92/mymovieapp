import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import { img_300, img_not_available } from '../../Config';
import './details.css';


const MovieDetails = () => {

  const [content, setContent] = useState();
  const [videoData, setVideoData] = useState();
  const [creditsData, setCreditsData] = useState();

  const params = useParams();
  console.log("params", params);

  const { movieid, mediaType } = params;
  const id = params.movieid;
  console.log("id", id);
  // console.log(movieid , mediaType);
  const API_KEY = process.env.REACT_APP_MY_API_KEY;

  const fetchContentURL = `https://api.themoviedb.org/3/${mediaType}/${movieid}?api_key=${API_KEY}&language=en-US`;
  const fetchVideoURL = `https://api.themoviedb.org/3/${mediaType}/${movieid}/videos?api_key=${API_KEY}&language=en-US`;
  const fetchCreditsData = `https://api.themoviedb.org/3/${mediaType}/${movieid}/credits?api_key=${API_KEY}&language=en-US`;


  const fetchContent = async () => {
    try {
      const { data } = await axios.get(fetchContentURL);
      // console.log("content data", data);
      setContent(data);
    } catch (error) {
      console.log(error)
    }
  }

  const fetchVideo = async () => {
    try {
      const {data} = await axios.get(fetchVideoURL);
      // console.log("video data", data);
      setVideoData(data.results[0]?.key);
    } catch (error) {
      console.log(error)
    }
  }

  const creditsFetch = async ()=>{
    try{
      const {data} = await axios.get(fetchCreditsData);
      setCreditsData(data.cast);
      console.log('sdata',  data);
    }catch(error){
      console.error(error)
    }
}

  useEffect(() => {
    fetchContent();
    fetchVideo();
    creditsFetch();
  }, [])

  return (
    <div>MovieDetails</div>
  )
}

export default MovieDetails