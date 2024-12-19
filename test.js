// parseInt() reloaded
// Write a function called parseInt() that takes a string and returns an integer. Do not use parseInt() function.
// For an input string: '1234'
// Output: 1234
// For an input string: '605'
// Output: 605


function parseInt(str) {
    let num = 0;
    for (let i = 0; i < str.length; i++) {
        num = num * 10 + (str.charCodeAt(i) - 48);
    }
    return num;
}