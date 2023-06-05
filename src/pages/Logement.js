import React, { useState } from "react";
import data from '../data.json';
import { useParams } from "react-router-dom";
import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";


function Logement () {

     const {id} = useParams();
     const logement = data.find(logement => logement.id === id);


    return (
        <div className="wrapper">
            <Header/>
            <div className="main">

                <Slider pictures={logement.pictures}/>
            
                
                <div className="intro-ctn">

                    <div className="title-ctn">
                        <h1 className="titleLogement">{logement.title}</h1>
                        <p className="location">{logement.location}</p>

                        <div className="tags">
                            {logement.tags.map((tags, index) => (
                            <p key={index}>{tags}</p>
                        ))}
                        </div>
                    </div>

                    <div className="profile-ctn">
                        <div className="profile">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture}/>
                        </div>
                        <div className="stars">
                        {Array(5).fill().map((_, index) => (
                        index < logement.rating ? <i className="fa-solid fa-star" key={index} /> : <i className="fa-regular fa-star" key={index} />
                        ))}
                        </div>
                    </div>
                    
                </div>

                <div className="collapse-ctn">
                    <Collapse collapseTitle= "Description" content={logement.description}/>
                    <Collapse collapseTitle= "Equipements" content={logement.equipments.map((equipements, index)=> (
                        <p className='equipement'key={index}>{equipements}</p>
                    ))}/>  
                </div>
                
            </div>
            <Footer/>
        </div>
            
    );
}

export default Logement;