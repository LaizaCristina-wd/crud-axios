  import { getUsers } from "./js/api.js";
  import { hideEditForm } from "./js/formUI.js";
  import { handleEdit, handleUpdate, cleanEditForm } from "./js/updateUsers.js";
  import { handleCreate, addUserCard } from "./js/create.js";
  import { handleDelete } from "./js/delete.js";  

  
  function init() {
    setupEventListeners();
    loadUsers();
  }
  export async function loadUsers(){
    try {
     const containerUser = document.getElementById("usersList");
      containerUser.innerHTML = "";
      const data = await getUsers();
      console.log(data);
      data.users.forEach((user, id)=>{
        addUserCard(user, id);
   });
    } catch(error){
      console.error("erro ao carregar usuários", error);
    }
    }

  //events
  function setupEventListeners(){

    const createForm = document.getElementById("userForm");
    createForm.addEventListener("submit", handleCreate);
    
    const usersContainer = document.getElementById("usersList");

    usersContainer.addEventListener("click", (event) => {
    handleDelete(event);
    handleEdit(event);
    });

    const editForm = document.getElementById("edit-form");

    editForm.addEventListener("submit", async (event)=>{

      event.preventDefault();

      await handleUpdate();

    });
    const btnCancel = document.getElementById("btnCancel");

    btnCancel.addEventListener("click", ()=>{

      hideEditForm();

      cleanEditForm();

    });
 
    };

  document.addEventListener("DOMContentLoaded", init);