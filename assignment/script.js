// task 2
const calcSumAndAvg=(arr)=> {
    if (arr.length === 0) return { sum: 0, average: 0 };
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    const average = sum / arr.length;
    return { sum, average };
}
//for testing
const numbers = [10, 15, 27, 40, 70];
const {sum,average} = calcSumAndAvg(numbers);
console.log("sum = "+sum, "\naverage = " + average);


// task 3
const removeDuplicate=(arr) =>{
    const uniqe=new Set(arr);
    return [...uniqe];
}
//for testing
const words = ["test", "test1", "test1", "test2", "test4", "test6"];
const uniqueStr = removeDuplicate(words);
console.log(uniqueStr);
