import React from 'react';

const Exercise = ({ exercise }) => {
    const { name, img } = exercise;
    return (
        <div>
            <h1>name:{name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Exercise;