// MENU
var searchButton = $('.lnr-magnifier')
var menuButton = $('.lnr-menu');
var crossButton = $('.lnr-cross');
var menu = $('.menu');
var searchContainer = $('.search-container')

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
            }, 499)
            setTimeout(function() {
                searchContainer.fadeIn(600)
            }, 599)
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
            }, 499)
        }, 599)
    } else {
        menu.fadeIn(600)
        menuButton.fadeOut(500);
        setTimeout(function() {
            crossButton.fadeIn(500)
        }, 499)
    }
})

crossButton.on('click', function() {
    menu.fadeOut(600)
    crossButton.fadeOut(500);
    setTimeout(function() {
        menuButton.fadeIn(500)
    }, 498)
})

// SEARCH
var artists = ['Franz Ackermann', 'Etel Adnan', 'Darren Almond', 'Ellen Altfest', 'Michael Armitage', 'Miroslaw Balka', 'Georg Baselitz', 'Larry Bell', 'Jake & Dinos Chapman', 'Chuck Close', 'Gregory Crewdson', 'Tracey Emin', 'Katharina Fritsch', 'Theaster Gates', 'Gilbert & George', 'Antony Gormley', 'Andreas Gursky', 'David Hammons', 'Mona Hatoum', 'He Xiangyu', 'Damien Hirst', 'Robert Irwin', 'Runa Islam', 'Sergej Jensen', 'Anselm Kiefer', 'Rachel Kneebone', 'Imi Knoebel', 'Elad Lassry', 'Liza Lou', 'Jac Leirner', 'Liu Wei', 'Christian Marclay', 'Josiah McElheny', 'Julie Mehretu', 'Beatriz Milhazes', 'Harland Miller', 'Sarah Morris', 'Gabriel Orozco', 'Damián Ortega', 'Virginia Overton', 'Eddie Peake', 'Magnus Plessen', 'Jessica Rankin', 'Christian Rosa', 'Doris Salcedo', 'Raqib Shaw', 'Haim Steinbach', 'Sam Taylor-Johnson', 'Fred Tomaselli', 'Jeff Wall', 'Cerith Wyn Evans']

var searchInput = $('.search');
var resultsBox = $('.results-box');

searchInput.on('input', function() {
    let val = searchInput.val();

    var matches = artists.filter(function(e) {
        return e.toLowerCase().indexOf(val.toLowerCase()) == 0;
    }).slice(0, 3);

    let results = '';

    for (var i = 0; i < matches.length; i++) {
        results += '<div class="result"><a href="#artists">' + matches[i] + '</a></div>';
    }

    resultsBox.html(results)

    if (val.length === 0){
    resultsBox.html('');
  }

})

// MAIN IMAGE CAROUSEL
var imageContainer = $('.main-image-container')
var images = $('.main-image').toArray();
var dots = $('.dot');
var count = 0;
var transitioning;

function move() {
    if (!transitioning) {
        transitioning = true;
        images[count].classList.replace('on-screen', 'exit');
        dots[count].classList.remove('on');
        setTimeout(function() {
            $('.exit').removeClass('exit');
            transitioning = false;
        }, 1000)

        count++
        if (count >= images.length) {
            count = 0;
        }
        images[count].classList.add('on-screen');
        dots[count].classList.add('on');
    } else {
        return
    }
}

imageContainer.on('click', function() {
    move()
})

// VIEW ALL ARTISTS
var artistsViewAll = $('.artists-view-all');
var artistsList = $('.artists-list');

artistsViewAll.on('click', function() {
    artistsList.toggleClass('al-view-all')
})
