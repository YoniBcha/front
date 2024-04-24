<template>
  <div class="">
    <div class="">
      <div class="flex justify-between mb-10">
        <div class="text-2xl text-[#0a58a4] font-bold">
          Jobless Registration
        </div>
        <a-button
          class="bg-[#0a58a4] text-white hover:bg-white"
          @click="showModal"
        >
          new jobless
        </a-button>
      </div>
      <a-modal
        v-model:open="open"
        width="1000px"
        title="New JoblessForm"
        @ok="handleForm"
        okText="submit"
      >
        <a-form :model="formState">
          <div class="mt-10">
            <!-- upload profile photo -->
            <div class="grid grid-cols-3 gap-4">
              <!-- upload jobless photo -->
              <div class="">
                <a-form-item>
                  <a-upload-dragger
                    v-model:fileList="formState.photo"
                    name="photo"
                    action="/upload.do"
                    :rules="[
                      {
                        required: false,
                        message: 'Please upload your photo!',
                      },
                    ]"
                  >
                    <p class="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p class="ant-upload-text">Click or drag your photo here</p>
                    <p class="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </a-upload-dragger>
                </a-form-item>
              </div>
              <div class="flex flex-col">
                <a-input
                  v-model:value="formState.jobless_full_name"
                  :rules="[
                    { required: false, message: 'Please input your fullname!' },
                  ]"
                  placeholder="enter your full name"
                  allow-clear
                  class="mb-6"
                />
                <a-select
                  v-model:value="formState.jobless_gender"
                  :rules="[
                    { required: false, message: 'Please select your gender!' },
                  ]"
                  placeholder="select your gender "
                  class="mb-6"
                >
                  <a-select-option value="male">Male</a-select-option>
                  <a-select-option value="female">Female</a-select-option>
                </a-select>
                <a-input
                  v-model:value="formState.jobless_city"
                  :rules="[
                    { required: false, message: 'Please select your city!' },
                  ]"
                  placeholder="enter your city name"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  v-model:value="formState.jobless_phonenumber"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your phone number!',
                    },
                  ]"
                  placeholder="enter your phone number"
                  allow-clear
                  class="mb-6"
                />
              </div>
              <div class="">
                <a-input
                  v-model:value="formState.jobless_grandfather_name"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your grandfather name!',
                    },
                  ]"
                  placeholder="please enter your grandfather name"
                  allow-clear
                  class="mb-6"
                />
                <div class="flex">
                  <a-input
                    type="number"
                    v-model:value="formState.jobless_age"
                    :rules="[
                      { required: false, message: 'Please select your age!' },
                    ]"
                    placeholder="your age"
                    allow-clear
                    class="mb-6"
                  />
                  <a-input
                    v-model:value="formState.jobless_kebele"
                    :rules="[
                      {
                        required: false,
                        message: 'Please select your kebele!',
                      },
                    ]"
                    placeholder="your kebele"
                    allow-clear
                    class="mb-6 ml-2"
                  />
                </div>
                <a-input
                  v-model:value="formState.jobless_subcity"
                  placeholder="enter your Sub City name"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  type="email"
                  v-model:value="formState.jobless_email"
                  placeholder="enter your email please"
                  allow-clear
                  class="mb-6"
                />
              </div>
            </div>
            <div class="mt-5">
              <a-input
                v-model:value="formState.jobless_profession"
                :rules="[
                  {
                    required: false,
                    message: 'Please select your profession to tran please!',
                  },
                ]"
                placeholder="please enter your profession to tran and work with"
                allow-clear
                class="mb-6"
              />
            </div>
            <!-- upload house number and identification card -->
            <div class="grid grid-cols-3 gap-4">
              <div class="flex flex-col mt-2">
                <a-input
                  v-model:value="formState.jobless_housenumber"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your house number!',
                    },
                  ]"
                  placeholder="enter your house number"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  type="number"
                  v-model:value="formState.jobless_familysize"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your family size!',
                    },
                  ]"
                  placeholder="enter your fmaily size"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  v-model:value="formState.jobless_livingstatus"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your living status!',
                    },
                  ]"
                  placeholder="enter your living status"
                  allow-clear
                />
              </div>
              <div class="pt-2">
                <a-input
                  v-model:value="formState.jobless_birthplace"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your birth place!',
                    },
                  ]"
                  placeholder="please enter your birth place"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  v-model:value="formState.jobless_family_status"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your family status!',
                    },
                  ]"
                  placeholder="enter your family status"
                  allow-clear
                  class="mb-6"
                />
                <a-input
                  v-model:value="formState.jobless_martial_status"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your martial status!',
                    },
                  ]"
                  placeholder="enter your martial status"
                  allow-clear
                />
              </div>
              <a-form-item class="pb-18">
                <a-upload-dragger
                  v-model:fileList="formState.jobless_identification_card"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your idetification card!',
                    },
                  ]"
                  name="jobless_identification_card"
                  action="/upload.do"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag your identification card
                  </p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
            </div>
            <div class="flex mt-5">
              <a-input
                v-model:value="formState.jobless_disability_status"
                :rules="[
                  {
                    required: false,
                    message: 'Please select your disablity status!',
                  },
                ]"
                placeholder="please enter disability status"
                allow-clear
              />
              <a-input
                v-model:value="formState.jobless_reason_tocome"
                :rules="[
                  {
                    required: false,
                    message: 'Please select your reason to come!',
                  },
                ]"
                placeholder="enter your reason to come"
                allow-clear
                class="ml-5"
              />
            </div>
            <!-- profession certificate and jobless evidence card -->
            <div class="grid grid-cols-2 gap-4 mt-10">
              <div class="">
                <label for="" class="text-lg text-gray-600"
                  >If you and any certificate in specific profection</label
                >
                <a-form-item class="mt-4">
                  <a-upload-dragger
                    v-model:fileList="formState.jobless_training_cirtificate"
                    :rules="[
                      {
                        required: false,
                        message: 'Please select your training cirtificate!',
                      },
                    ]"
                    name="formState.jobless_training_cirtificate"
                    action="/upload.do"
                  >
                    <p class="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p class="ant-upload-text">
                      Click or drag your profession cirtificate
                    </p>
                    <p class="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </a-upload-dragger>
                </a-form-item>
              </div>
              <div class="">
                <label for="" class="text-lg text-gray-600"
                  >Upload Jobless evidence card here</label
                >
                <a-form-item class="mt-4">
                  <a-upload-dragger
                    v-model:fileList="formState.jobless_evidence_card"
                    :rules="[
                      {
                        required: false,
                        message: 'Please select your jobless evidence card!',
                      },
                    ]"
                    name="files"
                    action="/upload.do"
                  >
                    <p class="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p class="ant-upload-text">
                      Click or drag your jobless evidence
                    </p>
                    <p class="ant-upload-hint">
                      Support for a single or bulk upload.
                    </p>
                  </a-upload-dragger>
                </a-form-item>
              </div>
            </div>
            <!-- and lastly proiority evidence card -->
            <div class="grid grid-cols-2 gap-4 mt-5">
              <div class="flex items-center justify-center">
                <label for="" class="flex justify-center text-lg text-gray-600"
                  >If you and any priority evidence</label
                >
              </div>
              <a-form-item class="mt-4">
                <a-upload-dragger
                  v-model:fileList="formState.jobless_priority_evidence"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select your priority evidence!',
                    },
                  ]"
                  name="jobless_priority_evidence"
                  action="/upload.do"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p class="ant-upload-text">
                    Click or drag your priority cirtificate
                  </p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
            </div>
          </div>
        </a-form>
      </a-modal>
    </div>
  </div>
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
              :data-key="record.key"
              @keydown.enter="save(record.key)"
              @blur="save(record.key)"
              @input="onInput($event, column.dataIndex)"
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
        <a-popconfirm
          title="Sure to delete?"
          :okText="'Yes, delete ' + record.name"
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

