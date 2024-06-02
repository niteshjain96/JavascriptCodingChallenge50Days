// Validate Email Address 
function validate(email){
    if(email.indexOf('@')===-1){
        return false;
    }
    let parts=email.split('@');
    let localPart=parts[0];
    let domainPart=parts[1];
    if(localPart==="" || domainPart===""){
        return false;
    }
    // check for localpart characters
    const validLocalparts=/^[a-zA-Z0-9._+-]+$/;
    const validdomainparts=/^[a-zA-Z0-9.-]+$/
    if(!validLocalparts.test(localPart)){
        return false;
    }
    if(!validdomainparts.test(domainPart)){
        return false;
    }
    const subdomains=domainPart.split('.');
    if(subdomains.length<2){
        return false;
    }
    if(subdomains[subdomains.length-1].length<2){
        return false;
    }
    return true;
}

let email = "helloworld@xyz.com";
let result = validate(email);
console.log(result);
