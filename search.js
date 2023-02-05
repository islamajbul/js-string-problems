const about = 'My name is Ajabul Islam. I am from Bangladesh. I am 24 years old.';

const doesExit = about.toLowerCase().includes('ajabul');
console.log(doesExit);


/* ---------------------------------------- */
/* Index of */
console.log(about.indexOf('Islam'));
console.log(about.indexOf('my'));

if(about.indexOf('my') !== -1){
    console.log('exists inside the string')
}
else{
    console.log('cannot find it');
}

/* -------------------------------------------- */
/* startsWith */
console.log(about.startsWith('My'));

/* endsWith */
const filename = 'myBioData.pdf'
console.log(filename.endsWith('.png'))