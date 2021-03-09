import React, { Fragment } from 'react'
import './pageStyle.css'
import '../Components/componentStyle.css'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Contact from './contact'

function About(){

    const i_am = [
        {id: 1,
        description: 'this is a little description about something.',
        path: 'https://cdn.pixabay.com/photo/2015/02/09/14/31/blonde-629726_960_720.jpg'}
    ]

    const image = i_am.map((yo) => {
        return(                                
        <img src={yo.path}
         alt={yo.description}
          className="img-thumbnail shadow"
          id="profile"
           />
        )
    })

    return(
        <Fragment>
            <Router>
            <div className="container">
            <h1 className="display-2">About us</h1>
                <div className="row">
                    <div className="col mb-4">
                    { image }
                    </div>

                    <div className="col">
                        <h2 className="mb-4">Poko design and more</h2>
                        <p style={{textAlign: 'justify'}}>
                         Ut vel erat vitae turpis vehicula malesuada. Nunc mollis velit eget ante ultrices faucibus. Duis fringilla ex risus, at placerat erat blandit eget. Morbi pretium lacus in est bibendum convallis. Quisque volutpat metus quis augue semper, id ornare elit ultricies. Mauris id ipsum est. Duis vel ex placerat dolor vulputate congue vitae vitae dui. Praesent at sagittis tellus. Sed ac risus at diam pharetra ornare. Nam mi ante, auctor eget fringilla non, congue eu nisl. Nullam tristique, enim quis facilisis sollicitudin, augue lorem ullamcorper ex, ut porta risus risus nec nulla.</p>
                    <p style={{textAlign: 'justify'}}>
                        Aliquam quam erat, auctor sit amet leo efficitur, imperdiet commodo erat. Proin ante ante, dapibus at ante efficitur, ornare hendrerit sapien. Nunc eu pellentesque velit. Vivamus varius ultrices tortor, at pretium est hendrerit ac. Aliquam egestas, lacus quis scelerisque laoreet, quam dui lobortis sem, sed feugiat lorem sapien vitae leo. Pellentesque dictum porttitor hendrerit. Praesent sit amet ex libero. Vestibulum id dolor volutpat, condimentum ligula tempus, faucibus nunc. Proin efficitur tincidunt felis ut imperdiet. Mauris tempus lacus quis purus vestibulum malesuada. Nam eros enim, euismod quis eros eget, pellentesque congue mi. Donec lacinia interdum ultrices. 
                        </p>
                    </div>
                </div>

                <div className="container space">
                    <Link to={'/contact'} className="btn btn-color ">Lets work together</Link>
                </div>
            </div>

            <Redirect 
                from="/"
                to="/home"
            />

            <Switch>

            <Route path="/contact" exact>
                <Contact />
            </Route>

            </Switch>
            </Router>
        </Fragment>
    )
}

export default About;