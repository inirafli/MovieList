import '../components/movie-list.js'
import '../components/search-bar.js'
import DataSource from '../data/data-source.js'

const main = () => {
    const searchElement = document.querySelector('search-bar')
    const movieListElement = document.querySelector('movie-list')

    const searchMovies = async () => {
        try {
            const movies = await DataSource.searchMovie(searchElement.value)

            if (movies.length === 0) {
                renderErrorMessage(`Tidak ada Film dengan Judul: ${searchElement.value}`)
            } else {
                renderMovies(movies)
            }
        } catch (error) {
            renderErrorMessage(error)
        }

        if (!searchElement.value) {
            renderDefaultMovies()
        }
    }

    const renderMovies = movies => {
        movieListElement.movie = movies

        const contentTitleElement = document.querySelector('#content-title')

        if (searchElement.value) {
            contentTitleElement.textContent = `Film dengan Judul: ${searchElement.value}`
        } else {
            contentTitleElement.textContent = 'Trending'
        }
    }

    const renderDefaultMovies = async () => {
        try {
            const trendingMovies = await DataSource.getTrendingMovies()
            renderMovies(trendingMovies)
        } catch (error) {
            renderErrorMessage(error)
        }
    }

    const renderErrorMessage = error => {
        const contentTitleElement = document.querySelector('#content-title')
        const contentElement = document.querySelector('#content')

        contentTitleElement.textContent = error
        contentElement.innerHTML = ''
    }

    renderDefaultMovies()

    searchElement.searchEvent = searchMovies
}

export default main