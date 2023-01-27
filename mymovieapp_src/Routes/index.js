import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MovieDetails from '../container/Details';
import Home from '../container/Home';
import Movies from '../container/Movies';
import Search from '../container/Search';
import TvSeries from '../container/TvSeries';

const RouteComponent = () => {
  return (
    <>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/series' element={<TvSeries />} />
                <Route path='/search' element={<Search />} />
                <Route path='/details/:movieid/:mediaType' element={<MovieDetails />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default RouteComponent
