function oddavg(numbers){
    const odd=[];
    for (const number of numbers){
        if(number%2===1){
            // console.log(number);
            odd.push(numbers);
        }
    }
    console.log(odd);
}
const numbers=[2,4,7,9,8];
const avg =oddavg(numbers);