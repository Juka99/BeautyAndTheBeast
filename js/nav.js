$(document).ready(function () {

    // Animacija za strelicu back to top

    $('.goTop').on('click', function () {

        $('html').animate({ scrollTop: 0 }, 250);

    });

    // Animacija za side navigation

    $('#triggerSideNav').click(() => {

        $('.sideNav').toggleClass('sideNav1');

    });

    $(document).on('click', '.sideMenu li a', () => {

        $('.sideNav').removeClass('sideNav1');

    });

    $(document).on('click', '.logoSideNav', () => {


        $('.sideNav').removeClass('sideNav1');

    });

    // Ispis menija pomocu json-a

    $.ajax({

        url: "assets/json/nav.json",
        method: "GET",
        dataType: "json",
        success: function (data) {

            printMenu(data);

        },
        error: function (err, msg, type) {

            console.log(msg);

        }

    })

    // Menjanje navigacije kada se skroluje na sajtu

    $(window).scroll(function () {

        const scroll = $(window).scrollTop();

        if (scroll > 50) {

            $('nav').css('background-color', 'black');

            $('nav .logoNav .logoImage img').css('width', '130px');

            $('.ytButton').css('top', '5.6%');

        }

        else {

            $('nav').css('background', 'transparent');

            $('.ytButton').css('top', '6.5%');

            $('nav .logoNav .logoImage img').css('width', '150px');

        }

        if (scroll > 150) {

            $('.goTop').addClass('goTop1');

        }

        else $('.goTop').removeClass('goTop1');

    });

})

// Funkcije

function printMenu(data) {

    let printer = '';

    let allTheMenusCollection = document.getElementsByClassName('menu');

    let allTheMenus = Array.from(allTheMenusCollection);

    for (let el of allTheMenus) {

        for (let link of data) {

            printer += `<li><a href="${link.putanja}">${link.naziv}</a></li>`;

        }

        el.innerHTML = printer;

        printer = '';

    }

}

// Prikaz logoa svuda gde je ta klasa postavljena

let logosCollection = document.getElementsByClassName('allLogos');

let logos = Array.from(logosCollection);

for (let el of logos) {

    el.innerHTML = ` <a href="index.html#goTopMain" class='logoImage'><img src="assets/images/milosLogo.png" alt="Logo" class='img-fluid' /></a>`;

}