const about = 'My name is Ajabul Islam. I am from Bangladesh. I am 24 years old.';
console.log(about)

/* ---------split-------- */

const parts = about.split(' ')
// console.log(parts)

const sentences = about.split('.')
// console.log(sentences)

const chars = about.split('')
// console.log(chars)

/* ------slice------- */
const partial = about.slice(3, 10);
console.log(partial)

const lines = [
    'My name is Ajabul Islam',
    'I am from Bangladesh',
    'I am 24 years old',
  ];

const newSong = lines.join('. ')
console.log(newSong)
