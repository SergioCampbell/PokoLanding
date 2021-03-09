import React from 'react'
import './pageStyle.css'
import '../Components/componentStyle.css'
import dog from '../assets/dog-sad.png'


function NotFound(){


    return(
        <div className="container-fluid mt-5 mb-5  bg-poko">
            <h1 className="display-1">404</h1>
            <h3 className="display-4">sorry, this is not what you looking for :/</h3>
            <img 
            
            src={dog}
             alt="404-not-found"
             style={{height: '100%', width: '20%'}}
              />
              <br />
        </div>
    )
}

export default NotFound;