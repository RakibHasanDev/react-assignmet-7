import React from 'react';
import logo from '../../Images/top-info.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import './PersonInfo.css'

const PersonInfo = () => {
    return (
        <div className='person-info'>
            <div className='person-body'>
                <div className='top-info'>
                    <img src={logo} alt="" />
                    <div>
                        <h4 className='name'>Rakib Hasan</h4>
                        <p className='fa-icon'> <span><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> <small>Dhaka, Bangladesh</small> </p>
                    </div>
                </div>
                <div className='weight'>
                    <div className='all-mesure'>
                        <div>
                            <div className='weight-elements'>
                                <h3>68</h3>
                                <small>kg</small>
                            </div>
                            <p className='mesurement'>Weight</p>
                        </div>
                        <div>
                            <div className='weight-elements'>
                                <h3>5.5</h3>
                                <small>"</small>
                            </div>
                            <p className='mesurement'>height</p>
                        </div>
                        <div>
                            <div className='weight-elements'>
                                <h3>25</h3>
                                <small>yrs</small>
                            </div>
                            <p className='mesurement'>Age</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PersonInfo;