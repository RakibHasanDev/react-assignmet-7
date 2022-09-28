import React from 'react';
import PersonInfo from '../PersonInfo/PersonInfo';
import './Person.css'


const Person = () => {
    return (
        <div className='person-section'>
            <PersonInfo></PersonInfo>
            <h4>Add A Break</h4>
            <div className='person-break'>
                <div>
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                </div>
            </div>
            <div><h3>Exercise Details</h3></div>
            <div className='exercise-time'>
                <h4>Exercise time</h4>
                <p>seconds</p>
            </div>
            <div className='break-time'>
                <h4>Break time</h4>
                <p>seconds</p>

            </div>
        </div>
    );
};

export default Person;