const formState = reactive({
  jobless_registration_date: "",
  //jobless_photo: "",
  jobless_full_name: "",
  jobless_grandfather_name: "",
  jobless_gender: "",
  jobless_age: "",
  jobless_kebele: "",
  jobless_city: "",
  jobless_subcity: "",
  jobless_phonenumber: "",
  jobless_email: "",
  jobless_profession: "",
  jobless_housenumber: "",
  jobless_familysize: "",
  jobless_livingstatus: "",
  jobless_birthplace: "",
  jobless_family_status: "",
  jobless_martial_status: "",
  // jobless_identification_card: "",
  jobless_disability_status: "",
  jobless_reason_tocome: "",
  //jobless_training_cirtificate: "",
  //jobless_evidence_card: "",
  //jobless_priority_evidence: "",
});

const handleForm = (e) => {
  const newData = {
    key: `${count.value}`,
    name: formState.jobless_full_name,
    gender: formState.jobless_gender,
    age: 32,
    address: `London, Park Lane no. ${count.value}`,
  };
  dataSource.value.push(newData);
  open.value = false;
};

const open = ref(false);
const showModal = () => {
  open.value = true;
};

const onInput = (event, dataIndex) => {
  const key = event.target.dataset.key;
  const value = event.target.value;
  if (editableData[key]) {
    editableData[key][dataIndex] = value;
  }
};
const state = reactive({
  searchText: "",
  searchedColumn: "",
});
const searchInput = ref();

const columns = [
  {
    title: "Full Name",
    dataIndex: "name",
    width: "16%",
    fixed: "left",
    key: "name",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.name.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
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
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  state.searchText = selectedKeys[0];
  state.searchedColumn = dataIndex;
};
const handleReset = clearFilters => {
  clearFilters({
    confirm: true,
  });
  state.searchText = '';
};
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
  const original = dataSource.value.find((item) => item.key === key);
  if (original) {
    editableData[key] = editableData[key] || {};
    editableData[key][dataIndex] = original[dataIndex] || "";
  }
};

const save = (key) => {
  const item = dataSource.value.find((item) => item.key === key);
  if (item && editableData[key]) {
    let shouldSave = false; // Flag to check if saving is necessary
    for (const prop in editableData[key]) {
      const editedValue = editableData[key][prop].trim();
      if (editedValue !== "") {
        item[prop] = editedValue;
        shouldSave = true; // Set flag to true if any non-empty value is found
      }
    }
    if (shouldSave) {
      delete editableData[key]; // Clean up after saving only if saving is necessary
    }
  }
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
