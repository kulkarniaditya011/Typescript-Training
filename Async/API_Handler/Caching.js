import axios from "axios";
class ApiCache {
    cache = new Map;
    async fetch(url) {
        if (this.cache.has(url)) {
            console.log("Serving from cache");
            return this.cache.get(url);
        }
        const response = await axios.get(url);
        this.cache.set(url, response.data);
        return response.data;
    }
}
const cache = new ApiCache();
async function getUsers() {
    const users = await cache.fetch("https://jsonplaceholder.typicode.com/users");
    console.log(users);
}
getUsers();
getUsers(); //coming from caches
//# sourceMappingURL=Caching.js.map