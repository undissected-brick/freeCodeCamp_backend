function isPrime (num) {
    return num > 1 && num % 1 === 0 ? Array.from({length:Math.ceil(Math.min(Math.sqrt(num),num-1)-1)},(_,i)=>i+2).every(x=>num%x!==0) : false;
};
