$(document).ready(function () {

    setInterval(function () {

        $('.podsetnikZaUplatu').addClass('podsetnikZaUplatu1');

    }, 180000);

    $('#closeReminder').on('click', function () {

        $('.podsetnikZaUplatu').removeClass('podsetnikZaUplatu1');

    });

})