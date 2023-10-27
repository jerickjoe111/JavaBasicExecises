let first = arr => arr[0];

console.log(first(['Earth', 'Moon', 'Mars']));

let last = arr => arr[arr.length - 1];
console.log(last(['Earth', 'Moon', 'Mars']));

let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
energy.shift();
energy.push('geothermal');
console.log(energy);


let scores = [96, 47, 113, 89, 100, 102];

let count = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 100) {
        count++;
    }
}
console.log(count);

let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];

for (let i = 0; i < vocabulary.length; i++ ) {
    for (let j = 0; j < vocabulary[i].length; j++) {
        console.log(vocabulary[i][j]);
    }
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(element, list) {
    return list.indexOf(element) >= 0;
}

let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];

console.log(passcode.join('-'))