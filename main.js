const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmit.onclick = function(){
    if(mycheckbox.checked){
        subResult.textContent = `you are subscribed`;
        if(visaBtn.checked)
            paymentResult.textContent = `pay using Visa`
        else if(mastercardBtn.checked)
            paymentResult.textContent = `pay using masterCard`
        else if (paypalBtn.checked)
            paymentResult.textContent = `pay using paypal`
        else
            paymentResult.textContent = `you have to choose payment method `
    }
    else{
        subResult.textContent = `you are not subscribed`
    }

}