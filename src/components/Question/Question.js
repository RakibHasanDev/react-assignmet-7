import React from 'react';
import './Question.css'



const Question = () => {
    
    return (
        <div className='question-section'>
            <div>
                <h3>1. How Does react Work?</h3>
                <p> <b>Ans:</b> React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. In fancy words, React does batch updates. So putting all pieces together,</p>
            </div>
            <div>
                <h3>2. Difference between props and state? </h3>
                <p> <b>Ans:</b> State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props
                </p>
            </div>

            <div>
                <h3>3. What is the use of "useEffect" without data load?</h3>
                <p><b>Ans:</b> Some examples of side effects are:
                    <li>Fetching data</li>
                    <li>directly updating the DOM</li>
                    <li>Run Timers</li>
                    <li>Trigger animation</li>
                    The use of "useEffect" without data load are:  without fetching data <b>useEffect</b> directly update the dom,timers and Trigger animation.</p>
                
            </div>
        </div>
    );
};

export default Question;