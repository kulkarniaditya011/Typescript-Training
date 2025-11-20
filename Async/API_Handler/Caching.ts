import axios from "axios";

class ApiCache<T>{
    private cache =new Map<String, T>;

    async fetch(url: string): Promise<T>{
        if(this.cache.has(url)){
            console.log("Serving from cache");
            return this.cache.get(url)!;
        }
        
         const response = await axios.get<T>(url);
         this.cache.set(url,response.data)
        return response.data;
    }
}
const cache= new ApiCache<any>();
async function getUsers(){
    const users= await cache.fetch("https://jsonplaceholder.typicode.com/users")
    console.log(users);
}
getUsers();
getUsers(); //coming from caches