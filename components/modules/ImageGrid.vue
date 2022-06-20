<template>
  <section class="image-grid">
    <div class="grid grid-cols-3 gap-5">
      <div class="image">
        <img :src="img1" />
      </div>
      <div class="image">
        <img :src="img2" />
      </div>
      <div class="image">
        <img :src="img3" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['img1', 'img2', 'img3'],
}
</script>