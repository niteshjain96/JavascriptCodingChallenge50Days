// Check if all are unique in array

function checkunique(arr){
    let arr1=[...arr]
    let arr2=Array.from(new Set(arr))
     return arr1.length===arr2.length;
}


function checkunique2(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                return false;
            }
        }
        }
    return true;
}
let arr=[12,23,4,2,7,35,23]
console.log(checkunique(arr));

