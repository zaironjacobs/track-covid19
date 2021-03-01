import React, {Dispatch, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {
    BoxesWrapper, BoxPanelHeading, Info, LatestNews, MainContainer, SelectWrapper, Toggle, ToggleWrapper,
    WorldIconWrapper
} from '@style/IndexStyled';
import Header from '@component/Header';
import Link from 'next/link';
import Select from 'react-select';
import moment from 'moment';
import theme from 'theme';
import Article from '@interface/article';
import Country from '@interface/country';
import SelectValue from '@interface/selectValue';
import IndexProp from '@interface/indexProp';


const Index = ({worldwideData, countriesData, articlesData}: IndexProp) => {

    const worldwideView: string = 'worldwideView';
    const countryView: string = 'countryView';

    const [view, setView] = useState(worldwideView);
    const [selectedCountry, setSelectedCountry]: [SelectValue, Dispatch<any>] = useState(null);

    let fetchDateString: string = '';
    let countries: {}[] = [];

    // Set the date
    if (worldwideData !== null) {
        const date: Date = new Date(worldwideData.last_updated_by_source_at);
        fetchDateString = moment(date).format('ddd MMM DD YYYY HH:mm');
    }

    // Set countries data
    if (countriesData !== null) {
        countriesData.forEach((country: Country) => {
            const value: SelectValue = {value: country, label: country.name};
            countries.push(value);
        });
    }

    // Article date format to string
    if (articlesData !== null) {
        articlesData.forEach((article: Article) => {
            const date: Date = new Date(article.published_at);
            article.published_at = moment(date).format('MMMM D, YYYY');
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
    };

    // Toggle the view
    const toggleView: {} = () => {
        if (view === worldwideView) {
            setView(countryView);
        } else {
            setView(worldwideView);
        }
    };


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

                        {/* Select */}
                        <SelectWrapper>
                            <Select placeholder='Select a Country...'
                                    className='select-box'
                                    options={countries}
                                    styles={selectCustomStyles}
                                    onChange={setSelectedCountry}
                            />
                        </SelectWrapper>

                        <h1>{selectedCountry !== null ? selectedCountry.value.name : ''}</h1>

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
                        Last updated: {fetchDateString ? fetchDateString : ''}
                    </div>
                    <div className='data-source'>
                        Data gathered from Johns Hopkins University Center for Systems Science and Engineering
                    </div>
                </Info>

                {/* Latest News */}
                <LatestNews>
                    <div className='heading'>Latest News</div>
                    <div className='news-box'>

                        {/* News */}
                        {articlesData !== null && articlesData.map((article: Article, index: number) => (
                            <div key={index} className='news'>
                                <div className='title'><Link href={article.url}>{article.title}</Link></div>
                                <p className='description'>{article.description}</p>
                                <p className='source-name'>{article.source_name}</p>
                                <p className='published-date'>{article.published_at}</p>
                            </div>
                        ))}

                    </div>
                </LatestNews>

            </MainContainer>
        </>
    );
}

export default Index;


export const getServerSideProps = async () => {
    const apiUrl: string = process.env.NEXT_PUBLIC_COVID19_API_URL;

    let countriesData: Country[] = null;
    await axios.get(apiUrl + '/countries')
        .then((res: AxiosResponse) => {
            countriesData = res.data;
        })
        .catch((err) => {
            console.log(err);
        });
    if (countriesData !== null) {
        countriesData = countriesData.filter((item: Country) => item.name !== 'Worldwide');
    }

    let worldwideData: Country = null;
    await axios.get(apiUrl + '/country?name=Worldwide')
        .then((res: AxiosResponse) => {
            worldwideData = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    let articlesData: Article[] = null;
    await axios.get(apiUrl + '/articles')
        .then((res: AxiosResponse) => {
            articlesData = res.data;
        })
        .catch((err) => {
            console.log(err);
        });

    return {
        props: {worldwideData, countriesData, articlesData}
    }
}
