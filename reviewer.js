function compareTriplets(a, b) {
    let alice=0,bob=0;
    for(let i=0;i<a.length;i++){
        if(a[i]>b[i]){
           alice++ 
        }
        if(a[i]<b[i]){
            bob++
        }
    }
    return [alice, bob];
}
let a =[1,2,3];
let b = [3,2,1];
console.log(compareTriplets(a,b))