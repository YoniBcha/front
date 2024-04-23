<template>
  <div>
    <!-- enterprise registration header and new enterprise button -->
    <div class="flex justify-between mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">
        Enterprise Registration
      </div>
      <a-button
        class="bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
        >New Enterprise</a-button
      >
    </div>
    <a-modal
      v-model:open="open"
      width="1000px"
      title="Enterprise Information"
      @ok="handleOk"
      okText="submit"
    >
      <!-- enterprise registration form -->
      <a-form :model="formState" name="validate_other">
        <div class="mt-5">
          <!-- enterprise manager name and registration date -->
          <div class="grid grid-cols-12">
            <div class="col-start-1 col-end-4">
              <a-input
                v-model:value="formState.enterprise_manager_name"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise manager name!',
                  },
                ]"
                placeholder="enter enterprise manager name"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="col-start-10 col-end-13">
              <a-input
                v-model:value="formState.enterprise_registration_date"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise registration date!',
                  },
                ]"
                placeholder="enter registration date"
                allow-clear
                class="mb-6"
              />
            </div>
          </div>

          <div class="grid grid-cols-3 grid-rows-4">
            <div class="col-span-1 row-span-4 pr-8">
              <label class="text-4xl text-center"
                >upload enterprise logo here</label
              >
              <a-form-item>
                <a-upload-dragger
                  v-model:fileList="formState.enterprise_logo"
                  action="/upload.do"
                  :rules="[
                    { required: false, message: 'Please upload your photo!' },
                  ]"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p class="ant-upload-text">Click or drag enterprise logo</p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
            </div>
            <div class="col-span-2 row-span-1">
              <a-input
                v-model:value="formState.enterprise_name"
                :rules="[
                  { required: false, message: 'Please enter enterprise name!' },
                ]"
                placeholder="enter enterprise name please"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="flex col-span-2 gap-3 row-span-1">
              <a-input
                v-model:value="formState.enterprise_type"
                :rules="[
                  { required: false, message: 'Please enter enterprise type!' },
                ]"
                placeholder="enter enterprise type please"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.enterprise_sector"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise sector!',
                  },
                ]"
                placeholder="enter enterprise sector please"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="flex col-span-2 gap-3 row-span-1">
              <a-input
                v-model:value="formState.enterprise_city"
                :rules="[
                  { required: false, message: 'Please enter enterprise city!' },
                ]"
                placeholder="enter enterprise city"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.enterprise_subcity"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise subcity!',
                  },
                ]"
                placeholder="enter enterprise subcity"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.enterprise_kebele"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise kebele!',
                  },
                ]"
                placeholder="enter enterprise kebele"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="flex col-span-2 gap-3 row-span-1">
              <a-input
                v-model:value="formState.enterprise_phonenumber"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise phone number!',
                  },
                ]"
                placeholder="enter enterprise phone number"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.enterprise_email"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise email!',
                  },
                ]"
                placeholder="enter enterprise email"
                allow-clear
                class="mb-6"
              />
            </div>
          </div>
        </div>
      </a-form>
    </a-modal>
  </div>
  <a-table
    bordered
    :data-source="dataSource"
    :scroll="{ x: 1300, y: 1000 }"
    :columns="columns"
    :loading="loading"
    @change="handleTableChange"
  >
    <template #bodyCell="{ column, text, record }">
      <template
        v-if="
          column.dataIndex === 'enterprise_name' || column.dataIndex === 'type'
        "
      >
        <div class="editable-cell">
          <div
            v-if="editableData[record.key]"
            class="editable-cell-input-wrapper"
          >
            <a-input
              v-model:value="editableData[record.key].name"
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

      <template v-else-if="column.dataIndex === 'tags'">
        <span>
          <a-tag
            v-for="tag in record.tags"
            :key="tag"
            :color="
              tag === 'fail' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>

      <template v-else-if="column.dataIndex === 'action'">
        <a-popconfirm
          v-if="dataSource.length"
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
import { computed, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";

const handleTableChange = (pag, filters, sorter) => {
  run({
    results: pag.pageSize,
    page: pag?.current,
    sortField: sorter.field,
    sortOrder: sorter.order,
    ...filters,
  });
};

const open = ref(false);
const showModal = () => {
  open.value = true;
};

const columns = [
  {
    title: "Enterprise Name",
    dataIndex: "enterprise_name",
    sorter: true,
    fixed: "left",
    width: "28%",
  },

  {
    title: "Enterprise Type",
    dataIndex: "type",
    width: "23%",
  },
  {
    title: "Enterprise Sector",
    dataIndex: "sector",
    width: "25%",
  },
  {
    title: "Address",
    dataIndex: "address",
    width: "32%",
  },
  {
    title: "Email",
    dataIndex: "email",
    width: "18%",
  },
  {
    title: "Phone Number",
    dataIndex: "phone_number",
    width: "22%",
  },
  {
    title: "Manager Name",
    dataIndex: "manager_name",
    width: "22%",
  },
  {
    title: "Registration Date",
    dataIndex: "registration_date",
    width: "20%",
  },
  {
    title: "Status",
    dataIndex: "tags",
    fixed: "right",
    width: "14%",
  },
  {
    title: "Action",
    dataIndex: "action",
    fixed: "right",
    width: "13%",
  },
];

const dataSource = ref([
  {
    key: "0",
    enterprise_name: "Edward King 0",
    address: "London, Park Lane no. 0",
    tags: ["fail"],
  },
  {
    key: "1",
    enterprise_name: "Edward King 1",
    address: "London, Park Lane no. 1",
    tags: ["pass"],
  },
]);
const count = computed(() => dataSource.value.length + 1);
const editableData = reactive({});

const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
};
const save = (key) => {
  Object.assign(
    dataSource.value.filter((item) => key === item.key)[0],
    editableData[key]
  );
  delete editableData[key];
};
const onDelete = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
};
const formState = reactive({
  enterprise_manager_name: "",
  enterprise_registration_date: "",
  enterprise_name: "",
  enterprise_type: "",
  enterprise_sector: "",
  enterprise_city: "",
  enterprise_subcity: "",
  enterprise_kebele: "",
  enterprise_phonenumber: "",
  enterprise_email: "",
});
const handleOk = (e) => {
  const newData = {
    key: `${count.value}`,
    enterprise_name: formState.enterprise_name,
    type: formState.enterprise_type,
    sector: formState.enterprise_sector,
    address: formState.enterprise_city,
    email: formState.enterprise_email,
    phone_number: formState.enterprise_phonenumber,
    manager_name: formState.enterprise_manager_name,
    registration_date: formState.enterprise_registration_date,
  };
  dataSource.value.push(newData);
  // alert("new enterprise is added");
  open.value = false;
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
