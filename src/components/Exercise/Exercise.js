import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise }) => {
    const { name, img, age, description, time } = exercise;
    return (
        <div className='exercise' data-aos="zoom-in">
            <img src={img} alt="" />
            <div className='exercise-body'>
                <h4>{name}</h4>
                <p>{description.slice(0, 50) + '....'}</p>
                <p>For age: <b>{age}</b> </p>
                <p>Time</p>
            </div>
            
        </div>
    );
};

export default Exercise;