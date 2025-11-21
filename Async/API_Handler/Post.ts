import axios from "axios";

interface user{
    name: string,
    email: string;
}

interface client{
   id: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
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

const fetchUser= async (): Promise<client> =>{
   try{
     const response = await axios.get<client>(`http://localhost:8081/api/get`);
     return response.data;
   }catch(error){
     throw new Error(`Error in getting the user ${error}`)
   }
    
}


//PostUsers({name: "Aditya", email: "kulkarniaditya@gmail.com"}).then(console.log).catch(console.error);
fetchUser().then(console.log).catch(console.error);
