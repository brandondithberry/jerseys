<template>
  <main>
    <Banner
      :bg="'url(\'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress\')'"
      :title="title"
    />
  </main>
</template>

<script>
import * as SITE_INFO from '~/content/site/info.json'
import Banner from '~/components/modules/Banner.vue'

export default {
  data() {
    return {
      title: SITE_INFO.sitedescription,
    }
  },
  components: { Banner },
}
</script>