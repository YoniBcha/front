<template>
  <button
    class="bg-[#0a58a4] text-white px-4 py-1 rounded-sm mb-10 float-end text-[16px] -mt-24"
    @click="handleAdd"
  >
    New Jobless
  </button>
  <a-table
    :columns="columns"
    :data-source="dataSource"
    :scroll="{ x: 1300, y: 1000 }"
    bordered
  >
    <template #bodyCell="{ column, text, record }">
      <!-- existing editable cells template -->
      <template
        v-if="
          column.dataIndex === 'name' ||
          column.dataIndex === 'gender' ||
          column.dataIndex === 'age' ||
          column.dataIndex === 'phonenumber' ||
          column.dataIndex === 'email' ||
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

      <!-- existing status cells template -->
      <template v-else-if="column.dataIndex === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
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
    title: "Full Name",
    dataIndex: "name",
    width: "16%",
    fixed: "left",
  },
  {
    title: "Sex",
    dataIndex: "gender",
    width: "8%",
    fixed: "left",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "8%",
  },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
    width: "17%",
  },
  {
    title: "address",
    dataIndex: "address",
    width: "20%",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "tags",
    fixed: "right",
    width: "10%",
  },
  {
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "10%",
  },
];
const dataSource = ref([
  {
    key: "1",
    name: "Edward King 0",
    gender: "M",
    age: 32,
    phonenumber: "+(251)567-48-47",
    address: "London, Park Lane no. 0",
    email: "example22@gmail.com",
    tags: ["loser"],
  },
  {
    key: "2",
    name: "Edward King 1",
    gender: "M",
    age: 32,
    phonenumber: "+(251)567-48-47",
    address: "London, Park Lane no. 1",
    email: "test44@gmail.com",
    tags: ["pass"],
  },
  {
    key: "3",
    name: "Edward King 0",
    gender: "F",
    age: 32,
    phonenumber: "+(251)567-48-47",
    address: "London, Park Lane no. 0",
    email: "newone66@gmail.com",
    tags: ["pending"],
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
