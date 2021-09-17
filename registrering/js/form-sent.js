let addressField = window.location.href;
let addressObject = new URL(addressField);

let fornavn = addressObject.searchParams.get("fornavn");
let efternavn = addressObject.searchParams.get("efternavn");
let email = addressObject.searchParams.get("email");
let password = addressObject.searchParams.get("password");
let kaffe = addressObject.searchParams.get("kaffe");
let antal = addressObject.searchParams.get("antal");

let navnOutput = document.querySelector("#navn-output");
let emailOutput = document.querySelector("#email-output");
let passwordOutput = document.querySelector("#password-output");
let kaffeOutput = document.querySelector("#kaffe-output");

navnOutput.innerHTML = "Navn: " + fornavn + " " + efternavn;
emailOutput.innerHTML = "Email: " + email;
passwordOutput.innerHTML = "Password: " + password;
kaffeOutput.innerHTML = "Du fortrækker " + kaffe + " og drikker " + antal + " kopper kaffe om dagen.";