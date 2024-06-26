<template>
  <!-- JOBLESS DATATABLE -->
  <div class="mb-24">
    <a-table
      bordered
      :data-source="filteredData"
      :columns="columns"
      :scroll="{ x: 1300, y: 1000 }"
      :loading="loading"
    >
      <!-- Header cell template -->
      <template #headerCell="{ column }">
        <span v-if="column.key === 'name'" style="color: #1890ff">{{
          column.title
        }}</span>
      </template>

      <!-- Custom filter dropdown template -->
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

      <!-- Custom filter icon template -->
      <template #customFilterIcon="{ filtered }">
        <search-outlined :style="{ color: filtered ? '#108ee9' : undefined }" />
      </template>

      <!-- Body cell template -->
      <template #bodyCell="{ text, column, record }">
        <template
          v-if="
            column.dataIndex === 'name' ||
            column.dataIndex === 'workplacename' ||
            column.dataIndex === 'sex' ||
            column.dataIndex === 'age' ||
            column.dataIndex === 'phonenumber' ||
            column.dataIndex === 'address' ||
            column.dataIndex === 'email' ||
            column.dataIndex === 'workplacecity' ||
            column.dataIndex === 'workplacetype' ||
            column.dataIndex === 'workplacesubcity' ||
            column.dataIndex === 'workplacesize'
          "
        >
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key][column.dataIndex]"
                @pressEnter="save(record.key)"
              />
              <check-outlined
                class="editable-cell-icon-check"
                @click="save(record.key)"
              />
            </div>
            <div v-else class="editable-cell-text-wrapper">
              {{ text || " " }}
              <edit-outlined
                class="editable-cell-icon"
                @click="edit(record.key)"
              />
            </div>
          </div>
        </template>
        <template v-else-if="column.dataIndex === 'status'">
          <a-select
            v-model:value="record.status"
            @change="updateStatus(record.key, record.status)"
          >
            <a-select-option value="Pending">Pending</a-select-option>
            <a-select-option value="Accepted">Accepted</a-select-option>
            <a-select-option value="Failed">Failed</a-select-option>
          </a-select>
        </template>
        <template v-else-if="column.dataIndex === 'operation'">
          <a-popconfirm
            v-if="dataSource.length"
            :title="'Sure to delete? ' + record.name"
            @confirm="onDelete(record.key)"
          >
            <a>Delete</a>
          </a-popconfirm>
        </template>
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
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, computed } from "vue";
import { cloneDeep } from "lodash-es";
import axios from "axios";

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
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
  clearFilters();
  state.searchText = "";
};

const filteredData = computed(() => {
  if (!state.searchText) {
    return props.dataSource;
  }
  return props.dataSource.filter((item) => {
    return item[state.searchedColumn]
      ?.toString()
      .toLowerCase()
      .includes(state.searchText.toLowerCase());
  });
});

const editableData = reactive({});

const edit = (key) => {
  editableData[key] = cloneDeep(
    props.dataSource.find((item) => key === item.key)
  );
};

const save = async (key) => {
  const record = props.dataSource.find((item) => item.key === key);
  const updatedData = { ...editableData[key] };
  delete updatedData.key;
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/jobless/${key}`,
      updatedData
    );
    if (response.status === 200) {
      Object.assign(record, editableData[key]);
      delete editableData[key];
    } else {
      console.error("Failed to save changes: ", response.data);
    }
  } catch (error) {
    console.error("Failed to save changes:", error);
  }
};

const onDelete = async (key) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/jobless/${key}`);
    const index = props.dataSource.findIndex((item) => item.key === key);
    if (index !== -1) {
      props.dataSource.splice(index, 1);
    }
  } catch (error) {
    console.error("Failed to delete record:", error);
  }
};

const updateStatus = async (key, status) => {
  try {
    const response = await axios.put(
      `http://127.0.0.1:8000/api/jobless/${key}/status`,
      { jobless_status: status }
    );
    if (response.status === 200) {
      const record = props.dataSource.find((item) => item.key === key);
      if (record) {
        record.status = status;
      }
    } else {
      console.error("Failed to update status: ", response.data);
    }
  } catch (error) {
    console.error("Failed to update status:", error);
  }
};
</script>

<style lang="less" scoped>
.editable-cell {
  position: relative;
  .editable-cell-input-wrapper,
  .editable-cell-text-wrapper {
    padding-right: 24px;
  }

  .editable-cell-text-wrapper {
    padding: 5px 24px 5px 5px;
  }

  .editable-cell-icon,
  .editable-cell-icon-check {
    position: absolute;
    right: 0;
    width: 20px;
    cursor: pointer;
  }

  .editable-cell-icon {
    margin-top: 4px;
    display: none;
  }

  .editable-cell-icon-check {
    line-height: 28px;
  }

  .editable-cell-icon:hover,
  .editable-cell-icon-check:hover {
    color: #108ee9;
  }

  .editable-add-btn {
    margin-bottom: 8px;
  }
}
.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}
</style>
