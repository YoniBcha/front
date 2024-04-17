<template>
  <button
    class="bg-[#0a58a4] text-white px-5 py-2 rounded-sm mb-10 float-end text-lg -mt-24"
    @click="handleAdd"
  >
    New Jobless
  </button>
  <a-table :columns="columns" :data-source="dataSource" bordered>
    <template #bodyCell="{ column, text, record }">
      <template
        v-if="
          column.dataIndex === 'name' ||
          column.dataIndex === 'age' ||
          column.dataIndex === 'address'
        "
      >
        <div class="editable-cell">
          <div
            v-if="
              editableData[record.key] &&
              editableData[record.key][column.dataIndex]
            "
            class="editable-cell-input-wrapper"
          >
            <a-input
              v-model:value="editableData[record.key][column.dataIndex]"
              @pressEnter="save(record.key, column.dataIndex)"
            />
            <check-outlined
              class="editable-cell-icon-check"
              @click="save(record.key, column.dataIndex)"
            />
          </div>
          <div v-else class="editable-cell-text-wrapper">
            {{ text || " " }}
            <edit-outlined
              class="editable-cell-icon"
              @click="edit(record.key, column.dataIndex)"
            />
          </div>
        </div>
      </template>
      <template v-else-if="column.dataIndex === 'operation'">
        <a-popconfirm title="Sure to delete?" @confirm="onDelete(record.key)">
          <a>Delete</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";
const columns = [
  {
    title: "name",
    dataIndex: "name",
    width: "30%",
  },
  {
    title: "age",
    dataIndex: "age",
  },
  {
    title: "address",
    dataIndex: "address",
  },
  {
    title: "operation",
    dataIndex: "operation",
  },
];
const dataSource = ref([
  {
    key: "0",
    name: "Edward King 0",
    age: 32,
    address: "London, Park Lane no. 0",
  },
  {
    key: "1",
    name: "Edward King 1",
    age: 32,
    address: "London, Park Lane no. 1",
  },
]);
const count = computed(() => dataSource.value.length + 1);
const editableData = reactive({});

const edit = (key, dataIndex) => {
  if (!editableData[key]) {
    editableData[key] = {};
  }
  editableData[key][dataIndex] = cloneDeep(
    dataSource.value.find((item) => item.key === key)[dataIndex]
  );
};

const save = (key, dataIndex) => {
  const itemIndex = dataSource.value.findIndex((item) => item.key === key);
  if (itemIndex !== -1) {
    dataSource.value[itemIndex][dataIndex] = editableData[key][dataIndex];
  }
  delete editableData[key][dataIndex];
  if (Object.keys(editableData[key]).length === 0) {
    delete editableData[key];
  }
};

const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
};
const handleAdd = () => {
  const newData = {
    key: `${count.value}`,
    name: `Edward King ${count.value}`,
    age: 32,
    address: `London, Park Lane no. ${count.value}`,
  };
  dataSource.value.push(newData);
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
