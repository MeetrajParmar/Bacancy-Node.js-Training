let age:number | string=3;//This is Union Type
console.log(age);
age="31";
console.log(age);



function calculateTax(price:number|string, tax:number){
    if(typeof price==='string'){
        price=parseFloat(price.replace("$",""));
        return `The Tax for $${price}: ${price*tax}`;
    }else{
            return `The Tax for $${price}: ${price*tax}`;
    }
}

console.log(calculateTax(24,2));
console.log(calculateTax("$10",2));
