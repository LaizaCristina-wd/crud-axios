<template>

<header class="bg-dark text-white text-center p-3">
  <h2>PHP/JS CRUD Project</h2>
</header>

<main class="container mt-4">

<section class="card mb-4">

<div class="card-body">

<h3>Users</h3>

<div class="row g-3">

<div
  v-for="user in users"
  :key="user.id"
  class="col-md-4"
>

<div class="card h-100">

<div class="card-body">

<p><strong>Name:</strong> {{ user.name }}</p>

<p><strong>Age:</strong> {{ user.age }}</p>

<p><strong>Email:</strong> {{ user.email }}</p>

</div>

</div>

</div>

</div>

<p v-if="users.length === 0" class="text-muted">
No users found.
</p>

</div>

</section>

</main>

</template>

<script>
import axios from "axios"

export default {
  data(){
    return {
      users: []
    }
  },
  async mounted(){

  try{

    const response = await axios.get(
      "http://localhost:8000/api/users"
    )

    this.users = response.data.users

  }

  catch(error){

    console.error("erro ao carregar users", error)

  }

}
}
</script>