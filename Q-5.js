// Remove Duplicates in Array

function removeduplicates(arr){
    return Array.from(new Set(arr));
}

function removeduplicates2(arr){
    return arr.filter((item,index)=>arr.indexOf(item)===index);
}
let arr=[12,43,15,24,4,25,12,43,2,15]
console.log(removeduplicates2(arr));