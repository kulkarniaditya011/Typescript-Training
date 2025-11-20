function swap<T,U>(a:T, b:T): [T,T]{
    let c:T=a;
    a=b;
    b=c;
    return [a,b];
}

console.log(swap<number, number>(5,4));
