import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise, addSecondHandler }) => {
    const { name, img, age, description, time } = exercise;
    return (
        <div className='exercise' data-aos="zoom-in">
            <img src={img} alt="" />
            <div className='exercise-body'>
                <h4>{name}</h4>
                <p>{description.slice(0, 50) + '....'}</p>
                <p>For age: <b>{age}</b> </p>
                <p>Time Required: <b>{time}s</b></p>
            </div>
            <button className='add-btn' onClick={() => { addSecondHandler(time)}}>Add to list</button>
            
        </div>
    );
};

export default Exercise;