function miniMaxSum(arr1) {
    // Write your code here
    let arr = arr1.sort((a,b)=>a-b);
    console.log(arr)

    let ar1 = arr.slice(1)
    let c = ar1.reduce((a,b)=>a+b);
    arr.pop();
    let d = arr.reduce((a,b)=>a+b);
    console.log(d,c)
}
let arr = [7 ,69 ,2 ,221, 8974]
miniMaxSum(arr);