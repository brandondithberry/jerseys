<template>
  <main>
    <Banner
      :bg="'url(\'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress\')'"
      :title="title"
    />
    <TextBlock
      :text="'At Jersey’s Subs & Pizza, we exclusively use Boars Head brand meats and cheeses, the finest in the delicatessen industry. We insist on only the freshest products which is why we will always make your order in front of you to your specifications. Nothing is ever pre-sliced or frozen. Enjoy our salads, sides, pizza & specialty pies, desserts, and our famous subs.'"
    />
    <ImageGrid :img1="'/img/outside.jpg'" :img2="'/img/inside.jpg'" :img3="'/img/table.jpg'" />
    <section class="p-14 text-center max-w-2xl mx-auto my-4 bg-black text-white">
      <div v-for="(post, index) in posts" :key="index">
        <div v-if="post.details">
          <h2>{{ post.category }}</h2>
          <span v-html="$md.render(post.details)"></span>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import * as SITE_INFO from '~/content/site/info.json'
import Banner from '~/components/modules/Banner.vue'
import TextBlock from '~/components/modules/TextBlock.vue'
import ImageGrid from '~/components/modules/ImageGrid.vue'

export default {
  data() {
    return {
      title: SITE_INFO.sitedescription,
    }
  },
  components: { Banner, TextBlock, ImageGrid },
  async asyncData({ $content }) {
    const posts = await $content('menu').fetch()

    return {
      posts,
    }
  },
}
</script>