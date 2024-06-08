// Minimum Number in an Array
let arr=[12,64,-24,54,65,24,8,-123]

function minimum(arr){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

function minimum2(arr){
    return arr.reduce((pv,cv)=>(pv<cv)?pv:cv,undefined)
}

let result=minimum(arr);
console.log(result);