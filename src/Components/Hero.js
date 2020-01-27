import React from 'react';
import firstAid from './images/first-aid.svg';

function Hero() {
    return (
        <section id="landing">
            <div className="container">
                <div className="row">
                    <div className="landing-text col-lg-6">
                        <h1>Bridging the Gap Between Patients and Doctors</h1>
                        <p className="lead">Making affordable preventative healthcare accessible to all.</p>
                        <div id="buttons">
                            <button type="button" className="btn btn-primary">REGISTER</button>
                        <button type="button" className="btn btn-outline-dark">LEARN MORE<i
                                className="fas fa-arrow-down"></i></button>
                        </div>
                    </div>
                    <div class="col-lg-6 ml-auto">
                        <img className="firstAid" src={firstAid} alt=""/>
                </div>
                    </div>
                </div>
    </section>

            )
        }
        
        export default Hero;
