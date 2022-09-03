import { ICountry } from '@interfaces'
import { Home } from '@page-components/Home'
import { getArticles, getCountries, getCountry } from '@services/api'

export default Home

export const getServerSideProps = async () => {
    let [countriesData, worldwideData, articlesData] = await Promise.all([
        getCountries(),
        getCountry('Worldwide'),
        getArticles(),
    ])

    countriesData = countriesData.filter((country: ICountry) => country.name !== 'Worldwide')

    return {
        props: { worldwideData, countriesData, articlesData },
    }
}
