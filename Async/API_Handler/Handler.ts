export default class Datastorage<T>{
    private data:T[]=[];
    
    additem(item: T | T[]) {
        if (Array.isArray(item)) {
            this.data.push(...item);
        } else {
            this.data.push(item);
        }
    }
    removeitem(item:T){
        this.data.splice(this.data.indexOf(item),1);
    }
    getitem(){
        return [...this.data];
    }
}

