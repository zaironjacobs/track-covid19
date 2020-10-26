import React, {useState} from 'react';
import {
    MainContainer, DivBoxesWrapper, DivBox, DivBoxPanelHeading, H1Country, DivCasesNumbers,
    DivTopIconWrapper, DivLastUpdated, ButtonToggle, ButtonToggleWrapper, SelectWrapper
} from './HomeStyled';
import global from 'global';
import Head from 'next/head';
import Select from 'react-select';
import theme from 'theme/theme';
import moment from 'moment';
import worldwideIcon from 'assets/images/worldwide.svg';
import countrySearchIcon from 'assets/images/country_search.svg';

const worldwideView = 'worldwideView';
const countryView = 'countryView';

export default function Home({worldwideData, countriesData}) {
    const [view, setView] = useState(worldwideView);
    const [selectedCountry, setSelectedCountry] = useState(null);

    let dateString = '';
    let countryOptions = [];

    if (worldwideData !== null) {
        const date = new Date(worldwideData.last_updated_by_source_at);
        dateString = moment(date).format('ddd MMM DD YYYY HH:mm');
    }

    if (countriesData !== null) {
        countriesData.forEach(function (country) {
            countryOptions.push({value: country, label: country.name})
        });
    }

    const selectCustomStyles = {
        option: (styles) => ({
            ...styles,
            cursor: 'pointer',
        }),
        control: (styles) => ({
            ...styles,
            cursor: 'pointer',
        })
    }

    const toggleView = () => {
        if (view === worldwideView) {
            setView(countryView);
        } else {
            setView(worldwideView);
        }
    }

    return (
        <MainContainer>

            <Head>
                <title>{global.siteName}</title>
                <meta name='description' content='home'/>
            </Head>

            <ButtonToggleWrapper>
                {view === worldwideView &&
                <ButtonToggle onClick={toggleView}>
                    Switch to Country View &nbsp;
                    <i className='fas fa-arrow-circle-right'/>
                </ButtonToggle>
                }
                {view === countryView &&
                <ButtonToggle onClick={toggleView}>
                    <i className='fas fa-arrow-circle-left'/>
                    &nbsp; Switch to Worldwide View
                </ButtonToggle>
                }
            </ButtonToggleWrapper>

            {view === worldwideView ?
                <>
                    <DivTopIconWrapper>
                        <img src={worldwideIcon} className='top-icon' alt='world'/>
                    </DivTopIconWrapper>

                    <H1Country>Worldwide</H1Country>

                    <DivBoxesWrapper>
                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxYellow}>
                                Total Confirmed
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData ? worldwideData.confirmed : '-'}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxRed}>
                                Total Deaths
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData ? worldwideData.deaths : '-'}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxGreen}>
                                Total Recovered
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData ? worldwideData.recovered : '-'}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxBlue}>
                                Total Active
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData ? worldwideData.active : '-'}</DivCasesNumbers>
                        </DivBox>
                    </DivBoxesWrapper>

                    <DivLastUpdated>Last updated: {dateString}</DivLastUpdated>
                </>
                : null}

            {view === countryView ?
                <>
                    <DivTopIconWrapper>
                        <img src={countrySearchIcon} className='top-icon' alt='country_search'/>
                    </DivTopIconWrapper>

                    <SelectWrapper>
                        <Select placeholder='Select a Country...'
                                className='select-box'
                                options={countryOptions}
                                styles={selectCustomStyles}
                                onChange={setSelectedCountry}
                        />
                    </SelectWrapper>

                    <H1Country>{selectedCountry != null ? selectedCountry.value.name : ''}</H1Country>

                    <DivBoxesWrapper>
                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxYellow}>
                                Total Confirmed
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry ? selectedCountry.value.confirmed : '-'}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxRed}>
                                Total Deaths
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry ? selectedCountry.value.deaths : '-'}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxGreen}>
                                Total Recovered
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry ? selectedCountry.value.recovered : '-'}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxBlue}>
                                Total Active
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry ? selectedCountry.value.active : '-'}
                            </DivCasesNumbers>
                        </DivBox>
                    </DivBoxesWrapper>

                    <DivLastUpdated>Last updated: {dateString ? dateString : ''}</DivLastUpdated>
                </>
                : null}

        </MainContainer>
    );
}