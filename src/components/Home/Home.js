import React, { useEffect, useState } from 'react';

import logo from '../../Images/1199-gym-01.png'
import Exercise from '../Exercise/Exercise';
import Person from '../Person/Person';
import "./Home.css"





const Home = () => {
    const [exercises, setExercises] = useState([]);

    const [seconds, setSeconds] = useState(0);
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        fetch('exercise.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const addSecondHandler = (time) => {
        const newSeconds = seconds + time;
        setSeconds(newSeconds)

    };

    const breakTimeHandler = (time) => {
        setBreakTime(time);

    }
    console.log(seconds)
    console.log(breakTime)

    return (
        <div className='home'>

            <div className='left'>
                <div className='nav-title'>
                    <img src={logo} alt="" />
                    <div>
                        <h1>GYM-ZONE-BD</h1>
                    </div>
                </div>
                <h3>Select today’s exercise</h3>

                <div className='exercise-container'>
                    {
                        exercises.map((exercise) => <Exercise
                            exercise={exercise}
                            key={exercise.id}
                            addSecondHandler={addSecondHandler}

                        ></Exercise>)
                    }
                </div>



            </div>

            <div className='right'>
                <Person
                    seconds={seconds}
                    breakTimeHandler={breakTimeHandler}
                    breakTime={breakTime}></Person>
                    

            </div>
        </div>
    );
};

export default Home;