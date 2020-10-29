$(document).ready(() => {

    $('#registerButtonSender').on('click', checkLogin);

});

function checkLogin() {

    // Niz za greske

    let registerErrors = [];

    // Values of login fields

    let firstNameRegisterField = document.getElementById('firstNameRegisterField').value;

    let lastNameRegisterField = document.getElementById('lastNameRegisterField').value;

    let cityRegisterField = document.getElementById('cityRegisterField').value;

    let mailRegisterField = document.getElementById('emailRegisterField').value;

    let passRegisterField = document.getElementById('passwordRegisterField').value;

    let passRepeatRegisterField = document.getElementById('passwordRepeatRegisterField').value;

    // Paragrafi gresaka za login

    let firstNameRegisterErrorPar = document.getElementById('firstNameRegisterErrorPar');

    let lastNameRegisterErrorPar = document.getElementById('lastNameRegisterErrorPar');

    let cityRegisterErrorPar = document.getElementById('cityRegisterErrorPar');

    let mailRegisterErrorPar = document.getElementById('mailRegisterErrorPar');

    let passRegisterErrorPar = document.getElementById('passwordRegisterErrorPar');

    let passRepeatRegisterErrorPar = document.getElementById('passwordRepeatRegisterErrorPar');

    // Regexi za login

    let regexFirstLastNameRegister = /^[A-ZŠĐČĆŽ][a-zšđčćž]{3,19}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{3,19})?$/;

    let regexCityRegister = /^[A-ZŠĐČĆŽ][a-zšđčćž]+(\s[A-ZŠĐČĆŽ][a-zšđčćž]+){0,2}$/;

    let regexMailRegister = /^[a-zšđčćž\,\/\.\-\_\d\.\!\?]+\@[a-z]+(\.[a-z]+){1,2}$/;

    let regexPassRegister = /^.{8,16}$/;



    function checkRegsiterRegex(poljeLogin, regexLogin, errorLogin) {

        if (regexLogin.test(poljeLogin)) {

            errorLogin.style.display = 'none';

        }

        else {

            errorLogin.style.display = 'block';

            registerErrors.push("greska");

        }

    };

    checkRegsiterRegex(firstNameRegisterField, regexFirstLastNameRegister, firstNameRegisterErrorPar);

    checkRegsiterRegex(lastNameRegisterField, regexFirstLastNameRegister, lastNameRegisterErrorPar);

    checkRegsiterRegex(cityRegisterField, regexCityRegister, cityRegisterErrorPar);

    checkRegsiterRegex(mailRegisterField, regexMailRegister, mailRegisterErrorPar);

    checkRegsiterRegex(passRegisterField, regexPassRegister, passRegisterErrorPar);

    if (passRepeatRegisterField != passRegisterField) {

        passRepeatRegisterErrorPar.style.display = 'block';

        registerErrors.push("greska");

    }

    else {

        passRepeatRegisterErrorPar.style.display = 'none';

    }

    if (registerErrors.length == 0) {

        // Ajax za Madica

    }

}