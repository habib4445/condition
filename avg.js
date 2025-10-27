function oddavg(numbers){
    for (const number of numbers){
        if(number%2===1){
            console.log(number);
        }
    }
}
const numbers=[2,4,7,9,8];
const avg =oddavg(numbers);