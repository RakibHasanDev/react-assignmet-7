import React from 'react';

import logo from '../../Images/1199-gym-01.png'
import "./Home.css"

const Home = () => {

    
    return (
        <div className='home'>

            <div className='left'>
                <div className='nav-title'>
                    <img src={logo} alt="" />
                    <div>
                        <h1>GYM-ZONE-BD</h1>
                    </div>
                </div>
                <h1>Select today’s exercise</h1>

                <div exercise-container>

                </div>

               

            </div>

            <div className='right'>
                <h1>this is right</h1>

            </div>
        </div>
    );
};

export default Home;