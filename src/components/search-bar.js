class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    set searchEvent(event) {
        this._searchEvent = event
        this.render()
    }

    get value() {
        return this.querySelector('#search-input').value
    }

    render() {
        this.innerHTML = `
        <div class="title">
            <h1>MovieList</h1>
        </div>

        <div class="search-bar">
            <input type="search" id="search-input" placeholder="Cari Judul Film">
            <button id="search-button">
                <i class="fa fa-search"></i>
            </button>
        </div>
        `

        this.querySelector('#search-button').addEventListener('click', this._searchEvent)

        this.querySelector('#search-input').addEventListener('keypress', event => {
            if (event.key === 'Enter') {
                this._searchEvent()
            }
        })
    }
}

customElements.define('search-bar', SearchBar)