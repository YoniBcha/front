<template>
  <div class="mx-16">
    <!-- header -->
    <div
      class="fixed top-10 left-16 z-0 overflow-hidden right-16 flex justify-between items-center h-16 rounded-md shadow-lg border-t border-gray-200 bg-gradient-to-r from-white to-gray-50"
    >
      <!-- logo -->
      <div class="w-28 p-2">
        <img src="~assets/img/addis.png" alt="" />
      </div>
      <!-- links in nav bar -->
      <div class="flex gap-10 text-lg font-semibold p-5">
        <div>Home</div>
        <div>Login-signup</div>
        <div>About</div>
        <div>Contact Us</div>
      </div>
    </div>

    <!-- home section -->
    <div
      class="fixed top-[115px] right-16 left-16 h-[600px] overflow-y-scroll custom-scrollbar"
    >
      <div class="grid grid-cols-12">
        <div class="flex flex-col justify-center col-span-6">
          <div class="font-bold text-gray-500 mb-5 text-3xl text-italic">
            "Well Came To . . ."
          </div>
          <div class="text-5xl text-[#0a58a4] font-bold pb-5">
            <p class="mb-2">Ldeta Subcity Enterprise</p>
            <p>Management System</p>
          </div>
          <div class="text-3xl font-semibold pb-3">for you and for us</div>
          <div class="text-sm text-gray-500">
            Our enterprise management system will <br />facilitate the work
            speed and the customer <br />
            and employee satisfaction.
          </div>
        </div>
        <div class="col-span-6 flex items-center justify-center">
          <img src="~assets/illus/enterprise.png" alt="" />
        </div>
      </div>
      <!-- our service -->
      <div class="grid grid-cols-12 mt-20 w-[1238px]">
        <div
          class="col-span-12 flex justify-center text-[#0a58a4] text-3xl mb-10"
        >
          Our serviece
        </div>
        <div class="col-span-12 mb-5">
          <swiperGrid />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Hide scrollbar for Chrome, Safari, and Opera */
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for Firefox */
.custom-scrollbar {
  scrollbar-width: none;
}
</style>
