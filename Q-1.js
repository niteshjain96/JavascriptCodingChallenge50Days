// Reverse a String

let str='hello'
console.log(reverse4(str))
function reverse(str){
    let res=''
    for(let i=str.length-1;i>=0;i--){
        res +=str[i];
    }
    return res;
}

function reverse1(str){
    return Array.from(str).reverse().join('');
}

function reverse2(str){
    return str.split('').reverse().join("");
}

function reverse3(str){
    return str.split().reduce((pv,cv)=>cv+pv,"");
}

function reverse4(str){
    return Array.from(str).reduce((pv,cv)=>cv+pv,"")
}