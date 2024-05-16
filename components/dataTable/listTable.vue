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
    <template #bodyCell="{ text, column }">
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
        <a-popconfirm
          v-if="data.length"
          title="Sure to delete?"
          @confirm="onDelete(record.key)"
        >
          <a>Delete</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>

<script setup>
const props = defineProps({
  data: Array,
  columns: Array,
});

const state = reactive({
  searchText: "",
  searchedColumn: "",
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
</script>

<style scoped>
.highlight {
  background-color: rgb(255, 192, 105);
  padding: 0px;
}
</style>
