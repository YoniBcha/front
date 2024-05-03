<template>
  <div class="mx-16">
    <!-- header -->
    <div
      class="fixed top-10 left-16 z-0 overflow-hidden right-16 flex justify-between items-center h-16 rounded-md shadow-lg border-t border-gray-200 bg-gradient-to-r from-white to-gray-50"
    >
      <!-- logo -->
      <div class="w-20 p-2">
        <img src="~assets/img/addis.png" alt="" />
      </div>
      <!-- links in nav bar -->
      <div class="flex gap-10 text-lg font-semibold p-5">
        <div>Home</div>
        <div>News</div>
        <div>Login-signup</div>
        <div>Contact Us</div>
      </div>
    </div>

    <!-- home section -->
    <div
      class="fixed top-[115px] right-16 left-16 h-[100vh] pb-20 overflow-y-scroll custom-scrollbar"
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
      <div class="grid grid-cols-12 mt-20 mb-10 w-[1238px]">
        <div
          class="col-span-12 flex justify-center text-[#0a58a4] text-4xl mb-12"
        >
          Our Serviece
        </div>
        <div class="col-span-12 mb-5 h-[400px]">
          <swiperGrid />
        </div>
      </div>

      <div
        class="mb-20 bg-[#0a58a4] text-white px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <div class="w-20">
              <img src="~assets/img/addis.png" alt="" />
            </div>
            <div class="mt-6 lg:max-w-sm">
              <p class="text-sm text-gray-400 font-bold">
                Ldeta Subcity Enterprise Management System.
              </p>
              <p class="mt-4">
                Make our workplace enviroment a better place for you and for us
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide">Contacts</p>
            <div class="flex">
              <p class="mr-1 font-semibold text-gray-300">Phone:</p>
              <a
                href="tel:0945604972"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 text-gray-400 hover:text-deep-purple-800"
                >(+251)945604972</a
              >
            </div>
            <div class="flex">
              <p class="mr-1 font-semibold text-gray-300">Email:</p>
              <a
                href="mailto:yonasmillion29@gmail.com"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 text-gray-400 hover:text-deep-purple-800"
                >yonasmillion29@gmail.com</a
              >
            </div>
            <div class="flex">
              <p class="mr-1 font-semibold text-gray-300">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                class="transition-colors duration-300 text-gray-400 hover:text-deep-purple-800"
              >
                312 Lovely Street, NY
              </a>
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-wide">Social</span>
            <div class="flex items-center mt-1 space-x-3">
              <a
                href="/"
                class="text-gray-500 hover:text-white transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-white"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
              <a
                href="/"
                class="text-gray-500 transition-colors duration-300 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
            <p class="mt-4 text-sm">
              if you want to get us with other social media here is our link
              contact us!
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between pt-7 pb-10 border-t lg:flex-row"
        >
          <p class="text-sm font-bold">
            © Copyright 2020 Ldeta subcity enterprise management system Inc. All
            rights reserved.
          </p>
          <ul
            class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row"
          >
            <li>
              <a
                href="/"
                class="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >F.A.Q</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a
                href="/"
                class="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >Terms &amp; Conditions</a
              >
            </li>
          </ul>
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
