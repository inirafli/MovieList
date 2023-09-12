import './movie-item.js'

class MovieList extends HTMLElement {
    set movie(movie) {
        this._movie = movie
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="content-head">
                <h2 id='content-title'>Trending</h2>
            </div>
            <div id="content" class="movie-grid">
        </div>
        `

        const contentDiv = this.querySelector('#content')

        this._movie.forEach(movie => {
           const movieItemElement = document.createElement('movie-item')
           movieItemElement.movie = movie
           contentDiv.appendChild(movieItemElement)
        })
    }
}

customElements.define('movie-list', MovieList)