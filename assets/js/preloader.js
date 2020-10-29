$(document).ready(function () {

    // Prikaz loadera u zavinsosti od vremena

    let time = Math.round(new Date().getTime() / 1000 / 60);

    if (localStorage) {

        if (!localStorage.getItem('videoShow')) {

            setTimeout(function (e) {

                $('.infoBlock img').css("animation-delay", "5s");

                $('.infoBlock a').css("animation-delay", "6s");

                $('.preloader').fadeOut();

                $('body').addClass('vert');

                localStorage.setItem('videoShow', time);

            }, 4500);

            // $('body').css('overflow-y', "hidden");

            // $('.preloader').fadeOut();

            // $('.infoBlock img').css("animation-delay", "1s");

            // $('.infoBlock a').css("animation-delay", "2s");

            // $('body').addClass('vert');

        }

        else {

            let getTimeFromLocal = JSON.parse(localStorage.getItem('videoShow'));

            console.log(time - getTimeFromLocal, time, getTimeFromLocal)

            if (time - getTimeFromLocal >= 500) {

                setTimeout(function (e) {

                    $('.infoBlock img').css("animation-delay", "5s");

                    $('.infoBlock a').css("animation-delay", "6s");

                    $('.preloader').fadeOut();

                    $('body').addClass('vert');

                    localStorage.removeItem('videoShow');

                }, 4500);

            }

            else {

                $('body').css('overflow-y', "auto");

                $('.preloader').fadeOut();

                $('.infoBlock img').css("animation-delay", "1s");

                $('.infoBlock a').css("animation-delay", "2s");

            }

        }

    }

    else {

        alert('Local Storage is not supported on your browser !');

    }

});