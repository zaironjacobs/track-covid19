import Country from "@interface/country";
import Article from "@interface/article";


interface IndexProp {
    worldwideData: Country;
    countriesData: Country[];
    articlesData: Article[];
}

export default IndexProp;