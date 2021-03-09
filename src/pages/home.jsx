import React, { Fragment, useState } from 'react'
import Card from '../Components/cardsHeader';
import './pageStyle.css'

function Home(){

    const review = [
        {id: 0,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2017/08/07/18/39/xbox-2606608_960_720.jpg'},
        {id: 1,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849826_960_720.jpg'},
        {id: 2,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2016/03/27/19/00/coffee-1283672_960_720.jpg'},
        {id: 3,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2016/06/25/12/55/art-1478831_960_720.jpg'},
        {id: 4,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_960_720.jpg'},
        {id: 5,
            description: 'This is a review',
            path: 'https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg'},
    ] 

    const showMe = review.map((image) => 
        {
            return <div className="col" key={image.id}>

                <img className="box" style={{height: '200px', width: '300px'}} src={image.path} alt="..." />

                <div className="carousel-caption d-md-block">
                    <h5 className="shadows ">{image.description}</h5>
                </div>
                
            </div>
        } 
    )     
    

    return(
        <Fragment>
        <div className="jumbotron bg-jumbo">
          <h1 className="display-1">Poko</h1>
            <p id="tagline">
             Design, photography, sketch  
            </p>
        </div>

        <Card />

        {/*review gallery*/}

        <div className="container">
        <h3 className="display-4">Take the option, be different</h3>
            <div className="row">                
                {showMe}
            </div>            
        </div>

        </Fragment>
        
    )
}

export default Home;