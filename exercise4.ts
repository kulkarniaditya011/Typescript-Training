class DataStorage<T>{
    private data: T[]=[];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data = this.data.filter(i => i !== item);
    }

    getItems():T[]{
        return [...this.data];
    }
}

// let number= new DataStorage<number>();
// number.addItem(5);
// number.addItem(10);
// number.addItem(15);
// console.log(number.getItems());
// number.removeItem(10);
// console.log(number.getItems());


interface hasLength{
    length: number;
}

function logWithLength<T extends hasLength>(arg: T): void{
    console.log(`Length: ${arg.length}`);
    
}
logWithLength("Hello World");;
logWithLength([1,2,3,4,5]);