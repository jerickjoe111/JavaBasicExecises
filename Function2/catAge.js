function catAge(years) {
    let firstHumYears = 15;
    let secondHumYears = 9;
    if ( years === 0) return 0;
    if ( years === 1) return firstHumYears;
    if ( years === 2) return firstHumYears + secondHumYears;

    return firstHumYears + secondHumYears + (years - 2) * 4;
}


console.log(catAge(0));
console.log(catAge(1));
console.log(catAge(2));
console.log(catAge(3));
console.log(catAge(4));

let removeLastChar = str => {
    str = str.split('');
    str.pop();
    return str.join('');
};

console.log(removeLastChar('ciao!'));


const template = 'I VERB NOUN.';
let sentence = (verb, noun) => {
  return template.replace('VERB', verb).replace('NOUN', noun);
}

console.log(sentence('like', 'birds'));
// logs: I like birds.