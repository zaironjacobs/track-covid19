import { NextRouter, useRouter } from 'next/router'
import { Article, Country, SelectCountry } from '@interfaces'
import { useState } from 'react'
import moment from 'moment'
import {
    BoxesWrapper,
    BoxPanelHeading,
    Info,
    LatestNews,
    MainContainer,
    SelectWrapper,
    Title,
    Toggle,
    ToggleWrapper,
    WorldIconWrapper,
} from '@page-components/Home/HomeStyled'
import Image from 'next/image'
import { Theme } from '@theme'
import Select from 'react-select'
import Link from 'next/link'
import { NextPage } from 'next'
import { EView } from '@enums/view'
import useTranslation from 'next-translate/useTranslation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons'

interface IHomeProps {
    worldwideData: Country
    articlesData: Article[]
    countriesData: Country[]
}

export const Home: NextPage<IHomeProps> = ({ worldwideData, articlesData, countriesData }: IHomeProps) => {
    const { t } = useTranslation()
    const router: NextRouter = useRouter()
    const { locale } = router
    const [selectedCountry, setSelectedCountry] = useState<SelectCountry>(undefined as any)
    const [view, setView] = useState(EView.WORLD)
    const countries: SelectCountry[] = []
    let fetchDateString = ''

    // Set the date
    if (worldwideData !== null) {
        const date: Date = new Date(worldwideData.last_updated_by_source_at)
        fetchDateString = moment(date).utc().format('MMMM D, YYYY, HH:mm UTC')
    }

    // Set countries data
    if (countriesData !== null) {
        countriesData.forEach((country: Country) => {
            const value: SelectCountry = { value: country, label: country.name }
            countries.push(value)
        })
    }

    // Article date format to string
    if (articlesData !== null) {
        articlesData.forEach((article: Article) => {
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
        if (view === EView.WORLD) setView(EView.COUNTRY)
        else setView(EView.WORLD)
    }

    return (
        <>
            <MainContainer>
                {/* Toggle Button */}
                <ToggleWrapper>
                    {view === EView.WORLD && (
                        <Toggle onClick={toggleView}>
                            {t('common:switchButtonCountry')} &nbsp;
                            <FontAwesomeIcon icon={faCircleRight} />
                        </Toggle>
                    )}
                    {view === EView.COUNTRY && (
                        <Toggle onClick={toggleView}>
                            <FontAwesomeIcon icon={faCircleLeft} />
                            &nbsp; {t('common:switchButtonWorldwide')}
                        </Toggle>
                    )}
                </ToggleWrapper>

                {/* Worldwide View */}
                {view === EView.WORLD && (
                    <>
                        <WorldIconWrapper>
                            <Image src="/images/worldwide.svg" alt="world" width={75} height={75} />
                        </WorldIconWrapper>

                        <Title>{t('common:worldwide')}</Title>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className="box">
                                <BoxPanelHeading color={Theme.colors.casesBoxYellow}>
                                    {t('common:confirmed')}
                                </BoxPanelHeading>
                                <div className="cases-numbers">
                                    {worldwideData
                                        ? new Intl.NumberFormat(locale).format(worldwideData.confirmed)
                                        : '-'}
                                </div>
                            </div>

                            <div className="box">
                                <BoxPanelHeading color={Theme.colors.casesBoxRed}>{t('common:deaths')}</BoxPanelHeading>
                                <div className="cases-numbers">
                                    {worldwideData ? new Intl.NumberFormat(locale).format(worldwideData.deaths) : '-'}
                                </div>
                            </div>
                        </BoxesWrapper>
                    </>
                )}

                {/* Country View */}
                {view === EView.COUNTRY && (
                    <>
                        <WorldIconWrapper>
                            <Image src="/images/country_search.svg" alt="Country Magnify" width={75} height={75} />
                        </WorldIconWrapper>

                        {/* Select country */}
                        <SelectWrapper>
                            <Select
                                placeholder={t('common:selectCountry')}
                                className="select-country"
                                options={countries}
                                styles={selectCustomStyles}
                                onChange={(country) => {
                                    if (country) setSelectedCountry(country)
                                }}
                                instanceId="select-country"
                            />
                        </SelectWrapper>

                        <Title>{selectedCountry ? selectedCountry.value.name : ''}</Title>

                        {/* Boxes */}
                        <BoxesWrapper>
                            <div className="box">
                                <BoxPanelHeading color={Theme.colors.casesBoxYellow}>
                                    {t('common:confirmed')}
                                </BoxPanelHeading>
                                <div className="cases-numbers">
                                    {selectedCountry
                                        ? new Intl.NumberFormat(locale).format(selectedCountry.value.confirmed)
                                        : '-'}
                                </div>
                            </div>

                            <div className="box">
                                <BoxPanelHeading color={Theme.colors.casesBoxRed}>{t('common:deaths')}</BoxPanelHeading>
                                <div className="cases-numbers">
                                    {selectedCountry
                                        ? new Intl.NumberFormat(locale).format(selectedCountry.value.deaths)
                                        : '-'}
                                </div>
                            </div>
                        </BoxesWrapper>
                    </>
                )}

                {/* Info */}
                <Info>
                    <div className="last-updated">
                        {t('common:lastUpdated')}: {fetchDateString ? fetchDateString : ''}
                    </div>
                    <div className="data-source">
                        {t('common:dataSource')}: Johns Hopkins University Center for Systems Science and Engineering
                    </div>
                </Info>

                {/* Latest News */}
                <LatestNews>
                    <div className="heading">{t('common:latestNews')}</div>
                    <div className="news-box">
                        {/* News */}
                        {articlesData !== null &&
                            articlesData.map((article: Article, index: number) => (
                                <div key={index} className="news">
                                    <div className="title">
                                        <Link href={article.url}>{article.title}</Link>
                                    </div>
                                    <p className="description">{article.description}</p>
                                    <p className="source-name">{article.source_name}</p>
                                    <p className="published-date">{article.published_at}</p>
                                </div>
                            ))}
                    </div>
                </LatestNews>
            </MainContainer>
        </>
    )
}
