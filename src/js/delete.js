import { deleteUser } from "./api.js";
//deletar usuário

export async function handleDelete(event){
  const button = event.target.closest(".delete-btn");
    if(!button) return;
  const id = button.dataset.id;


  console.log("id capturado:", id);
  const confirmou = confirm("Deletar usuário?");
  if(!confirmou) return;
  try {
    await deleteUser(id); 
   
    const card = button.closest(".user-card");
    if(card){
      card.remove();
    }

  } catch(error){
    console.error("Erro ao deletar:", error);
  }
}