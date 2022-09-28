import React, { useEffect, useState } from 'react';

import logo from '../../Images/1199-gym-01.png'
import Exercise from '../Exercise/Exercise';
import "./Home.css"





const Home = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    console.log(exercises)

    return (
        <div className='home'>

            <div className='left'>
                <div className='nav-title'>
                    <img src={logo} alt="" />
                    <div>
                        <h1>GYM-ZONE-BD</h1>
                    </div>
                </div>
                <h2>Select today’s exercise</h2>

                <div className='exercise-container'>
                    {
                        exercises.map((exercise) => <Exercise
                            exercise={exercise}
                        key={exercise.id}></Exercise>)
                    }
                </div>



            </div>

            <div className='right'>
                <h1>this is right</h1>

            </div>
        </div>
    );
};

export default Home;