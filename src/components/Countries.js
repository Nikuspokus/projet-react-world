import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';

const Countries = () => {
    // Ceci est un hook
    // data = c'est notre variable, là ou on va mettre nos données
    // setData = c'est lélément par lequel on passera pour actualiser les données
    const [data, setData] = useState([]);
    // const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
            .then((res) => setData(res.data));

        // const sortedCountry = () => {

        // }

        // les "[]" permettent de ne jouer qu'une seule fois le useEffect
    }, []);
    return (
        <div className="countries">
            <ul className="countries-list">
                {data.map((country) => (
                    <Card country={country} key={country.name} />
                ))}
            </ul>
        </div>
    );

};

export default Countries;