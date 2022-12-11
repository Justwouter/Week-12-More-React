import React from 'react';

const DayBox = (props) => {
    return (
        <li className="DayBoxMain">
            <label>{props.day}</label>
            <button className="DayBoxButton" disabled={props.disabled} type="submit" name='Doe boeking' >{props.text}</button>
        </li>
    );


};
export default DayBox;






