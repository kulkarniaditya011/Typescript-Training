import axios from "axios";
async function getUsersWithAxios() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    if (!data) {
        throw new Error('Network response was not ok');
    }
    return data;
}
getUsersWithAxios().then(users => console.log(users)).catch(error => console.error(error));
//# sourceMappingURL=FetchAxios.js.map