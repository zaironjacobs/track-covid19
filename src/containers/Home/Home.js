import React, {useState} from 'react';
import {
    MainContainer, DivBoxesWrapper, DivBox, DivBoxPanelHeading, H1Worldwide, DivCasesNumbers,
    DivTopIconWrapper, DivLastUpdated, ButtonToggle, ButtonToggleWrapper, SelectWrapper
} from './HomeStyled';
import global from 'global';
import Head from 'next/head';
import Select from 'react-select'
import theme from 'theme/theme'
import WorldwideIcon from '../../../public/assets/images/worldwide.svg';
import CountrySearchIcon from '../../../public/assets/images/country_search.svg';

const worldwide = 'worldwide'
const country = 'country'

export default function Home({worldwideData, countriesData}) {
    const [view, setView] = useState(worldwide);
    const [selectedCountry, setSelectedCountry] = useState(null);

    const date = new Date(worldwideData.updated_at);
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'];
    const weekNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateString = weekNames[date.getDay()] + ' ' + monthNames[date.getMonth()] + ' ' + date.getDate() + ' ' +
        date.getFullYear() + ' ' + date.getHours() + ':' + '0' + date.getMinutes().slice(-2);

    let countryOptions = []
    countriesData.forEach(function (country) {
        countryOptions.push({value: country, label: country.name})
    });

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

    return (
        <MainContainer>

            <Head>
                <title>{global.siteName}</title>
                <meta name='description' content='home'/>
            </Head>

            {view === worldwide ?
                <>
                    <ButtonToggleWrapper>
                        <ButtonToggle onClick={() => setView('country')}>Switch to Country View</ButtonToggle>
                    </ButtonToggleWrapper>

                    <DivTopIconWrapper>
                        <WorldwideIcon className='top-icon'/>
                    </DivTopIconWrapper>

                    <H1Worldwide>Worldwide</H1Worldwide>

                    <DivBoxesWrapper>
                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxYellow}>
                                Total Confirmed
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData.confirmed}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxRed}>
                                Total Deaths
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData.deaths}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxGreen}>
                                Total Recovered
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData.recovered}</DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxBlue}>
                                Total Active
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>{worldwideData.active}</DivCasesNumbers>
                        </DivBox>
                    </DivBoxesWrapper>

                    <DivLastUpdated>Last updated: {dateString}</DivLastUpdated>
                </>
                : null}

            {view === country ?
                <>
                    <ButtonToggleWrapper>
                        <ButtonToggle onClick={() => setView('worldwide')}>Switch to Worldwide View</ButtonToggle>
                    </ButtonToggleWrapper>

                    <DivTopIconWrapper>
                        <CountrySearchIcon className='top-icon'/>
                    </DivTopIconWrapper>

                    <SelectWrapper>
                        <Select placeholder='Select a Country...'
                                className='select-box'
                                options={countryOptions}
                                styles={selectCustomStyles}
                                onChange={setSelectedCountry}
                        />
                    </SelectWrapper>

                    <H1Worldwide>{selectedCountry != null ? selectedCountry.value.name : ''}</H1Worldwide>

                    <DivBoxesWrapper>
                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxYellow}>
                                Total Confirmed
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry != null ? selectedCountry.value.confirmed : 0}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxRed}>
                                Total Deaths
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry != null ? selectedCountry.value.deaths : 0}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxGreen}>
                                Total Recovered
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry != null ? selectedCountry.value.recovered : 0}
                            </DivCasesNumbers>
                        </DivBox>

                        <DivBox>
                            <DivBoxPanelHeading color={theme.colors.casesBoxBlue}>
                                Total Active
                            </DivBoxPanelHeading>
                            <DivCasesNumbers>
                                {selectedCountry != null ? selectedCountry.value.active : 0}
                            </DivCasesNumbers>
                        </DivBox>
                    </DivBoxesWrapper>

                    <DivLastUpdated>Last updated: {dateString}</DivLastUpdated>
                </>
                : null}

        </MainContainer>
    );
}