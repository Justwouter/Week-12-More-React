import React from 'react';

const DayBox = (props) => {
    return (
        <li className="DayBoxMain">
            <label>{props.day}</label>
            <button onClick={props.action} className="DayBoxButton" disabled={props.disabled}  name='Doe boeking' >{props.text}</button>
        </li>
    );


};
export default DayBox;






