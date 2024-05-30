<template>
  <div class="mx-10">
    <!-- header -->
    <div
      class="fixed top-3 right-10 left-10 flex justify-between items-center bg-[#0a58a4] text-white h-12 mt-3 px-2 rounded-sm"
    >
      <div class="flex gap-4 font-bold text-xl">
        <div class="">Logo</div>
        <div class="">Enterprise name</div>
      </div>
      <div class="">
        <ul class="flex font-bold gap-4">
          <nuxt-link to="/enterprise">Home</nuxt-link>
          <nuxt-link to="/enterprisepage/complain">complain</nuxt-link>
          <nuxt-link to="/enterprisepage/contract-update"
            >workplace request</nuxt-link
          >
          <nuxt-link to="/enterprisepage/make-contract">rent payment</nuxt-link>
          <nuxt-link to="/enterprisepage/rent-payment">make contract</nuxt-link>
          <nuxt-link to="/enterprisepage/workplace-request"
            >contract update</nuxt-link
          >
        </ul>
      </div>
    </div>
    <!-- home section  -->
    <div
      class="fixed top-[72px] right-10 left-10 h-[590px] overflow-y-scroll custom-scrollbar"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.hero-background {
  position: relative;
  height: 100vh; /* Adjust the height according to your design */
  background-image: url("assets/img/element.png");
  background-size: cover;
  background-position: center;
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for Firefox */
.custom-scrollbar {
  scrollbar-width: none;
}
</style>
