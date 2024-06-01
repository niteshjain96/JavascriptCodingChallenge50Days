// Sort an Array

function sort1(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                // swap
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

function sort2(arr){
    return arr.sort((a,b)=>a-b);
}
console.log(sort2([12,54,12,6745,23,6,15]))