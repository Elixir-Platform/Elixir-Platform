<template>
  <div class="home">
    <HomeCarousel/>
    <HomeCardService/>
  </div>
</template>

<script>
import HomeCarousel from '@/components/HomeCarousel.vue'
import HomeCardService from '@/components/HomeCardService.vue'

export default {
  name: 'HomeView',
  components: {
    HomeCarousel,
    HomeCardService
  }
}
</script>
