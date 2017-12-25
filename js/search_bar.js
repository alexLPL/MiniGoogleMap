class SearchBar {
    constructor(callback) {
        this.template = `
                        <div class="search-bar-wrapper">
                            <i class="search-bar-menu-icon material-icons" style="font-size:24px">menu</i>    
                            <input type="text" placeholder="Search mini map" class="input-text-bar" />
                            <div class="search-icon"></div>
                            <div class="search-bar-menu">
                                <div class="search-bar-menu-row">Satellite</div>
                                <div class="search-bar-menu-row">Traffic</div>
                                <div class="search-bar-menu-row">Transit</div>
                                <div class="search-bar-menu-row">Bicycling</div>
                            </div>
                            <div class="search-bar-menu-tooltip">Menu</div>
                        </div>
                        `
        this.callback=callback;
    }

    addTo($parent) {
        $parent.append(this.template);
        $('.search-bar-wrapper').on('keyup', _.bind(function(e) {
            if (e.keyCode == 13) {
                this.callback($('.input-text-bar')[0].value);
            }
        }, this));
        $('.search-bar-menu-icon').on('click', function(ev) {
            $('.search-bar-menu').toggleClass('visible');
        });
    }
}
