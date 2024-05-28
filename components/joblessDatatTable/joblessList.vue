<template>
  <a-table
    bordered
    :scroll="{ x: 1300, y: 1000 }"
    :data-source="data"
    :columns="columns"
    @row-click="handleRowClick"
  >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span style="color: #1890ff">{{ column.title }}</span>
      </template>
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <a-input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="
            (e) => setSelectedKeys(e.target.value ? [e.target.value] : [])
          "
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <a-button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </a-button>
        <a-button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters)"
        >
          Reset
        </a-button>
      </div>
    </template>
    <template #customFilterIcon="{ filtered }">
      <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
    </template>
    <template #bodyCell="{ text, column, record }">
      <span
        v-if="state.searchText && state.searchedColumn === column.dataIndex"
      >
        <template
          v-for="(fragment, i) in text
            .toString()
            .split(
              new RegExp(
                `(?<=${state.searchText})|(?=${state.searchText})`,
                'i'
              )
            )"
        >
          <mark
            v-if="fragment.toLowerCase() === state.searchText.toLowerCase()"
            :key="i"
            class="highlight"
          >
            {{ fragment }}
          </mark>
          <template v-else>{{ fragment }}</template>
        </template>
      </span>
      <template v-else-if="column.dataIndex === 'operation'">
        <a @click="showDeleteConfirm(record)">Show</a>
      </template>
    </template>
  </a-table>

  <a-modal
    v-model:visible="state.modalVisible"
    title="Jobless Data Or Information"
    ok-text="Yes"
    width="1000px"
    cancel-text="No"
    @ok="confirmDelete"
    @cancel="cancelDelete"
  >
    <div class="text-sm text-gray-400">
      <!-- status button -->
      <div class="flex justify-end items-center gap-2">
        Status:<button class="bg-[#0a58a4] px-4 py-1 text-white rounded">
          {{ state.recordToShow?.member }}
        </button>
      </div>
      <!-- photo and fullname -->
      <div class="grid grid-cols-3 mt-5">
        <div class="flex gap-5">
          Jobless Photo:
          <div class="h-44 w-52">
            {{ state.recordToShow?.member }}
          </div>
        </div>
        <div class="grid grid-row-3 p-5">
          <div class="">
            Full Name:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Grandfather Name:
            <span class="text-gray-600">{{ state.recordToShow?.grandfather_name }}</span>
          </div>
          <div class="">
            Username:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
        </div>
        <div class="grid grid-row-3 p-5">
          <div class="flex gap-8">
            <div class="">
              Age:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
            <div class="">
              Gender:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="">
              City:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
            <div class="">
              Subcity:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
          </div>
          <div class="flex gap-5">
            <div class="">
              Woreda:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
            <div class="">
              Kebele:
              <span class="text-gray-600">{{
                state.recordToShow?.name
              }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- identification card and email phone number -->
      <div class="grid grid-cols-3 mt-5">
        <div class="grid grid-row-3 p-5">
          <div class="">
            Phone Number:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Email:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Profession:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
        </div>
        <div class="grid grid-row-3 p-5">
          <div class="">
            House Number:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Family Size:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Living Status:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
        </div>
        <div class="gap-5">
          <div class="">Jobless Identification Card:</div>
          <div class="h-48">
            {{ state.recordToShow?.member }}
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 mt-10 gap-3">
        <div class="">
          <div class="">Identification Card:</div>
          <div class="h-48">
            {{ state.recordToShow?.member }}
          </div>
        </div>
        <div class="grid grid-row-3">
          <div class="">training certificate:</div>
          <div class="h-48">
            {{ state.recordToShow?.member }}
          </div>
        </div>
        <div class="grid grid-row-3 p-5">
          <div class="">
            Birth Place:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Family Status:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
          <div class="">
            Disability Status:
            <span class="text-gray-600">{{ state.recordToShow?.name }}</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-10 gap-3">
        <div class="">
          <div class="">Identification Card:</div>
          <div class="h-48">
            {{ state.recordToShow?.member }}
          </div>
        </div>
        <div class="grid grid-row-3">
          <div class="">Priority Evidence:</div>
          <div class="h-48">
            {{ state.recordToShow?.member }}
          </div>
        </div>
      </div>
    </div>
  </a-modal>
</template>

<script setup>
const props = defineProps({
  data: Array,
  columns: Array,
});
const emits = defineEmits(["row-clicked"]);

const state = reactive({
  searchText: "",
  searchedColumn: "",
  modalVisible: false,
  recordToShow: null,
});

const searchInput = ref();

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};

const handleReset = (clearFilters) => {
  clearFilters({
    confirm: true,
  });
  state.searchText = "";
};

const handleRowClick = () => {
  emits("row-clicked");
};

const showDeleteConfirm = (record) => {
  state.recordToShow = record;
  state.modalVisible = true;
};
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
