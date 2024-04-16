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
      <div class="flex justify-center items-center h-[60px] text-white">
        LOGO
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        class="mt-5"
        :style="sidebarMenuStyle"
      >
        <a-menu-item key="1" :style="sidebarMenuItemStyle">
          <pie-chart-outlined style="font-size: 20px" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="2" :style="sidebarMenuItemStyle">
          <desktop-outlined style="font-size: 20px" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1" :style="submenuStyle">
          <template #title>
            <span>
              <user-outlined style="font-size: 20px" />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0"
        class="flex justify-between items-center"
      >
        <div class="px-5">
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
        <div class="flex gap-3 items-center h-full pr-5">
          <div class="flex flex-col justify-center h-full">
            <div class="text-xl">Yonas</div>
            <div class="text-sm text-gray-400">software developer</div>
          </div>
          <div class="">
            <img
              class="object-cover w-12 h-12 rounded-full ring ring-gray-300 dark:ring-gray-600"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
              alt=""
            />
          </div>
        </div>
      </a-layout-header>
      <a-layout-content :style="contentStyle"> Content </a-layout-content>
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
const sidebarMenuStyle = reactive({
  background: "#1518ba",
});
const sidebarMenuItemStyle = reactive({
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  height: "50px",
});

const submenuStyle = reactive({
  fontSize: "20px",
  background: "#1518ba",
});
</script>
