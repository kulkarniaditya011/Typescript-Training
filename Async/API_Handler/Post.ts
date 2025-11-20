import axios from "axios";

interface user{
    name: string,
    email: string;
}

async function PostUsers(data: user): Promise<user>{
    try{
        const response = await axios.post( "https://jsonplaceholder.typicode.com/users", data);
        return response.data;
    }catch(error){
        throw new Error(`Post failed ${error}`)
    }
    
}

const fetchUser= async (id: number): Promise<user> =>{
   try{
     const response = await axios.get<user>(`https://jsonplaceholder.typicode.com/users/${id}`);
     return response.data;
   }catch(error){
     throw new Error(`Error in getting the user ${error}`)
   }
    
}


PostUsers({name: "Aditya", email: "kulkarniaditya@gmail.com"}).then(console.log).catch(console.error);
fetchUser(11).then(console.log).catch(console.error);