// Fizz Buzz
// if number % 3 ==0 Fizz
// if number % 5 ==0 Buzz
// if number divisible by both 3 & 5 then FizzBuzz

function fizzbuzz(n){
    for(let i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log(`${i} is FizzBuzz`);
        }
        else if(i%3==0){
            console.log(`${i} is Fizz`);
        }
        else if(i%5==0){
            console.log(`${i} is Buzz`);
        }
    }
}
fizzbuzz(20)