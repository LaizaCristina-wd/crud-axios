export function showEditForm(user){
  const form = document.querySelector("#edit-user-card");

  form.querySelector("#edit-name").value = user.name;
  form.querySelector("#edit-age").value = user.age;
  form.querySelector("#edit-email").value = user.email;

  document.querySelector("#edit-form").dataset.id = user.id;
  form.style.display = "block";
}

export function hideEditForm(){
  document.querySelector("#edit-user-card").style.display = "none";
} //parte visual do form que preenche os campos após clicar em edit