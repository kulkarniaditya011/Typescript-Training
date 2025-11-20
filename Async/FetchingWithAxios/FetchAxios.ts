import axios from "axios";
type User={
    id: number;
    name: string;
    email: string;
}


async function getUsersWithAxios(): Promise<User[]> {
    const {data} = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
    if(!data){
        throw new Error('Network response was not ok');
    }
    return data;
}

getUsersWithAxios().then(users => console.log(users)
).catch(error => console.error(error));