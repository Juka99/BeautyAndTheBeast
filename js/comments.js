$(document).ready(function () {

    $('#postACommentButton').on('click', postaviKomentar);

    $('#odgovorNaKomentar').on('click', odgovoriNaKomentarPrikazBloka);

    $("#answerCommentButton").on('click', odgovoriNaKomentar);

    $("#closeAnswerPopUp").on('click', function () {

        $('.blockAnswerComment').removeClass("blockAnswerComment1");

    });

});

function odgovoriNaKomentarPrikazBloka() {

    let idKorisnikaKomentara = this.dataset.komentaridkor;

    $('.blockAnswerComment').addClass("blockAnswerComment1");

    $('#answerCommentButton').attr('data-idParent', idKorisnikaKomentara);

}

function odgovoriNaKomentar() {

    let answerCommentError = [];

    if ($('#answerCommentArea').val() == '') {

        document.getElementById('commentAnswerErrorPar').style.display = 'block';

        answerCommentError.push("greska");

    }

    if (answerCommentError.length == 0) {

        document.getElementById('commentAnswerErrorPar').style.display = 'none';

        $('.blockAnswerComment').removeClass("blockAnswerComment1");

        // Ajax za Madica

    }

}

function postaviKomentar() {

    // Vrednost komentara

    let commentPostValue = document.getElementById('commentForABlog').value;

    // Greska paragraf

    let commentPostErrorPar = document.getElementById('commentErrorPar');

    // Regex za post komentara

    let regexComment = /^.+$/;

    if (!regexComment.test(commentPostValue)) {

        commentPostErrorPar.style.display = 'block';

    }

    else {

        commentPostErrorPar.style.display = 'none';

        // Ajax za Madica

    }

}