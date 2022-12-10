<template>
    <nav class="
    bg-opacity-70
   bg-zinc-900
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-8
  navbar navbar-expand-lg navbar-light
  ">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div class="space-x-80 collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <a class="
        flex
        px-9
        items-center
        mt-2
        lg:mt-0
        ml-16
      " href="#">
    <img src="../assets/logo.png" style="height: 40px" alt=""
      loading="lazy" />
  </a>
  
  <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li class="nav-item p-2 mr-12 ">
      <router-link to="/" class="nav-link text-white  p-0 text-sm 
       decoration-4  underline-offset-8 underline decoration-orange-400
      hover:decoration-4 hover:underline-offset-8 hover:underline hover:decoration-orange-400
      focus:decoration-4 focus:underline-offset-8 focus:underline focus:decoration-orange-400">Home</router-link>
    </li>
    <li class="nav-item p-2 mr-12">
      <router-link to="/Services" class="nav-link text-white p-0 text-sm 
      hover:underline hover:decoration-orange-400 hover:decoration-4 hover:underline-offset-8 
      focus:decoration-4 focus:underline-offset-8 focus:underline focus:decoration-orange-400">Services</router-link>
    </li>
    <li class="nav-item p-2 mr-12">
      <router-link to="/MedicalBlog" class="nav-link text-white  p-0 text-sm hover:underline hover:decoration-orange-400 hover:decoration-4 hover:underline-offset-8
      focus:decoration-4 focus:underline-offset-8 focus:underline focus:decoration-orange-400">Medical Blog</router-link>
    </li>   
    <li class="nav-item p-2 mr-12">
      <router-link to="/AboutUs" class="nav-link text-white  p-0 text-sm hover:underline hover:decoration-orange-400 hover:decoration-4 hover:underline-offset-8
      focus:decoration-4 focus:underline-offset-8 focus:underline focus:decoration-orange-400">About Us</router-link>
    </li>
    <li class="nav-item p-2">
      <router-link to="/ContactUs" class="nav-link bg-white  py-3 rounded-3xl text-gray-900  text-sm">Contact Us</router-link>
    </li>
  </ul>
  
  </div>
 
  
  </div>
</nav>
</template>