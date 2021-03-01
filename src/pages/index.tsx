import React, {useState, Dispatch} from 'react';
import axios, {AxiosResponse} from 'axios';
import {
    Toggle, ToggleWrapper, BoxesWrapper, BoxPanelHeading, Info, WorldIconWrapper, MainContainer, SelectWrapper
} from '@style/IndexStyled';
import Header from '@component/Header';
import Select from 'react-select';
import moment from 'moment';
import theme from 'theme';


const Index = ({worldwideData, countriesData}) => {

    const worldwideView: string = 'worldwideView';
    const countryView: string = 'countryView';

    const [view, setView]: [string, Dispatch<string>] = useState(worldwideView);
    const [selectedCountry, setSelectedCountry]: [any, Dispatch<string>] = useState(null);

    let dateString: string = '';
    let countries: any[] = [];

    // Set the date
    if (worldwideData !== null) {
        const date = new Date(worldwideData.last_updated_by_source_at);
        dateString = moment(date).format('ddd MMM DD YYYY HH:mm');
    }

    // Set countries data
    if (countriesData !== null) {
        countriesData.forEach(function (country) {
            countries.push({value: country, label: country.name})
        });
    }

    // Custom styles for Select
    const selectCustomStyles: {} = {
        option: (styles) => ({
            ...styles,
            cursor: 'pointer',
        }),
        control: (styles) => ({
            ...styles,
            cursor: 'pointer',
        })
    }

    // Toggle the view
    const toggleView: {} = () => {
        if (view === worldwideView) {
            setView(countryView);
        } else {
            setView(worldwideView);
        }
    }


    return (
        <>
            {/* Header */}
            <Header/>

            <MainContainer>

                {/* Toggle Button */}
                <ToggleWrapper>
                    {view === worldwideView &&
                    <Toggle onClick={toggleView}>Switch to Country View &nbsp;
                        <i className='fas fa-arrow-circle-right'/>
                    </Toggle>
                    }
                    {view === countryView &&
                    <Toggle onClick={toggleView}>
                        <i className='fas fa-arrow-circle-left'/>&nbsp; Switch to Worldwide View
                    </Toggle>
                    }
                </ToggleWrapper>

                {/* Worldwide View */}
                {view === worldwideView ?
                    <>
                        <WorldIconWrapper>
                            <img src='images/worldwide.svg' alt='world' className='top-icon'/>
                        </WorldIconWrapper>

                        <h1>Worldwide</h1>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                    Total Confirmed
                                </BoxPanelHeading>

                                <div className='cases-numbers'>{worldwideData ? worldwideData.confirmed : '-'}</div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxRed}>
                                    Total Deaths
                                </BoxPanelHeading>
                                <div className='cases-numbers'>{worldwideData ? worldwideData.deaths : '-'}</div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxGreen}>
                                    Total Recovered
                                </BoxPanelHeading>
                                <div className='cases-numbers'>{worldwideData ? worldwideData.recovered : '-'}</div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxBlue}>
                                    Total Active
                                </BoxPanelHeading>
                                <div className='cases-numbers'>{worldwideData ? worldwideData.active : '-'}</div>
                            </div>
                        </BoxesWrapper>
                    </>
                    : null}

                {/* Country View */}
                {view === countryView ?
                    <>
                        <WorldIconWrapper>
                            <img src='images/country_search.svg' alt='Country Magnify' className='top-icon'/>
                        </WorldIconWrapper>

                        <SelectWrapper>
                            <Select placeholder='Select a Country...'
                                    className='select-box'
                                    options={countries}
                                    styles={selectCustomStyles}
                                    onChange={setSelectedCountry}
                            />
                        </SelectWrapper>

                        <h1>{selectedCountry != null ? selectedCountry.value.name : ''}</h1>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                    Total Confirmed
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? selectedCountry.value.confirmed : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxRed}>
                                    Total Deaths
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? selectedCountry.value.deaths : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxGreen}>
                                    Total Recovered
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? selectedCountry.value.recovered : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxBlue}>
                                    Total Active
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? selectedCountry.value.active : '-'}
                                </div>
                            </div>
                        </BoxesWrapper>
                    </>
                    : null}

                {/* Info */}
                <Info>
                    <div className='last-updated'>
                        Last updated: {dateString ? dateString : ''}
                    </div>
                    <div className='data-source'>
                        Data gathered from Johns Hopkins University Center for Systems Science and Engineering
                    </div>
                </Info>

            </MainContainer>
        </>
    );
}

export default Index;


export const getServerSideProps = async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_COVID19_API_URL;

    let countriesData: any[] = null;
    await axios.get(apiUrl + '/countries')
        .then((res: AxiosResponse) => {
            countriesData = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    if (countriesData !== null) {
        countriesData = countriesData.filter((item) => item.name !== 'Worldwide');
    }

    let worldwideData: [] = null;
    await axios.get(apiUrl + '/country?name=Worldwide')
        .then((res: AxiosResponse) => {
            worldwideData = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    return {
        props: {worldwideData, countriesData}
    }
}
