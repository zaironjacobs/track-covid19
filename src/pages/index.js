import React from 'react';
import HomeContainer from 'containers/Home/Home';
import axios from 'axios';

export default function Home({worldwideData, countriesData}) {
    return (
        <HomeContainer worldwideData={worldwideData} countriesData={countriesData}/>
    );
}

export const getServerSideProps = async () => {
    const django_url = process.env.DJANGO_URL;
    let countriesData = await axios.get(django_url + '/countries')
        .then((data) => {
            return data
        })
        .catch((error) => {
            return error
        });
    countriesData = countriesData.data;
    countriesData = countriesData.filter((item) => item.name !== 'Worldwide');

    const worldwideParams = {country: 'Worldwide'}
    let worldwideData = await axios.get(django_url + '/country',
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