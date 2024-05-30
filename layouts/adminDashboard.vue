<template>
  <a-layout style="position: fixed; background: #0a58a4; width: 100%">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="siderWidth"
      style="
        background: #0a58a4;
        overflow-y: visible;
        overflow-x: hidden;
        scrollbar-width: none;
      "
      class="h-[100vh] mr-3"
    >
      <div class="flex justify-center items-center h-[70px] text-white mt-3">
        <img src="~assets/img/addis.png" class="w-16" />
      </div>
      <a-divider
        style="background: white; margin-left: 12px; margin-right: 40px"
      />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="light"
        mode="inline"
        class="mt-5"
        style="background: #0a58a4; color: white; margin-top: 20px; padding-bottom:40px"
      >
        <!-- DASHBOARD -->
        <a-menu-item key="1" :style="sidebarMenuItemStyle">
          <router-link to="/admin/dashboard">
            <AppstoreOutlined />
            <span> Dashboard </span>
          </router-link>
        </a-menu-item>
        <!-- JOBLESS PAGE -->
        <a-sub-menu key="2">
          <template #title>
            <span>
              <TeamOutlined />
              <span> JobLess Information</span>
            </span>
          </template>
          <a-menu-item key="2.1">
            <router-link to="/admin/jobless/jobless-list">
              <span>Jobless List</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2.2">
            <router-link to="/admin/jobless/jobless-registration">
              <span>Jobless Registration</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <!-- ENTERPRISE PAGE -->
        <a-sub-menu key="3">
          <template #title>
            <span>
              <TeamOutlined />
              <span> Enterprise Information</span>
            </span>
          </template>
          <a-menu-item key="3.1">
            <router-link to="/admin/enterprise/enterprise-list">
              <span> Enterprise List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3.2">
            <router-link to="/admin/enterprise/enterprise-registration">
              <span> Enterprise Registration </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- WORKPLACE REGISTRATION -->
        <a-sub-menu key="4">
          <template #title>
            <span>
              <HomeOutlined />
              <span> Workplace Information</span>
            </span>
          </template>
          <a-menu-item key="4.1">
            <router-link to="/admin/workplace/workplace-list">
              <span> Workplace List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4.2">
            <router-link to="/admin/workplace/workplace-registration">
              <span> Workplace Registration </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- CONTRACT DOCUMENT -->
        <a-sub-menu key="5">
          <template #title>
            <span>
              <FileProtectOutlined />
              <span> Contract Document</span>
            </span>
          </template>
          <a-menu-item key="5.1">
            <router-link to="/admin/contract/contract-list">
              <span> Contract List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="5.2">
            <router-link to="/admin/contract/make-agreement">
              <span> Make Agreement </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <!-- COMPLAIN DOCUMENT -->
        <a-sub-menu key="6">
          <template #title>
            <span>
              <FileTextOutlined />
              <span> Complain Document</span>
            </span>
          </template>
          <a-menu-item key="6.1">
            <router-link to="/admin/complain/complain-list">
              <span> Complain List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="6.2">
            <router-link to="/admin/complain/accept-complain">
              <span> Accept Complain </span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <!--Resource page-->
        <a-sub-menu key="8" :style="submenuStyle">
          <template #title>
            <span>
              <FolderOpenOutlined />
              <span> Resourses </span>
            </span>
          </template>
          <a-menu-item key="8.1">
            <router-link to="/admin/Resource/ManualsAndGuidelines">
              <span> Manuals and Guidelines </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="8.2">
            <router-link to="/admin/Resource/ReportFormats">
              <span>Report Formats</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-divider
          style="background: white; margin-left: 12px; margin-right: 40px"
        />

        <a-menu-item key="9" :style="sidebarMenuItemStyle">
          <router-link to="/admin/cityregistration/registercity">
            <PlusSquareOutlined />
            <span> City Registration </span>
          </router-link>
        </a-menu-item>

        <a-sub-menu key="7">
          <template #title>
            <span>
              <TeamOutlined />
              <span>Employee</span>
            </span>
          </template>
          <a-menu-item key="7.1">
            <router-link to="/admin/employee/employee-list">
              <span>Employee</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <!-- LANDING PAGE -->
        <a-sub-menu key="10">
          <template #title>
            <span>
              <TeamOutlined />
              <span>LandingPage</span>
            </span>
          </template>

          <a-menu-item key="10.1">
            <router-link to="/admin/landingpage/our-services">
              <span> Our Services </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="10.2">
            <router-link to="/admin/landingpage/news">
              <span> News Page</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="10.3">
            <router-link to="/admin/landingpage/contact-us">
              <span> Contact Us</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <!-- HEADER PART -->
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0"
        class="flex h-full z-10 justify-between items-center"
      >
        <div class="flex justify-between w-full mr-10">
          <div class="flex items-center h-full px-5 border-b">
            <menu-unfold-outlined
              v-if="collapsed"
              class="text-3xl"
              @click="() => (collapsed = !collapsed)"
            />
            <menu-fold-outlined
              v-else
              class="text-3xl"
              @click="() => (collapsed = !collapsed)"
            />
          </div>

          <div class="font-bold text-3xl text-[#0a58a4]">
            Lideta Subcity Enterprise Registration System
          </div>

          <div
            class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="fixed flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              @click="toggleDropdown"
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="w-8 rounded-[50%]"
                src="~assets/img/pinia.png"
                alt="user photo"
              />
            </button>
            <!-- Dropdown menu -->
            <div
              class="fixed right-4 top-10 z-50 mt-7 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-[#0a58a4]"
              id="user-dropdown"
              v-show="isDropdownVisible"
              ref="dropdownMenu"
            >
              <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white"
                  >Bonnie Green</span
                >
                <span
                  class="block text-sm text-gray-500 truncate dark:text-gray-400"
                  >name@flowbite.com</span
                >
              </div>
              <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                  <nuxt-link
                    to="/profile/userProfile"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
                    >Profile</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/admin/dashboard"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
                    >Dashboard</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="/profile/setting"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
                    >Setting</nuxt-link
                  >
                </li>

                <li>
                  <button
                    @click="logout"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-400 dark:hover:bg-blue-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </a-layout-header>

      <a-layout-content
        style="
          background: white;
          height: 100vh;
          margin: 24px 16px;
          padding: 24px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
        "
        ><router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref } from "vue";

// State to manage dropdown visibility
const isDropdownVisible = ref(false);

// State variables
const isSignUpMode = ref(false);
const selectedKeys = ref(["1"]);
const collapsed = ref(false);
const layoutPosition = ref("fixed");
const siderWidth = ref("260px");
const sidebarMenuItemStyle = ref({
  height: "48px",
});

// Methods
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const switchToSignUpMode = () => {
  isSignUpMode.value = true;
};

const switchToSignInMode = () => {
  isSignUpMode.value = false;
};

import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const logout = async () => {
  try {
    await fetch("http://127.0.0.1:8000/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authStore.token}`,
      },
    });
    authStore.logout();
    router.push("/login-signup");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
</script>
