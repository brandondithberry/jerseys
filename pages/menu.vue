<template>
  <main>
    <h1>Our Famous Menu</h1>
    <div v-for="post in posts" :key="post">
      <h2>{{ post.category }}</h2>
    </div>
  </main>
</template>

<script>
export default {}
</script>
