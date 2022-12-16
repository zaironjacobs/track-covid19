import { NextRouter, useRouter } from 'next/router'
import { IArticle, ICountry, ISelectCountry } from '@interfaces'
import { useState } from 'react'
import moment from 'moment'
import {
    Box,
    BoxesWrapper,
    BoxPanelHeading,
    CasesNumbers,
    DataSource,
    Info,
    LastUpdated,
    LatestNews,
    News,
    NewsBox,
    NewsDescription,
    NewsHeading,
    NewsPublishedDate,
    NewsSourceName,
    NewsTitle,
    SelectCountry,
    SelectWrapper,
    Title,
    Toggle,
    ToggleWrapper,
    WorldIconWrapper,
} from '@page-components/Home/HomeStyled'
import Image from 'next/image'
import { theme } from '@theme'
import Link from 'next/link'
import { NextPage } from 'next'
import { View } from '@types'
import useTranslation from 'next-translate/useTranslation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import { global } from '@global'

interface IHomeProps {
    worldwideData: ICountry
    articlesData: IArticle[]
    countriesData: ICountry[]
}

export const Home: NextPage<IHomeProps> = ({ worldwideData, articlesData, countriesData }: IHomeProps) => {
    const { t } = useTranslation()
    const router: NextRouter = useRouter()
    const { locale } = router
    const [selectedCountry, setSelectedCountry] = useState<ISelectCountry>(undefined as any)
    const [view, setView] = useState<View>('WORLDWIDE')
    const selectCountries: ISelectCountry[] = []
    let fetchDateString = ''

    // Set the date
    if (worldwideData !== null) {
        const date: Date = new Date(worldwideData.last_updated_by_source_at)
        fetchDateString = moment(date).utc().format('MMMM D, YYYY, HH:mm UTC')
    }

    // Set countries data
    if (countriesData !== null) {
        countriesData.forEach((country: ICountry) => {
            const value: ISelectCountry = { value: country, label: country.name }
            selectCountries.push(value)
        })
    }

    // Article date format to string
    if (articlesData !== null) {
        articlesData.forEach((article: IArticle) => {
            const date: Date = new Date(article.published_at)
            article.published_at = moment(date).utc().format('MMMM D, YYYY, HH:mm UTC')
        })
    }

    // Custom styles for Select
    const selectCustomStyles: {} = {
        option: (styles: any) => ({
            ...styles,
            cursor: 'pointer',
        }),
        control: (styles: any) => ({
            ...styles,
            cursor: 'pointer',
        }),
    }

    // Toggle the view
    function toggleView() {
        if (view === 'WORLDWIDE') setView('COUNTRY')
        else setView('WORLDWIDE')
    }

    function onCountryChange(county: ISelectCountry) {
        setSelectedCountry(county)
    }

    return (
        <>
            <Head>
                <title>{global.siteName}</title>
            </Head>

            {/* Toggle Button */}
            <ToggleWrapper>
                {view === 'WORLDWIDE' && (
                    <Toggle onClick={toggleView}>
                        {t('common:switchButtonCountry')} &nbsp;
                        <FontAwesomeIcon icon={faCircleRight} />
                    </Toggle>
                )}
                {view === 'COUNTRY' && (
                    <Toggle onClick={toggleView}>
                        <FontAwesomeIcon icon={faCircleLeft} />
                        &nbsp; {t('common:switchButtonWorldwide')}
                    </Toggle>
                )}
            </ToggleWrapper>

            {/* Worldwide View */}
            {view === 'WORLDWIDE' && (
                <>
                    <WorldIconWrapper>
                        <Image src="/images/worldwide.svg" alt="world" width={75} height={75} />
                    </WorldIconWrapper>

                    <Title>{t('common:worldwide')}</Title>

                    {/* Boxes */}
                    <BoxesWrapper>
                        <Box>
                            <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                {t('common:confirmed')}
                            </BoxPanelHeading>
                            <CasesNumbers>
                                {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.confirmed) : '-'}
                            </CasesNumbers>
                        </Box>

                        <Box>
                            <BoxPanelHeading color={theme.colors.casesBoxRed}>{t('common:deaths')}</BoxPanelHeading>
                            <CasesNumbers>
                                {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.deaths) : '-'}
                            </CasesNumbers>
                        </Box>
                    </BoxesWrapper>
                </>
            )}

            {/* Country View */}
            {view === 'COUNTRY' && (
                <>
                    <WorldIconWrapper>
                        <Image src="/images/country_search.svg" alt="Country Magnify" width={75} height={75} />
                    </WorldIconWrapper>

                    {/* Select country */}
                    <SelectWrapper>
                        <SelectCountry
                            placeholder={t('common:selectCountry')}
                            options={selectCountries}
                            styles={selectCustomStyles}
                            onChange={(country) => onCountryChange(country as ISelectCountry)}
                            instanceId="select-country"
                        />
                    </SelectWrapper>

                    <Title>{selectedCountry ? selectedCountry.value.name : ''}</Title>

                    {/* Boxes */}
                    <BoxesWrapper>
                        <Box>
                            <BoxPanelHeading color={theme.colors.casesBoxYellow}>
                                {t('common:confirmed')}
                            </BoxPanelHeading>
                            <CasesNumbers>
                                {selectedCountry
                                    ? new Intl.NumberFormat(locale).format(selectedCountry.value.confirmed)
                                    : '-'}
                            </CasesNumbers>
                        </Box>

                        <Box>
                            <BoxPanelHeading color={theme.colors.casesBoxRed}>{t('common:deaths')}</BoxPanelHeading>
                            <CasesNumbers>
                                {selectedCountry
                                    ? new Intl.NumberFormat(locale).format(selectedCountry.value.deaths)
                                    : '-'}
                            </CasesNumbers>
                        </Box>
                    </BoxesWrapper>
                </>
            )}

            {/* Info */}
            <Info>
                <LastUpdated>
                    {t('common:lastUpdated')}: {fetchDateString ? fetchDateString : ''}
                </LastUpdated>
                <DataSource>
                    {t('common:dataSource')}: Johns Hopkins University Center for Systems Science and Engineering
                </DataSource>
            </Info>

            {/* Latest News */}
            <LatestNews>
                <NewsHeading>{t('common:latestNews')}</NewsHeading>
                <NewsBox>
                    {/* News */}
                    {articlesData !== null &&
                        articlesData.map((article: IArticle, index: number) => (
                            <News key={index}>
                                <NewsTitle>
                                    <Link href={article.url}>{article.title}</Link>
                                </NewsTitle>
                                <NewsDescription>{article.description}</NewsDescription>
                                <NewsSourceName>{article.source_name}</NewsSourceName>
                                <NewsPublishedDate>{article.published_at}</NewsPublishedDate>
                            </News>
                        ))}
                </NewsBox>
            </LatestNews>
        </>
    )
}
