module.exports = function reverse (n) {
    let result='';
    let i=0;
    while (i<n.toString().length) {
        result = `${n.toString()[i]}${result}`;
        i=i+1;
    }
    return parseInt(result);
}