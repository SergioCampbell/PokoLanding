/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './componentStyle.css'
import anime from 'animejs/lib/anime.es.js'

function Footer(){

    const sacv = document.querySelectorAll('.jump')

    anime({
        targets: sacv,
        scale: [
          {value: .1, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
        loop: true
      });

    return(
        <div className="footer my-5">

            <div className="social container">
                <div className="row">
                    <div className="col">
                    <h5 id="txtW">Follow more content</h5>

                <a href="#" className="mx-3"><i id="fb" className="fab fa-facebook-f"></i></a>
                <a href="#" className="mx-3"><i id="ig" className="fab fa-instagram"></i></a>
                <a href="#" className="mx-3"><i id="pin" className="fab fa-pinterest-p"></i></a>
                    
                    </div>
                
                </div>
            </div>

            <p className="text-white">Make it with ☕ and 🎶 by <a className="jump" href="https://sergiocampbell.github.io/sacv" target="_blank"><strong>|S A C V|</strong></a></p>
            
        </div>
    )
}

export default Footer;