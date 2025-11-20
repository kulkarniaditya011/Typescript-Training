function identity<T>(arg: T): T{
    return arg;
}
console.log(identity<string>("Hello Generics"));
console.log(identity<number>(42));
