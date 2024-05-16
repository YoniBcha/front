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
        style="background: #0a58a4; color: white; margin-top: 20px"
      >
        <!-- DASHBOARD -->
        <a-menu-item key="1" :style="sidebarMenuItemStyle">
          <router-link to="/dashboard">
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
            <router-link to="/jobless/jobless-list">
              <span>Jobless List</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="2.2">
            <router-link to="/jobless/jobless-registration">
              <span>Jobless Registration</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <!-- ENTERPRISE PAGE -->
        <a-sub-menu key="3">
          <template #title>
            <span>
            <BankOutlined />
              <span> Enterprise Information</span>
            </span>
          </template>
          <a-menu-item key="3.1">
            <router-link to="/enterprise/enterprise-list">
              <span> Enterprise List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3.2">
            <router-link to="/enterprise/enterprise-registration">
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
            <router-link to="/workplace/workplace-list">
              <span> Workplace List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="4.2">
            <router-link to="/workplace/workplace-registration">
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
            <router-link to="/contract/contract-list">
              <span> Contract List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="5.2">
            <router-link to="/contract/make-agreement">
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
            <router-link to="/complain/complain-list">
              <span> Complain List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="6.2">
            <router-link to="/complain/accept-complain">
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
            <router-link to="/Resource/ManualsAndGuidelines">
              <span> Manuals and Guidelines </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="8.2">
            <router-link to="/Resource/ReportFormats">
           <span>Report Formats</span> 
          </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-divider
          style="background: white; margin-left: 12px; margin-right: 40px"
        />
        <!-- LANDING PAGE -->
        <a-sub-menu key="7">
          <template #title>
            <span>
              <TeamOutlined />
              <span>LandingPage</span>
            </span>
          </template>
          <a-menu-item key="7.1">
            <router-link to="/landingPage/our-services">
              <span> Our Services </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="7.2">
            <router-link to="/landingPage/news">
              <span> News Page</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="7.3">
            <router-link to="/landingPage/contact-us">
              <span> Contact Us</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9" :style="sidebarMenuItemStyle">
          <router-link to="/city-registration/register-city">
            <SettingOutlined />
            <span> City Registration </span>
          </router-link>
        </a-menu-item>

        <!-- SETTING PAGE -->
        <a-menu-item key="10" :style="sidebarMenuItemStyle">
          <router-link to="/setting">
            <SettingOutlined />
            <span> Setting </span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <!-- HEADER PART -->
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0"
        class="flex h-full z-10 justify-between items-center"
      >
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
        <div
            class="text-center font-semibold text-lg mx-auto"
          >
            ADDIS ABEBA CITY ADMINISTRATION ENTERPRISE AND INDUSTRY <br />
            DEVELOPMENT OFFICE
          </div>
        <div class="flex relative gap-3 items-center h-full pr-5">
          <div class="flex flex-col justify-center h-full">
            <div class="text-sm">Yonas</div>
            <div class="text-sm text-gray-400">Admin, enterprise manager</div>
          </div>
          <div class="">
            <img
              @click="toggleDropdown"
              class="object-cover w-10 h-10 rounded-full ring ring-gray-300 dark:ring-gray-600"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
              alt=""
            />
            <ul
              v-if="showDropdown"
              class="absolute p-4 w-56 right-8 bg-white border-2 border-gray-200 rounded-md shadow-xl mt-3"
            >
              <li class="flex justify-between text-sm">
                <div class="">Profile</div>
                <div class="text-black pr-3">
                  <LogoutOutlined />
                </div>
              </li>
              <a-divider />
              <li class="flex justify-between text-sm mt-2">
                <div class="">Setting</div>
                <div class="text-black pr-3">
                  <SettingOutlined />
                </div>
              </li>
            </ul>
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

<script>
export default {
  data() {
    return {
      isSignUpMode: false,
      selectedKeys: ["1"],
      collapsed: false,
      layoutPosition: "fixed",
      siderWidth: "260px",
      sidebarMenuItemStyle: {
        height: "48px",
      },
      showDropdown: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    switchToSignUpMode() {
      this.isSignUpMode = true;
    },
    switchToSignInMode() {
      this.isSignUpMode = false;
    },
  },
};
</script>
