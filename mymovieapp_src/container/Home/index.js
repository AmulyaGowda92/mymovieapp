import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';
import Card from '../../components/Card';

const Home = () => {

  const [movieData, setMovieData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const API_KEY = process.env.REACT_APP_MY_API_KEY;

  const getMoviesData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageNo}`);
    console.log(data);
    setMovieData(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(() => {
    getMoviesData();
  }, [])

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className='col-12'>
            <section>
              <h1 className="txtCenter">Top Trending</h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>
          {
              movieData && movieData.length > 0 ? ( movieData.map((item, index) => {
                return (
                    <Card key={index} data={item}  />
                )
              })) : "Loading..."
            }
        </Row>
      </Container>
    </main>
  )
}

export default Home