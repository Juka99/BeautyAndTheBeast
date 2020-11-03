$(document).ready(() => {

    $("#buttonPaymentImageSent").on('click', function () {

        let paymentError = [];

        // Vrednost file polja

        let fileInputValuePayment = document.getElementById('fileInputFieldPayment').value;

        console.log(fileInputValuePayment)

        if (fileInputValuePayment == '') {

            paymentError.push("greska");

            document.getElementById("paymentFileTypeErrorPar").style.display = 'block';

        }

        if (paymentError.length == 0) {

            document.getElementById("paymentFileTypeErrorPar").style.display = 'none';

            // Ajax za Madica

        }

    });

});