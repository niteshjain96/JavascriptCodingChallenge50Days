// Merge Two Sorted Arrays
function mergeSortedArrays(arr1,arr2){
    let mergedArray=[]
    let i=0;
    let j=0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]>arr2[j]){
            mergedArray.push(arr2[j])
            j++;
        }
        else{
            mergedArray.push(arr1[i])
            i++;
        }
    }
    while(i<arr1.length){
        mergedArray.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}

function mergeSortedArrays1(arr1,arr2){
    return arr1.concat(arr2).sort((a,b)=>a-b);
}
let arr1=[12,13,16,23,69]
let arr2=[1,9,12,15,34,100]
console.log(mergeSortedArrays1(arr1,arr2));