<template>
  <main>
    <h1>Our Famous Menu</h1>
    <div class="grid grid-cols-3 gap-5">
      <div v-for="(post, index) in posts" :key="index">
        <h2>{{ post.category }}</h2>
        <div v-for="(item, index) in post.item" :key="index">
          <h4>{{ item.name }} - {{ item.price }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('menu').fetch()

    return {
      posts,
    }
  },
}
</script>
