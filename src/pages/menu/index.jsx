import React from 'react';
import { Carousel } from 'react-bootstrap';
import FooterAluno from '../../components/footeraluno';
import HeaderAluno from '../../components/headeraluno';

const Home = () => {
    return(
        <div>
        <HeaderAluno />
        <h1> Home </h1>  
        <FooterAluno />
        </div>
    )
}

export default Home;