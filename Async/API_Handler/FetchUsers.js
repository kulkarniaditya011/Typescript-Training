import axios from 'axios';
import Datastorage from './Handler.js';
const store = new Datastorage();
async function FetchUsers() {
    try {
        const user = await axios.get('https://jsonplaceholder.typicode.com/users');
        store.additem(user.data);
        return store.getitem();
    }
    catch (error) {
        throw new Error(`Failed to fetch users: ${error.message}`);
    }
}
FetchUsers().then(users => console.log(users)).catch(error => console.error(error));
//# sourceMappingURL=FetchUsers.js.map