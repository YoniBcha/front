<template>
  <div class="mx-16">
    <!-- header -->
    <div
      class="fixed top-4 left-16 z-0 overflow-hidden right-16 flex justify-between items-center h-[70px] rounded-md border-t border-gray-200 bg-gradient-to-r from-gray-50 to-[#0a58a4]"
    >
      <!-- logo -->
      <div class="w-20 p-2">
       <a href="/"><img src="~assets/img/addis.png" alt="" /></a> 
      </div>
      <!-- links in nav bar -->
      <div class="flex gap-10 text-white text-lg font-semibold p-5">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/landingpage/news">News</nuxt-link>
        <nuxt-link to="/landingpage/contact-us">Contact Us</nuxt-link>
        <nuxt-link to="/login">Login/signup</nuxt-link>
        <button @click="toggleDropdown">Register</button>
      </div>
    </div>
    <div
      class="fixed right-16 top-10 z-50 mt-7 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#0a58a4]"
      id="user-dropdown"
      v-show="isDropdownVisible"
      ref="dropdownMenu"
    >
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <nuxt-link
            to="/form/jobless"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
            >Register as Jobless</nuxt-link
          >
        </li>
        <li>
          <nuxt-link
            to="/form/enterprise"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
            >Register as Enterprise</nuxt-link
          >
        </li>
      </ul>
    </div>
    <a-modal
      v-model:visible="codeEntryVisible"
      title="Enter 4-Digit Code"
      :footer="null"
    >
      <a-form :form="form" @finish="handleSubmit">
        <a-form-item label="Code" name="code">
          <a-input-number :min="0" :max="9999" style="width: 100%" />
        </a-form-item>
        <a-button html-type="submit" type="primary">Submit</a-button>
      </a-form>
    </a-modal>
    <!-- home section -->
    <div
      class="fixed top-[66px] right-16 left-16 h-[100vh] pb-20 overflow-y-auto custom-scrollbar"
    >
      <div class="">
        <router-view />
      </div>

      <!-- footer -->
      <div
        class="mb-5 bg-[#0a58a4] text-white px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8"
      >
        <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <div class="w-20">
              <img src="~assets/img/addis.png" alt="" />
            </div>
            <div class="mt-6 lg:max-w-sm">
              <p class="text-sm text-gray-400 font-bold">
                Lideta Subcity Enterprise Registration System
              </p>
              <p class="mt-4">
                Team up and Innovate!
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
                >lidetajobcreation@gmail.com</a
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
                Lideta, Addis ababa
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
              Here is our link
              to contact us!
            </p>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between pt-7 pb-10 border-t lg:flex-row"
        >
          <p class="text-sm font-bold">
            © Copyright 2024
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

<script setup>
import { ref } from "vue";
import { notification } from "ant-design-vue";

const isDropdownVisible = ref(false);
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const handleJoblessRegistration = () => {
  // Show code entry section
  codeEntryVisible.value = true;
};

const handleEnterpriseRegistration = () => {
  // Show code entry section
  codeEntryVisible.value = true;
};

const handleSubmit = () => {
  // Handle code submission here
};
</script>

<style lang="less" scoped>
.custom-scrollbar::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}
</style>
