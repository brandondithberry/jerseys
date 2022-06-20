<template>
  <div class="banner" :style="{ background: bg }">
    <div class="overlay">
      <div class="inner">
        <div class="text">
          <h1>{{ title }}</h1>
          <h4>{{ subtitle }}</h4>
        </div>
        <div class="btns">
          <a class="btn" v-for="btn in button" :key="btn.text" :href="btn.link">{{ btn.text }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle', 'button', 'bg'],
}
</script>

<style lang="postcss" scoped>
.banner {
  @apply flex w-full h-auto place-content-center place-items-center;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  margin: 0 auto;
}
.overlay {
  @apply flex w-full h-full place-content-center items-center justify-start px-6 py-14 lg:p-20 lg:py-48;
  background: #00000033;
}
.inner {
  @apply text-center text-white max-w-2xl m-auto;
}
</style>