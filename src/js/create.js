import { createUser} from "./api.js";

//criar usuário

 export async function handleCreate(event){
  event.preventDefault();
 const name = document.getElementById("name").value;
 const age = document.getElementById("age").value;
 const email = document.getElementById("email").value;

 const newUser = { name, age, email };
  try {
     const createdUser = await createUser(newUser);
    addUserCard(createdUser);
  } catch (error) {
    console.error("Erro ao criar usuário", error);
  }
}
//parte visual
export function addUserCard(user) {
  const container = document.getElementById("usersList");
  const template = document.getElementById("user-template");

  const clone = template.cloneNode(true);

  clone.style.display = "block";
  clone.removeAttribute("id");
  clone.querySelector(".user-name").textContent = `${user.name}`;
  clone.querySelector(".user-age").textContent = `${user.age}`;
  clone.querySelector(".user-email").textContent = `${user.email}`;


  clone.querySelector(".edit-btn").dataset.id = user.id;
  clone.querySelector(".delete-btn").dataset.id = user.id;

  container.appendChild(clone);
}