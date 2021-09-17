// Hent værdier fra form over i js.
let inputName1 = document.querySelector("#input-name-1");
let inputName2 = document.querySelector("#input-name-2");
let inputEmail = document.querySelector("#input-email");
let inputEmailVer = document.querySelector("#input-email-ver");
let inputPassword = document.querySelector("#input-password");
let inputPasswordVer = document.querySelector("#input-password-ver");
let inputKaffe = document.querySelector("#input-kaffe");
let inputAntal = document.querySelector("#input-antal");
let submitForm = document.querySelector("#submit-form");
let regForm = document.querySelector(".reg-form");
// Variable til fejlbeskeder, der vises ud for felterne.
let errorName1 = document.querySelector("#error-name-1");
let errorName2 = document.querySelector("#error-name-2");
let errorEmail = document.querySelector("#error-email");
let errorPassword = document.querySelector("#error-password");
let errorAntal = document.querySelector("#error-antal");

// Flag til at styre hvornår data er korrekt indtastede.
let fornavnOk = "nej";
let efternavnOk = "nej";
let emailOk = "nej";
let passwordOk = "nej";
let antalOk = "nej";
let formOk = "nej";


// Opsætning af handlers til når brugeren gør noget.
submitForm.addEventListener("click", submitHandler);

// Udføres hver gang der trykkes på Tilmeld-knappen.
function submitHandler(event) {
    event.preventDefault();
    if (inputPassword.value.length > 0)
        {
            if (inputPassword.value.length >= 6 ) 
            {
                if (inputPassword.value == inputPasswordVer.value) 
                {
                    passwordOk = "ja";
                    errorPassword.innerHTML = "";
                }
                else 
                {
                    errorPassword.innerHTML = "Password og genindtastet password matcher ikke.";
                    passwordOk = "nej";
                }
            }
            else 
            {
                errorPassword.innerHTML = "Password-længde skal være mindst 6 tegn.";
                passwordOk = "nej";
            }
        }
    else 
    {
        errorPassword.innerHTML = "Password skal indtastes før du kan registrere dig.";
        passwordOk = "nej";       
    }

    if (inputEmail.value.length > 0)
        {
            if (inputEmail.value.indexOf(".") >= 0 && inputEmail.value.indexOf("@") >= 0)
                {
                if (inputEmail.value == inputEmailVer.value) {
                    emailOk = "ja";
                    errorEmail.innerHTML = "";
                }
                else {
                    errorEmail.innerHTML = "Email og genindtastet email matcher ikke.";
                    emailOk = "nej";
                }
            }
            else {
                emailOk = "nej";
                errorEmail.innerHTML = "En email skal se sådan ud: nnnn@dddd.ss.";
            }
        }
    else {
        emailOk = "nej";
        errorEmail.innerHTML = "Din email skal indtastes før du kan registrere dig.";
    }

    if (inputName1.value.length > 0) {
        fornavnOk = "ja";
        errorName1.innerHTML = "";
    }
    else {
        fornavnOk = "nej";
        errorName1.innerHTML = "Dit fornavn skal indtastes før du kan registrere dig.";
    }
    
    if (inputName2.value.length > 0) {
        efternavnOk = "ja";
        errorName2.innerHTML = "";
    }
    else {
        efternavnOk = "nej";
        errorName2.innerHTML = "Dit efternavn skal indtastes før du kan registrere dig.";
    }

    if (inputAntal.value > 0) {
        if (inputAntal.value < 100) {
            antalOk = "ja";
            errorAntal.innerHTML = "";
        }
        else {
            antalOk = "nej";
            errorAntal.innerHTML = "Så mange kopper kaffe kan du ikke drikke!"; 
        }
    }
    else {
        antalOk = "nej";
        errorAntal.innerHTML = "Du drikker jo slet ikke kaffe!";
    }
    if ( fornavnOk == "ja" && efternavnOk == "ja" && emailOk == "ja" && passwordOk == "ja" && antalOk == "ja") {
        formOk = "ja";
    }

    if (formOk == "ja") {
        regForm.submit();
        regForm.reset();
    } 
}


