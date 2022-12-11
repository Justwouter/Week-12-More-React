import React, { useEffect, useState } from 'react';
import DayBox from './DayBox';
import { GetDagId, formatDate, PostDag, GetDagen, PutDag } from '../../../Helpers';

const Boek = () => {
    const [days, setDays] = useState([]);
    const [isdone, setDone] = useState(false);
    const [numbertobereserved, setReserved] = useState(0);
    const [daysList, setDaysList] = useState([]);
    const [email, setMail] = useState("");

    useEffect(() => {
        async function loadData() {
            const response = await GetDagen();
            setDays(await response.json())
            setDone(true)
        }
        loadData()
        addDays()

    }, [isdone]);

    useEffect(() => { addDays() }, [numbertobereserved, email, addDays])



    function handleChange(event) {
        setReserved(Number(event.target.value));

    }

    function handleEmail(event){
        setMail(event.target.value);
    }
    
    async function handlePutReq(item) {
        await PutDag(item.id, Number(item.guests + numbertobereserved))
    }



    function addDays() {
        setDaysList(days.map((item, index) => {
            let enabled = true
            let txt = "Reserveer nu!"
            if (Number(item.guests) >= 10 || (Number(item.guests) + numbertobereserved) > 10) {
                enabled = false;
                txt = "Te veel mensen"
            }
            if(email.length < 6 || !email.includes("@")){
                enabled = false;
                txt = "Voer een email in"
            }
            else {
                enabled = true
            }
            return (<DayBox key={index} action={(e) => {
                e.preventDefault();
                handlePutReq(item);
            }} disabled={!enabled} day={item.id} text={txt} />)

        }))
    }






    if (!isdone) {
        return (<h1>HELLO</h1>)
    }

    return (
        <div>
            <h1>API URL https://localhost:7296/swagger</h1>
            <form>
                Kies een dag uit: <ul id="lijst">
                    {daysList}
                </ul>
                <br />
                <input id='numbers' type="number" name="aantal" onChange={handleChange}></input>
                <br />
                <input id='email' onChange={handleEmail} type="email" name="email"></input>
                <br />

                <br />
                {/* <button disabled={!ButtonOn} type="submit"  >Doe boeking</button> */}
            </form>

        </div>


    );


};
export default Boek;


// async function GenerateDates() {
//     let NameArray = [];
//     var today = new Date();
//     for (let i = 0; i <= 31; i++) {
//         var nextDates = new Date(new Date().setDate(today.getDate() + i))
//         NameArray.push(nextDates)
//         if (! await GetDagId(formatDate(nextDates))) {
//             await PostDag(formatDate(nextDates))
//         }
//     }
//     return NameArray;
// }

// async function checkDayFull(date) {
//     var response = await GetDagId(formatDate(date)).then((res) => res.json());
//     console.log(response)
//     if (Number(response.guests) >= 10) {
//         return true
//     }
//     return false;
// }





