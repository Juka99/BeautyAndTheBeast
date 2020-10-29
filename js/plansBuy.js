$(document).ready(function () {

    $('#buyPlanButton').on('click', proveraPlacanja);

})

function proveraPlacanja() {

    // Niz gresaka

    let buyPlanErrors = [];

    // Hvatanje vrednosti svih polja

    let visinaPlan = document.getElementById('buyPlanVisina').value;

    let tezinaPlan = document.getElementById('buyPlanTezina').value;

    let godistePlan = document.getElementById('buyPlanGodiste').value;

    let alergijePlan = document.getElementById('buyPlanAlergije').value;

    let ciljPlan = document.getElementById('buyPlanCilj').value;

    let povredaPlan = document.getElementById('buyPlanPovreda').value;

    let nacinPlacanjaPlan = document.getElementById('nacinPlacanjaPlana').value;

    // Hvatanje paragrafa gresaka

    let visinaGreska = document.getElementById('buyPlanVisinaError');

    let tezinaGreska = document.getElementById('buyPlanTezinaError');

    let godisteGreska = document.getElementById('buyPlanGodisteError');

    let ciljGreska = document.getElementById('buyPlanCiljError');

    let placanjeGreska = document.getElementById('buyPlanPlacanjeError');

    // Regexi

    let visinaTezinaRegex = /^[\d]{2,3}$/;

    let godisteRegex = /^[\d]{4}$/;

    let ciljRegex = /^.{1,}$/;

    // Funckija za proveru regexa

    function checkPlanRegex(imePolja, regexPolja, greskaPolja) {

        if (regexPolja.test(imePolja)) {

            greskaPolja.style.display = 'none';

        }

        else {

            greskaPolja.style.display = 'block';

            buyPlanErrors.push('greska');

        }

    }

    // Pozivanje funckije za proveru regexa

    checkPlanRegex(visinaPlan, visinaTezinaRegex, visinaGreska);

    checkPlanRegex(tezinaPlan, visinaTezinaRegex, tezinaGreska);

    checkPlanRegex(godistePlan, godisteRegex, godisteGreska);

    checkPlanRegex(ciljPlan, ciljRegex, ciljGreska);

    // Provera nacina placanja

    if (nacinPlacanjaPlan == 0) {

        placanjeGreska.style.display = 'block';

        buyPlanErrors.push('greska');

    }

    else {

        placanjeGreska.style.display = 'none';

    }

    // Prikazivanje uspesne kupovine

    if (buyPlanErrors.length == 0) {

        // Ajax za Madica



        //

        document.querySelector('.poslePopunjeneFormePlana').style.display = 'block';

        if (nacinPlacanjaPlan == 1) {

            document.querySelector('.postNetUplata').style.display = 'block';

            document.querySelector('.eBankingUplata').style.display = 'none';

            document.querySelector('.paypalUplata').style.display = 'none';

        }

        if (nacinPlacanjaPlan == 2) {

            document.querySelector('.eBankingUplata').style.display = 'block';

            document.querySelector('.postNetUplata').style.display = 'none';

            document.querySelector('.paypalUplata').style.display = 'none';

        }

        if (nacinPlacanjaPlan == 3) {

            document.querySelector('.paypalUplata').style.display = 'block';

            document.querySelector('.postNetUplata').style.display = 'none';

            document.querySelector('.eBankingUplata').style.display = 'none';

        }

    }

    else {

        document.querySelector('.poslePopunjeneFormePlana').style.display = 'none';

    }

}