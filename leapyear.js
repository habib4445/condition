function leapyear(year){
if(year%4===0){
    return true;
}
else{
    return false;
}
}
const ilipi =leapyear(2024);
console.log(ilipi);