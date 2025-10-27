const numbers=[1,2,33,4,5,5,6,7,];
function nodup(array){
    const unique=[];
    for (const item of array){
        if (unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
console.log(numbers);
const total=nodup(numbers);
console.log(total);

