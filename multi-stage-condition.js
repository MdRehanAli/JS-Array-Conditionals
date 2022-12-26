var money = 20;
var danishPrice = 45;
var biscuit = 30;
var butterBread = 55;

if (danishPrice < money) {
    console.log('I am not able to buy danish.')
}
else if (biscuit < money) {
    console.log('I am not able to buy biscuit also.')
}
else if (butterBread < money) {
    console.log('Oh God! I am not able to buy butter bread also.')
}
else {
    console.log('Bad luck. Today I am so much hungry, but alas! I have not enough money to buy danish, buiscuit or better bread.')
}