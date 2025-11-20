class Datastorage<T>{
    private data:T[]=[];
    
    additem(item:T){
        this.data.push(item);
    }
    removeitem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getitem(){
        return [...this.data];
    }

    getLastItem():T|null{
        return this.data.length === 0 ? null : this.data[this.data.length-1]!;
    }
}

const storeNum=new Datastorage<number>();
storeNum.additem(5);
storeNum.additem(10);
storeNum.additem(15)
storeNum.additem(20)
console.log(storeNum.getLastItem());
