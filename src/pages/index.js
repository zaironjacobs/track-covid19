import React from 'react';
import HomeContainer from 'containers/Home/Home';
import axios from 'axios';

export default function Home({worldwideData, countriesData}) {
    return (
        <HomeContainer worldwideData={worldwideData} countriesData={countriesData}/>
    );
}

export const getServerSideProps = async () => {
    let countriesData = await axios.get('http://127.0.0.1:8000/countries')
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
    countriesData = countriesData.data;
    countriesData = countriesData.filter((item) => item.name !== 'Worldwide');

    const worldwideParams = {country: 'Worldwide'}
    let worldwideData = await axios.get('http://127.0.0.1:8000/country',
        {params: worldwideParams})
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
    worldwideData = worldwideData.data;

    return {
        props: {worldwideData, countriesData}
    }
}