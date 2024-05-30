<template>

  <div class="grid grid-cols-12 h-[100vh]">
    <div class="hero-background flex flex-col justify-center col-span-6 bg-[url('assets/img/dot.svg')] bg-no-repeat bg-center bg-cover">
      <div class="font-bold text-gray-500 mb-5 text-3xl text-italic">
        Welcome To . . .
      </div>
      <div class="text-5xl text-[#0a58a4] font-bold pb-5">
        <p class="mb-2">Lideta Subcity Enterprise</p>
        <p>Registration System</p>
      </div>
      <div class="text-xl font-semibold pb-3">Streamline your enterprise interactions with ease!</div>
    </div>
    <div class="flex justify-center items-center col-span-6">
      <img src="~assets/illus/enterprise.png" width="550"/>
    </div>
  </div>

  <!-- our service -->
  <div class="grid grid-cols-12 mt-10 mb-10 w-full">
    <div
      class="col-span-12 flex justify-center text-[#0a58a4] text-4xl font-semibold mb-10"
    >
      Our Services
    </div>
    <div class="h-[400px] col-span-12">
      <swiperOurServices />
    </div>
  </div>
</template>


