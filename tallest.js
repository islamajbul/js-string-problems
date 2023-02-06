/* let a = 55;
let b = 66;
let c = 88;

const maxNumber = Math.max(a,b,c);
console.log(maxNumber) */

function maxInArray(numbers){
    let largest = numbers[0];
    for(i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element>largest){
            largest=element;
        }
        
    }
    return largest;
}

const heights = [167, 190, 120, 165, 137, 265];
const tallest = maxInArray(heights);
console.log('Tallest person is:',tallest);