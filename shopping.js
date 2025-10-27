const products=[
    {name: 'shampoo', price:300, quantity:2},
    {name: 'chiruni', price:500,quantity:4},
    {name: 'shirt', price:800,quantity:6},
    {name: 'pant', price:1200,quantity:8},
]
function cartTotal(products){
    let total=0;
    for (const product of products){
        const thisProductCost = product.price * product.quantity;
        total = total+thisProductCost;
    }
}
    const shoppingCost=cartTotal();
console.log(shoppingCost);