<template>
  <div class="relative">

    <the-navbar/>

    <div class=" grid gap-2 space-y-4  bg-opacity-70 bg-zinc-900 pt-24 pl-28">
      <p class=" text-white w-1/2 ">It Is A Long Established Fact That A Reader Will Be Distracted 
        By The Readable Content Of A Page When Looking At Its 
        Layout. The Point Of Using Lorem Ipsum Is That It Has A More Or-Less Normal Distribution Of Letters, As Opposed To Using 
        'Content Here, Content Here', Making It Look Like Readable</p>
        <div class="flex flex-row space-x-4">
          <button class="px-6 py-2 bg-emerald-600 text-white font-medium text-md rounded-2xl capitalize">new doctor</button>
          <button class="px-6 py-2 bg-emerald-600 text-white font-medium text-md rounded-2xl capitalize">new user</button>
        </div>
      </div>

  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue';
export default {
  components: {
    TheNavbar
  }
}
</script>

