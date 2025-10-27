const products=[
    {name: 'shampoo', price:300},
    {name: 'chiruni', price:500},
    {name: 'shirt', price:800},
    {name: 'pant', price:1200},
]
function getShoppingTotal (products){
    for(const product of products){
console.log(product);
    }
}
const total =getShoppingTotal(products);
console.log('total ajke shob', total);