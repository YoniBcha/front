<template>
  <a-layout :style="{ width: layoutWidth }">
    <a-layout-sider
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      :width="siderWidth"
      class="h-[100vh] bg-red-600"
      :style="sidebarStyle"
    >
      <div class="flex justify-center items-center h-[60px] text-white">
        LOGO
      </div>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        class="mt-5"
      >
        <a-menu-item key="1" class="text-xl">
          <pie-chart-outlined />
          <span>Dashboard</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
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
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="text-3xl ml-3"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="text-3xl ml-3"
          @click="() => (collapsed = !collapsed)"
        />
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
  background: "#1518ba"
});
</script>
