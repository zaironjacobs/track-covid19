import {Dispatch, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {
    BoxesWrapper, BoxPanelHeading, Info, LatestNews, MainContainer, SelectWrapper, Toggle, ToggleWrapper, Title,
    WorldIconWrapper
} from '@style/IndexStyled';
import Header from '@component/Header';
import Link from 'next/link';
import Select from 'react-select';
import moment from 'moment';
import theme from 'theme';
import Article from '@interface/article';
import Country from '@interface/country';
import SelectCountry from '@interface/selectCountry';
import {NextRouter, useRouter} from 'next/router';


const Index = (props) => {
    const i18n = props.i18n;
    const router: NextRouter = useRouter();
    const {locale} = router;

    const worldwideData: Country = props.worldwideData;
    const articlesData: Article[] = props.articlesData;
    const countriesData: Country[] = props.countriesData;

    const worldwideView: number = 0;
    const countryView: number = 1;
    const [view, setView] = useState(worldwideView);

    const [selectedCountry, setSelectedCountry]: [SelectCountry, Dispatch<any>] = useState(null);

    let fetchDateString: string = '';
    let countries: {}[] = [];

    // Set the date
    if (worldwideData !== null) {
        const date: Date = new Date(worldwideData.last_updated_by_source_at);
        fetchDateString = moment(date).utc().format('MMMM D, YYYY, HH:mm UTC');
    }

    // Set countries data
    if (countriesData !== null) {
        countriesData.forEach((country: Country) => {
            const value: SelectCountry = {value: country, label: country.name};
            countries.push(value);
        });
    }

    // Article date format to string
    if (articlesData !== null) {
        articlesData.forEach((article: Article) => {
            const date: Date = new Date(article.published_at);
            article.published_at = moment(date).utc().format('MMMM D, YYYY, HH:mm UTC');
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
                    <Toggle onClick={toggleView}>{i18n.switchButtonCountry} &nbsp;
                        <i className='fas fa-arrow-circle-right'/>
                    </Toggle>
                    }
                    {view === countryView &&
                    <Toggle onClick={toggleView}>
                        <i className='fas fa-arrow-circle-left'/>&nbsp; {i18n.switchButtonWorldwide}
                    </Toggle>
                    }
                </ToggleWrapper>

                {/* Worldwide View */}
                {view === worldwideView ?
                    <>
                        <WorldIconWrapper>
                            <img src='images/worldwide.svg' alt='world' className='top-icon'/>
                        </WorldIconWrapper>

                        <Title>{i18n.worldwide}</Title>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                    {i18n.confirmed}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.confirmed) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxRed}>
                                    {i18n.deaths}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.deaths) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxGreen}>
                                    {i18n.recovered}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.recovered) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxBlue}>
                                    {i18n.active}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.active) : '-'}
                                </div>
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

                        {/* Select country */}
                        <SelectWrapper>
                            <Select placeholder='Select a Country...'
                                    className='select-country'
                                    options={countries}
                                    styles={selectCustomStyles}
                                    onChange={setSelectedCountry}
                                    instanceId='select-country'
                            />
                        </SelectWrapper>

                        <Title>{selectedCountry !== null ? selectedCountry.value.name : ''}</Title>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                    {i18n.confirmed}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? new Intl.NumberFormat(locale).format(selectedCountry.value.confirmed) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxRed}>
                                    {i18n.deaths}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? new Intl.NumberFormat(locale).format(selectedCountry.value.deaths) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxGreen}>
                                    {i18n.recovered}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? new Intl.NumberFormat(locale).format(selectedCountry.value.recovered) : '-'}
                                </div>
                            </div>

                            <div className='box'>
                                <BoxPanelHeading color={theme.colors.casesBoxBlue}>
                                    {i18n.active}
                                </BoxPanelHeading>
                                <div className='cases-numbers'>
                                    {selectedCountry ? new Intl.NumberFormat(locale).format(selectedCountry.value.active) : '-'}
                                </div>
                            </div>
                        </BoxesWrapper>
                    </>
                    : null}

                {/* Info */}
                <Info>
                    <div className='last-updated'>
                        {i18n.lastUpdated}: {fetchDateString ? fetchDateString : ''}
                    </div>
                    <div className='data-source'>
                        {i18n.dataSource}: Johns Hopkins University Center for Systems Science and Engineering
                    </div>
                </Info>

                {/* Latest News */}
                <LatestNews>
                    <div className='heading'>{i18n.latestNews}</div>
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
    const apiUrl: string = process.env.COVID19_API_URL;
    const timeout: number = 5000;

    const fetchCountries = () => {
        return axios.get(apiUrl + '/countries', {timeout: timeout})
            .then((res: AxiosResponse) => {
                let countriesData: Country[];
                countriesData = res.data;
                if (countriesData !== null) {
                    countriesData = countriesData.filter((item: Country) => item.name !== 'Worldwide');
                }
                return countriesData;
            })
            .catch((error) => {
                return [];
            });
    }

    const fetchWorldwide = () => {
        return axios.get(apiUrl + '/country?name=Worldwide', {timeout: timeout})
            .then((res: AxiosResponse) => {
                let worldwideData: Country;
                worldwideData = res.data;
                return worldwideData;
            })
            .catch((error) => {
                return null;
            });
    }

    const fetchArticles = () => {
        return axios.get(apiUrl + '/articles', {timeout: timeout})
            .then((res: AxiosResponse) => {
                let articlesData: Article[];
                articlesData = res.data;
                return articlesData;
            })
            .catch((error) => {
                return [];
            });
    }

    const [countriesData, worldwideData, articlesData] = await Promise.all([
        fetchCountries(), fetchWorldwide(), fetchArticles()
    ]);

    return {
        props: {worldwideData, countriesData, articlesData}
    }
}