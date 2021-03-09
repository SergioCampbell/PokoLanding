import React from 'react'
import poko from '../assets/bgSlow.jpg';
//import bgCard from '../assets/manual1.png'
import './componentStyle.css'
//import anime from 'animejs/lib/anime.es.js';

function Card() {

      
    return(

       <div className="container">

<div className="mb-3 card-deck">
            
            <div className="container-fluid">
                <section className=" row">

                    <div className="card bg-dark text-white mx-5 my-col">
                    <img src={poko} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title ">
                        <i className=" fas fa-pencil-alt"></i> 
                        </h5>
                        <h6 className="card-text">Editions</h6>
                        <p className="my-card">
                            This is a short text to explain this card description about the icon above.
                        </p>
                        <button className="btn btn-color">See more</button>
                    </div>
                    </div>

                    <div className="card bg-dark text-white mx-5 my-col">
                    <img src={poko} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h5 className="card-title"><i className="fas fa-crop"></i> </h5>
                        <h6 className="card-text">Design</h6>
                        <p className="my-card">
                        This is a short text to explain this card description about the icon above.
                        </p>
                        <button className="btn btn-color ">See more</button>
                    </div>
                    </div>

                    <div className="card bg-dark text-white mx-5 my-col">
                    <img src={poko} className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h5 className="card-title"><i className="fas fa-camera-retro"></i> </h5>
                        <h6 className="card-text">Photography</h6>
                        <p className="my-card">
                        This is a short text to explain this card description about the icon above.
                        </p>
                        <button className="btn btn-color">See more</button>
                    </div>
                    </div>

                </section>

            </div>
        </div>
    

       </div>
    
    )
}

export default Card;