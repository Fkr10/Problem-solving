function diagonalDifference(arr) {
    let x= 0;
    let y= 0;
    for(let i =0 ; i<arr.length; i++ ){
        for(let j =0 ; j<arr.length; j++ ){
            if(i==j){
                x+=arr[i][j];
            }
            if(i+j == arr.length-1){
                y+=arr[i][j];
            }
        }
    }
    return Math.abs(x-y);
}

let a = [[11, 2 ,4],[4, 5, 6],[10, 8, -12]]
console.log(diagonalDifference(a))