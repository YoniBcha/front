<template>
  <a-layout :style="{ width: layoutWidth }">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="siderWidth"
      :style="sidebarStyle"
      class="h-[100vh]"
    >
      <div class="flex justify-center items-center h-[60px] text-white mt-3">
        <img src="~assets/img/addis.png" class="w-28" />
      </div>
      <a-divider
        style="background: white; margin-left: 12px; margin-right: 40px"
      />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        class="mt-5"
        style="background: #1518ba; margin-top: 20px"
      >
        <a-menu-item key="1" :style="sidebarMenuItemStyle">
          <router-link to="/">
            <AppstoreOutlined />
            <span> Dashboard </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2" :style="sidebarMenuItemStyle">
          <router-link to="/jobless_registration">
            <UserAddOutlined />
            <span> Jobless Registration </span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="3" :style="submenuStyle">
          <template #title>
            <span>
              <TeamOutlined />
              <span> Enterprise Registration </span>
            </span>
          </template>
          <a-menu-item key="3.1">
            <router-link to="/enterprise_registration">
              <span> Enterprise List </span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3.2">Bill</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="4" :style="sidebarMenuItemStyle">
          <router-link to="/workplace_registration">
            <HomeOutlined />
            <span> Workplace Registration </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="5" :style="sidebarMenuItemStyle">
          <router-link to="/contract_document">
            <ReconciliationOutlined />
            <span> Contract Document </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="6" :style="sidebarMenuItemStyle">
          <router-link to="/complain_document">
            <CommentOutlined />
            <span> Complain Document </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="7" :style="sidebarMenuItemStyle">
          <router-link to="/help">
            <PlusCircleOutlined />
            <span> Help </span>
          </router-link>
        </a-menu-item>
        <a-divider
          style="background: white; margin-left: 12px; margin-right: 40px"
        />
        <a-menu-item key="8" :style="sidebarMenuItemStyle">
          <router-link to="/contact_us">
            <ContactsOutlined />
            <span> Contact Us </span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="9" :style="sidebarMenuItemStyle">
          <router-link to="/setting">
            <SettingOutlined />
            <span> Setting </span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0"
        class="flex h-full justify-between items-center"
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
          <div
            class="flex justify-center h-full items-center text-center font-semibold text-lg ml-7 w-[700px]"
          >
            ADDIS ABEBA CITY ADMINISTRATION ENTERPRISE AND INDUSTRY <br />
            DEVELOPMENT OFFICE
          </div>
        </div>
        <div class="flex relative gap-3 items-center h-full pr-5">
          <div class="flex flex-col justify-center h-full">
            <div class="text-xl">Yonas</div>
            <div class="text-sm text-gray-400">Admin, enterprise manager</div>
          </div>
          <div class="">
            <img
              @click="toggleDropdown"
              class="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600"
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
      <a-layout-content :style="contentStyle"
        ><router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, reactive } from "vue";

const selectedKeys = ref(["1"]);
const collapsed = ref(false);
const layoutWidth = "100%";
const siderWidth = "260px";

const contentStyle = reactive({
  margin: "24px 16px",
  padding: "24px",
  background: "#fff",
  minHeight: "280px",
});
const sidebarStyle = reactive({
  background: "#1518ba",
});

const sidebarMenuItemStyle = reactive({
  height: "48px",
});

const submenuStyle = reactive({
  background: "#1518ba",
});

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>
