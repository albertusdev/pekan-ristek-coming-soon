import React, { Component } from 'react';
import Countdown from './Countdown';
import squares from './assets/squares.png';
import logoRistek from './assets/risteklogo.png';
import logoTraveloka from './assets/traveloka.png';
import logoDewaweb from './assets/logo-dewa-web.png';
import footerPattern from './assets/flags.png';
import { LandingPageElement } from './style';

class App extends Component {
  render() {
    return (
      <LandingPageElement>
        <div className="overlay" />
        <div className="container">
          <img src={squares} className="squares" alt="square logo" />
          <div className="soon">
            COMI NG
          </div>
          <div className="soon">
            SOON
          </div>
          <div className="divider" />
          <div className="ready">
            BE READY IN
          </div>
          <Countdown />
          <div className="divider" />
          <div className="logoContainer">
            <div className="pekanRistek">
              Pekan Ristek
            </div>
            <img src={logoRistek} className="logoRistek" alt="logo ristek" />
          </div>
          <div className="logoSponsorContainer">
					<a href="https://www.traveloka.com">
						<img src={logoTraveloka} className="logoTraveloka" alt="logo traveloka" />
          </a>  
					<a href="https://www.dewaweb.com">
							<img src={logoDewaweb} className="logoDewaweb" alt="logo dewa web" />
						</a>
					</div>
          <img src={footerPattern} className="footerPattern" alt="pattern on footer" />
         </div>
      </LandingPageElement>
    );
  }
}

export default App;
