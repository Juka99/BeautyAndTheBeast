$(document).ready(() => {

    $('#loginButtonSender').on('click', checkLogin);

});

function checkLogin() {

    // Niz za greske

    let loginErrors = [];

    // Values of login fields

    let mailLoginField = document.getElementById('emailLoginField').value;

    let passLoginField = document.getElementById('passLoginField').value;

    // Paragrafi gresaka za login

    let emailLoginErrorPar = document.getElementById('emailLoginErrorPar');

    let passLoginErrorPar = document.getElementById('passLoginErrorPar');

    // Regexi za login

    let regexMailLogin = /^[a-zšđčćž\,\/\.\-\_\d\.\!\?]+\@[a-z]+(\.[a-z]+){1,2}$/;

    let regexPassLogin = /^.{8,16}$/;

    function checkLoginRegex(poljeLogin, regexLogin, errorLogin) {

        if (regexLogin.test(poljeLogin)) {

            errorLogin.style.display = 'none';

        }

        else {

            errorLogin.style.display = 'block';

            loginErrors.push("greska");

        }

    };

    checkLoginRegex(passLoginField, regexPassLogin, passLoginErrorPar);

    checkLoginRegex(mailLoginField, regexMailLogin, emailLoginErrorPar);

    if (loginErrors.length == 0) {

        // Ajax za Madica

    }

}