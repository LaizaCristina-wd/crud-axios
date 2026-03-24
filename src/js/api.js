  import axios from "axios"
  const API_URL = "http://localhost:8000/api/users";

  export async function getUsers(){
    try {
      const response = await axios.get(API_URL);
      return response.data;
    }  
    catch(error){
      console.error("User not found", error);
      return { users: [] }; 
    }
  }


   export async function createUser(data){
    const response = await fetch(`${API_URL}`,
     {
      method: "POST",
      headers: { "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }

  export async function updateUser(id, user){
    const response = await fetch(`${API_URL}?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type":"application/json"
      },
      body: JSON.stringify(user),
    });
      const data = await response.json();
      if (!response.ok){
        throw new Error(
          data.error || "failed to update user"
        );
      }
      return data;
  }

  export async function deleteUser(id){
    console.log("ID enviado:", id);

    const response = await fetch(`${API_URL}?id=${id}`, {
      method: "DELETE",
    
    });
    await response.json();
  }
  //funções fetch