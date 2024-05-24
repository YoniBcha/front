<template>
  <!-- JOBLESS DATATABLE -->
  <div class="mb-24">
    <a-table
      :data-source="dataSource"
      :columns="columns"
      :scroll="{ x: 1300, y: 1000 }"
    >
      <!-- Header cell template -->
      <template #headerCell="{ column }">
        <span v-if="column.key === 'city'" style="color: #1890ff">{{
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
            column.dataIndex === 'city' ||
            column.dataIndex === 'subcity' ||
            column.dataIndex === 'woreda' ||
            column.dataIndex === 'kebele'
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
import { defineProps, defineEmits, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";

const props = defineProps({
  dataSource: {
    type: Array,
    required: true,
  },
  columns: {
    type: Array,
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
};

const handleReset = (clearFilters) => {
  clearFilters({
    confirm: true,
  });
  state.searchText = "";
};

const editableData = reactive({});

const edit = (key) => {
  editableData[key] = cloneDeep(
    props.dataSource.filter((item) => key === item.key)[0]
  );
};

const save = (key) => {
  Object.assign(
    props.dataSource.find((item) => key === item.key),
    editableData[key]
  );
  delete editableData[key];
};
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
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
