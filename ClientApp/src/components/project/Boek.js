import React, { Component, useEffect } from 'react';

export class Boek extends Component {
    static displayName = Boek.name;

    constructor(props) {
        super(props);
        this.state = { cart: "" };
    }

    addButtonToDays(params) {
        const DAGEN = params
        for (const dag of [DAGEN])
            document.getElementById("lijst").innerHTML += "<input type=\"radio\" name=\"dag\" value=\"" + dag + "\">" + dag + "</input>";

    }

    render() {

        return (
            // useEffect(() => {
            //     addButtonToDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])
            // });
            <form >
                Kies een dag uit: <div id="lijst"></div>
                <br />
                <input type="text" name="aantal"></input>
                <br />
                <input type="text" name="email"></input>
                <br />

                <br />
                <input type="submit" name='Doe boeking'></input>
            </form>

        )


    }


}