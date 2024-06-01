// palindrome

function palindrome(str){
    let revstr='';
    for(let i=str.length-1;i>=0;i--){
        revstr += str[i];
    }
    return revstr===str;
}

function palindrome2(str){
    let revstr=Array.from(str).reverse().join('');
    return revstr===str;
}

function palindrome3(str){
    let revstr=str.split("").reverse().join("");
    return revstr===str;
}

function palindrome4(str){
    let revstr=Array.from(str).reduce((pv,cv)=>cv+pv,"");
    return revstr===str;
}

function palindrome5(str){
    let revstr=str.split("").reduce((pv,cv)=>cv+pv,"");
    return revstr===str;
}

let str1="naman";
let str2="nitesh";

if(palindrome5(str1)){
    console.log("palindrome");
}
else{
    console.log("Not palindrome");
}