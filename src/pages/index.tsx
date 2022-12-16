import { IArticle, ICountry } from '@interfaces'
import { Home } from '@page-components/Home'
import { getArticles, getCountries, getCountry } from '@services/api'

export default Home

export const getServerSideProps = async () => {
    let countriesData: ICountry[] = []
    try {
        countriesData = await getCountries()
    } catch (error) {}

    let articlesData: IArticle[] = []
    try {
        articlesData = await getArticles()
    } catch (error) {}

    let worldwideData: ICountry = null as any
    try {
        worldwideData = await getCountry('Worldwide')
    } catch (error) {}

    countriesData = countriesData.filter((country: ICountry) => country.name !== 'Worldwide')

    return {
        props: { worldwideData, countriesData, articlesData },
    }
}
