import axios from "axios"

const baseUrl = 'https://api.themoviedb.org/3/'
const API_KEY = 'TMDB_API_KEY'

class DataSource {
    static async getTrendingMovies() {
        const response = await axios.get(`${baseUrl}trending/movie/week`, {
            params: {
                api_key: API_KEY
            }
        })

        const movies = response.data.results.map(result => ({
            title: result.title,
            rating: result.vote_average.toFixed(1),
            description: result.overview,
            bannerUrl: `https://image.tmdb.org/t/p/w500${result.poster_path}`
        }))

        return movies
    }

    static async searchMovie(keyword) {
        const response = await axios.get(`${baseUrl}search/movie`, {
            params: {
                query: keyword,
                api_key: API_KEY
            }
        })

        const movies = response.data.results.map(result => ({
            title: result.title,
            rating: result.vote_average.toFixed(1),
            description: result.overview,
            bannerUrl: `https://image.tmdb.org/t/p/w500${result.poster_path}`
        }))

        return movies
    }
}

export default DataSource