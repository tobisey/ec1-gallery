var searchButton = $('.lnr-magnifier')
var menuButton = $('.lnr-menu');
var crossButton = $('.lnr-cross');
var menu = $('.menu');
var searchContainer = $('.search-container')
var artistsViewAll = $('.artists-view-all');
var artistsList = $('.artists-list');

searchContainer.hide();
menu.hide();
crossButton.hide();

searchButton.on('click', function() {
    if (searchContainer.is(':visible')) {
        searchContainer.fadeOut(600)
    } else {
        if (menu.is(':visible')) {
            menu.fadeOut(600)
            crossButton.fadeOut(500);
            setTimeout(function() {
                menuButton.fadeIn(500)
            }, 498)
            setTimeout(function() {
                searchContainer.fadeIn(600)
            }, 598)
        } else {
            searchContainer.fadeIn(600)
        }
    }
})

menuButton.on('click', function() {
    if (searchContainer.is(':visible')) {
        searchContainer.fadeOut(600);
        setTimeout(function() {
            menu.fadeIn(600)
            menuButton.fadeOut(500);
            setTimeout(function() {
                crossButton.fadeIn(500)
            }, 498)
        }, 598)
    } else {
        menu.fadeIn(600)
        menuButton.fadeOut(500);
        setTimeout(function() {
            crossButton.fadeIn(500)
        }, 498)
    }
})

crossButton.on('click', function() {
    menu.fadeOut(600)
    crossButton.fadeOut(500);
    setTimeout(function() {
        menuButton.fadeIn(500)
    }, 498)
})

artistsViewAll.on('click', function() {
    artistsList.toggleClass('al-view-all')
})
