import axios from "axios";
async function PostUsers(data) {
    try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/users", data);
        return response.data;
    }
    catch (error) {
        throw new Error(`Post failed ${error}`);
    }
}
const fetchUser = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
    }
    catch (error) {
        throw new Error(`Error in getting the user ${error}`);
    }
};
PostUsers({ name: "Aditya", email: "kulkarniaditya@gmail.com" }).then(console.log).catch(console.error);
fetchUser(11).then(console.log).catch(console.error);
//# sourceMappingURL=Post.js.map