import { updateParseUser, updateUser} from "./api.js";
import { hideEditForm, showEditForm } from "./formUI.js";
import { loadUsers } from "../app.js";
//botão de edit do card
let editUserId = null;
export function handleEdit(event){

  const editButton = event.target.closest(".edit-btn");

 if(!editButton) return;

 editUserId = editButton.dataset.id;

 console.log("usuario sendo editado:", editUserId);

 const card = editButton.closest(".user-card");

 const user = {

  name: card.querySelector(".user-name").textContent,
  age: card.querySelector(".user-age").textContent,
  email: card.querySelector(".user-email").textContent

 };

 showEditForm(user);

}
//update e cancel esconder o form
export async function handleUpdate(){
const user = {
  name: document.getElementById("edit-name").value || undefined,
  age: document.getElementById("edit-age").value || undefined,
  email: document.getElementById("edit-email").value || undefined
};
const allInput = Object.values(user).every(valor=>valor !== undefined);
if(allInput){
  await updateUser(editUserId, user);

} else{
await updateParseUser(editUserId, user);
}
hideEditForm();
cleanEditForm();
await loadUsers();
}

export function cleanEditForm(){

 document.getElementById("edit-name").value = "";
 document.getElementById("edit-age").value = "";
 document.getElementById("edit-email").value = "";

 editUserId = null;

}