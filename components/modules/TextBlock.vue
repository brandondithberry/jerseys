<template>
  <section class="text-block">
    <h4>{{ text }}</h4>
  </section>
</template>

<script>
export default {
  props: ['text'],
}
</script>

<style lang="postcss" scoped>
.text-block {
  @apply max-w-3xl text-center p-16 m-auto;
}
</style>