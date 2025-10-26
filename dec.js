// for(let i=0; i<20;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=30; i++){
//     if(i%3===0 || i%5===0){
//         console.log(i);
//     }
// }
let total=0;
for(let i=1; i<=1000; i++){
    if(i%3===0){
        console.log(i);
        tatal=total+1;
    }
}
console.log('total number of the sum',total);