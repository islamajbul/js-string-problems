/* 2^8 values */
const result = Math.pow(2, 8);
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if(gap < 5){
    console.log('you guys can be friend')
}
else{
    console.log('you guys can not be friend')
}

/* ------------------------------------- */
const number = 2.4598;
const fullNumber = Math.round(number);
// console.log(fullNumber)

const result2 = Math.ceil(number)
const result3 = Math.floor(number)
console.log(result2,result3)

/* ---------Random--------- */

// console.log(Math.random());
// const random = Math.round(Math.random()*100);
for(let i = 1; i < 20; i++){
    const random = Math.round(Math.random()*6);
    console.log(random);
}
