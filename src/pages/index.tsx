import axios from 'axios'
import { Country } from '@interfaces'
import { Home } from '@page-components/Home'

export default Home

export const getServerSideProps = async () => {
    const apiUrl: string = process.env.COVID19_API_URL as string

    const fetchCountries = () => {
        return axios
            .get(apiUrl + '/countries')
            .then((res) => {
                return res.data.filter((country: Country) => country.name !== 'Worldwide')
            })
            .catch(() => null)
    }

    const fetchWorldwide = () => {
        return axios
            .get(apiUrl + '/country?name=Worldwide')
            .then((res) => res.data)
            .catch(() => null)
    }

    const fetchArticles = () => {
        return axios
            .get(apiUrl + '/articles')
            .then((res) => res.data)
            .catch(() => null)
    }

    const [countriesData, worldwideData, articlesData] = await Promise.all([
        fetchCountries(),
        fetchWorldwide(),
        fetchArticles(),
    ])

    return {
        props: { worldwideData, countriesData, articlesData },
    }
}
