const address = {
    name: 'raselmridha',
    home: 'labsha, satkhira',
    institute: 'satkhira polytechnic institute',
    roll:635665,
    isSingle: true,
    isMarried: false 
}

console.log(address);

const convertString = JSON.stringify(address);
console.log(convertString);

const returnConvert = JSON.parse(convertString);
console.log(returnConvert);