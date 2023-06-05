import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import banner1 from "../assets/banner_home.png";
import data from '../data.json';
import{Link} from 'react-router-dom';

function Home () {
    const cards = data.map((item) => (
        <Link to={`/logement/${item.id}`} key={item.id}>
          <Card img={item.cover} cardTitle={item.title} />
        </Link>
      ));
    

    return (
        <div className="wrapper">
            <Header />
            <div className="main">

                <Banner source={banner1} bannerTitle= "Chez vous, partout et ailleurs"/>

                <div className="cards"> 
                    {cards}  
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;