class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie
        this.render()
    }

    render() {
        this.innerHTML = `
        <div class="default-overlay">
            <h3 class="movie-title">${this._movie.title}</h3>
            <p class="movie-rating"><i class="fas fa-star"></i> ${this._movie.rating}</p>
        </div>
        <div class="movie-overlay">
            <h3 class="movie-title">${this._movie.title}</h3>
            <p class="movie-rating"><i class="fas fa-star"></i> ${this._movie.rating}</p>
            <p class="movie-description">${this._movie.description}</p>
        </div>
        <img src="${this._movie.bannerUrl}" alt="${this._movie.title}">
    `
    }
}

customElements.define('movie-item', MovieItem)