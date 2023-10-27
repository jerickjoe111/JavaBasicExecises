function repeat(num, str) {
    let newString = "";
    for (let i = 0; i < num; i ++) {
        newString += str;
    }
    return newString;
}
 // 'hahaha'

console.log(repeat(3, 'ha'));