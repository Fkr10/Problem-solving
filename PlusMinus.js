let arr = [-4, 3, -9, 0, 4, 1,-3]


function plusMinus(arr) {
    let a  = [0,0,0]; 
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            a[0] = a[0] + 1;
        } else if(arr[i]==0){
             a[1] = a[1] + 1;
        } else{
             a[2] = a[2] + 1;
        }
    }

    a = a.map((el)=> {return (el/arr.length).toFixed(6)})
    return a
}
plusMinus(arr);