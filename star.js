function staircase(n) {
    for(let i =1;i<=n;i++){
        let a = '';
        for(let j =n;j>i;j--){
            a=a+" ";
        }
        for(let k =0;k<i;k++){
            a=a+"*";
        }
         console.log(a);
    }
}staircase(4)