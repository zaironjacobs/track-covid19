import React from 'react';
import HomeContainer from 'containers/Home/Home';
import axios from 'axios';

export default function Home({worldwideData, countriesData}) {
    return (
        <HomeContainer worldwideData={worldwideData} countriesData={countriesData}/>
    );
}

export const getServerSideProps = async () => {
    const apiUrl = process.env.DJANGO_API_URL;

    let countriesData = null
    await axios.get(apiUrl + '/countries')
        .then((res) => {
            countriesData = res.data
        })
        .catch((err) => {
            console.log(err)
        });
    if (countriesData !== null) {
        countriesData = countriesData.filter((item) => item.name !== 'Worldwide');
    }

    let worldwideData = null
    await axios.get(apiUrl + '/country?country=Worldwide')
        .then((res) => {
            worldwideData = res.data
        })
        .catch((err) => {
            console.log(err)
        });

    return {
        props: {worldwideData, countriesData}
    }
}