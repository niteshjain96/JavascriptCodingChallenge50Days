// Largest Number in Array

function largest(arr){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

function largest2(arr){
    return arr.reduce((pv,cv)=>(pv>cv)?pv:cv);
}

let arr=[12,654,73,64,25,74,636,252,2456,24]
console.log(largest2(arr));

// largest function cannot handle when array is empty