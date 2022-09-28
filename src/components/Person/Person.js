import React from 'react';
import PersonInfo from '../PersonInfo/PersonInfo';
import './Person.css'


const Person = ({ seconds, breakTimeHandler, breakTime}) => {
    
    return (
        <div className='person-section'>
            <PersonInfo></PersonInfo>
            <h4>Add A Break</h4>
            <div className='person-break'>
                <div>
                    <button onClick={() =>breakTimeHandler(10)} >10s</button>
                    <button onClick={() => breakTimeHandler(20)} >20s</button>
                    <button onClick={() => breakTimeHandler(30)} >30s</button>
                    <button onClick={() => breakTimeHandler(40)} >40s</button>
                </div>
            </div>
            <div><h3>Exercise Details</h3></div>
            <div className='exercise-time'>
                <h4>Exercise time</h4>
                <p>{ seconds} seconds</p>
            </div>
            <div className='break-time'>
                <h4>Break time</h4>
                <p>{breakTime} seconds</p>

            </div>
            <button className='activity-button'>Activity Complete</button>
        </div>
    );
};

export default Person;