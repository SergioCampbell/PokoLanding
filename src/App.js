import React, { useState, useEffect } from 'react'
import { Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

import './App.css';
import isotipo from './assets/Transparente.png';

import Home from './pages/home'
import About from './pages/about'
import Gallery from './pages/gallery'
import Portfolio from './pages/portfolio'
import NotFound from './pages/notFound'

import Footer from './Components/footer';
import Loading from './Components/loading';
import Contact from './pages/contact';

function App() {
  
  //loading icon
  const [load, setLoad] = useState( false )  

  useEffect(() =>{
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])

  //start the app
  return (
    <div className="App">
    {load ? 
    <Loading />
    : 
    <Router>

      <nav className="bg-poko navbar navbar-expand-lg navbar-light bg-light">
        
            <Link className="navbar-brand" to="/">
              <img src={isotipo} className="logo" alt="logo"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Portfolio
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <Link className="dropdown-item" to="/1">Action</Link>
                    <Link className="dropdown-item" to="/2">Another action</Link>
                    <Link className="dropdown-item" to="/3">Something else here</Link>
                    </div>
                </li>
                </ul>
            </div>
        </nav>
      
      <Switch>

      <Route path="/" exact>
          <Home />
      </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/gallery">
          <Gallery />
        </Route>

        <Route path="/portfolio">
          <Portfolio />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

      </Switch>

      <Footer />

    </Router>
    }
    </div>
  );
}

export default App;
