const oddishOrEvenish = (number) =>{

    let arr = number.toString().split('');
    let total = 0;
    arr.map((value, index) => {
        total += Number(value);
    })
    let result
    total % 2 === 0 ? result= 'Even' : result = 'Odd'
    return result
}

const a = oddishOrEvenish(873478353)
console.log(a)