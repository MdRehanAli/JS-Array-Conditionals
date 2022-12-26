var isGraduated = true;
var salary = 25000;
cars = 1;

if (isGraduated == true){
    console.log('Your father-in-law is waited for you to give his daughter to marry with you.')
}
else{
    console.log('You are not able to be a married person.')
}

if (isGraduated == true && salary > 22000 && cars ==1){
    console.log('Your father-in-law is waited for you to give his daughter to marry with you.')
}
else{
    console.log('You are not able to be a married person.')
}

if (isGraduated == true || (salary > 22000 && cars == 0)) {
    console.log('Your father-in-law is waited for you to give his daughter to marry with you.')
}
else {
    console.log('You are not able to be a married person.')
}




