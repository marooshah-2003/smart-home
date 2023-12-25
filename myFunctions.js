var index = [];
function addtocard(names,price,quant){
let pressure ={
    names:names,
    quant:quant,
    price:price,
};
index.push(pressure);
basket();
}
function basket(){
let cartbody=document.getElementById('mytfoot');
let totalAmountElement =document.getElementById('taxes');
cartbody.innerHTML='';
var final= 0;
index.forEach(function(pressure){
var r1 = cartbody.insertRow();
var Cell1= r1.insertCell(0);
var Cell2= r1.insertCell(1);
var Cell3= r1.insertCell(2);
var Cell4= r1.insertCell(3);

Cell1.innerHTML = pressure.names;
Cell2.innerHTML = pressure.quant;
Cell3.innerHTML = pressure.price;
Cell4.innerHTML = pressure.price * pressure.quant;

final += pressure.price * pressure.quant;

});
var tax = final * 0.05;
final +=tax;

totalAmountElement.textContent = final;

document.getElementById('execution').style.display ='block';
}




function refreshCaptcha() {
    var newCaptcha = generateCaptcha();
     document.getElementById("captcha").innerText = newCaptcha ;
}
function generateCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}
document.addEventListener("DOMContentLoaded", function() {
    refreshCaptcha();
});




function Delete(){
     index = [];
     basket();


}

function complet(){
    document.getElementById('ultimate').style.display = 'block';
}







    var btnbuy = document.getElementById('buy');
    btnbuy.onclick = function(){
        window.alert('successfly');
    }

