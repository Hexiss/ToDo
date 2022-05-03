<template>
  <body>
    <header>
      <h1 class="name">Todo App</h1>
    </header>
    <div class="text">
      <text> Projet de réalisation de todos avec pinia et index db</text>
    </div>
    <div class="text d-grid gap-2 col-2 mx-auto">
      <button
        type="button"
        @click="this.$router.push('/todo')"
        class="btn btn-success"
      >
        Commencer
      </button>
    </div>
  </body>
</template>

<script>
</script>

<style>
.name {
  text-align: center;
  margin-top: 100px;
}

.text {
  text-align: center;
  margin-top: 50px;
  font-size: 200%;
}
</style>
