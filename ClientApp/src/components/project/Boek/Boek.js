import React, { useEffect } from 'react';
import DayBox from './DayBox';

const Boek = () => {
    useEffect(() => {
        //BubbleHandler();
        //SpawnDayBoxes();
    });



    let DayArray = GenerateDates();
    let ButtonOn = true;



    return (
        // <h2>Hello!</h2>

        <form>

            Kies een dag uit: <ul id="lijst">
                {DayArray.map((item, index) => {

                    return <DayBox key={index} disabled = {false} day={item} text="Miss Atomic Bomb"/>

                })}
            </ul>
            <br />
            <input type="number" name="aantal"></input>
            <br />
            <input type="email" name="email"></input>
            <br />

            <br />
            <button disabled={!ButtonOn} type="submit"  >Doe boeking</button>
        </form>

    );


};
export default Boek;

// function BubbleHandler() {
//     let list = document.getElementById("lijst")
//     list.innerHTML = ""
//     const DAGEN = [0, 1, 2, 3, 4, 5, 6,]
//     for (let i = 0; i < DAGEN.length; i++) {
//         let dag = DAGEN[i]
//         list.innerHTML += "<input className=\"DaySelectButton\" type=\"radio\" name=\"dag\" value=\"" + dag + "\"/>";
//     }
// };

function GenerateDates() {
    let NameArray = [];
    var today = new Date();
    for (let i = 0; i <= 31; i++) {
        var nextDates = new Date(new Date().setDate(today.getDate() + i))
        var fullName = nextDates.toLocaleDateString(navigator.language, { weekday: 'long', month: 'long', day: "numeric" })
        NameArray.push(fullName)
    }
    return NameArray;
}




