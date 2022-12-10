<template>

<div class="h-screen" style="clip-path: polygon(0 65%, 0 42%, 0 0, 100% 0, 100% 73%, 96% 82%, 92% 88%, 88% 92%, 84% 95%, 82% 96%, 77% 97%, 70% 95.5%);">

<div id="carouselExampleSlidesOnly" class="carousel slide absolute" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full ">
      <img
        src="../assets/4.jpg"
        class="block w-full -translate-y-36"
        alt="doctor"
      />

    </div>

    <div class="carousel-item relative float-left w-full pb-36">
      <img
        src="../assets/3.jpg"
        class="block w-full -translate-y-2"
        alt="hospital"
      />

    </div>
    
    <div class="carousel-item relative float-left w-full pb-36">
      <img
        src="../assets/2.jpg"
        class="block w-full -translate-y-2"
        alt="health"
      />

    </div>
  </div>
</div>

<carousel-sign-up-layer/>

<div class="bg-opacity-70 bg-zinc-900 relative w-full h-3/5">
  </div>


</div>
</template>

<script>
import 'tw-elements';

import CarouselSignUpLayer from './CarouselSignUpLayer.vue';

export default {
  props: {
    msg: String
  },
  components: {
    CarouselSignUpLayer
  }
}
</script>





