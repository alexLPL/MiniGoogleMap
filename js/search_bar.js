class SearchBar {
    constructor() {
        this.template = `
                        <div class="search-bar-wrapper">
                            <input type="text" placeholder="Search mini map" class="input-text-bar" />
                            <div class="search-icon"></div>
                        </div>
                        `
    }

    addTo($parent) {
        $parent.append(this.template);
    }
}
