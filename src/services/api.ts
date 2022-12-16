import { IArticle, ICountry } from '@interfaces'
import axios, { AxiosResponse } from 'axios'

const apiUrl: string = process.env.COVID19_API_URL as string

/**
 * Get countries
 *
 * @return {Promise<ICountry}
 */
export async function getCountries() {
    const { data }: AxiosResponse<ICountry[]> = await axios({
        url: `${apiUrl}/countries`,
        method: 'get',
    })

    return data
}

/**
 * Get country
 *
 * @param {string} name The country name
 * @return {Promise<ICountry}
 */
export async function getCountry(name: string) {
    const { data }: AxiosResponse<ICountry> = await axios({
        url: `${apiUrl}/countries/${name}`,
        method: 'get',
    })

    return data
}

/**
 * Get articles
 *
 * @return {Promise<IArticle}
 */
export async function getArticles() {
    const { data }: AxiosResponse<IArticle[]> = await axios({
        url: `${apiUrl}/articles`,
        method: 'get',
    })

    return data
}
