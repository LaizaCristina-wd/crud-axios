  import axios from "https://cdn.jsdelivr.net/npm/axios@1.6.7/+esm";
  const API_URL = "http://localhost:8000/api/users";

  export async function getUsers(){
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    }  
    catch(error){
      console.error("User not found", error);
      return { users: [] }; 
    }
  }

   export async function createUser(data){
    try {
      const response = await axios.post(API_URL, data, {
      headers: { "Content-Type":"application/json"
      }
    });
    return response.data;
  }
  catch(error){
    console.error("Erro ao criar usuário", error);
    return null
  }
  };

  export async function updateParseUser(id,fields){
    if (fields.age !== undefined){
      fields.age = Number(fields.age);
    }
    try{
    const response = await axios.patch(`${API_URL}?id=${id}`, fields, {
  
      headers: { 
        "Content-Type":"application/json"
      }
    });
      return response.data;
   }
   catch(error){
    const message =
    error.response?.data?.error ||
    "Failed to patch user"
    
    throw new Error(message)
  }
  };

  export async function updateUser(id, user){
    try{
    const response = await axios.put(`${API_URL}?id=${id}`, user,{

      headers: { "Content-Type":"application/json"
      },
    });
    return response.data;
    }
       catch(error){
    const message =
    error.response?.data?.error ||
    "Failed to patch user"
    
    throw new Error(message)
  }
  }

  export async function deleteUser(id){
    console.log("ID enviado:", id);
    try{
    const response = await axios.delete(`${API_URL}?id=${id}`);
    return response.data;
    }
    catch(error){
      const message =
      error.response?.data?.error ||
      "Erro ao deletar usuário";

    throw new Error(message);
    }
  }
  //funções fetch