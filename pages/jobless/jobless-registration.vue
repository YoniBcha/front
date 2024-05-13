<template>
  <div class="">
    <!-- JOBLESS REGISTRATION TEXT AND ADDING NEW JOBLESS BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">Jobless Registration</div>
      <a-button
        class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
      >
        Add Jobless
      </a-button>
    </div>
    <!-- JOBLESS FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New JoblessForm"
      @ok.prevent="submitForm"
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
              <a-input
                v-model:value="formState.jobless_username"
                :rules="[
                  { required: false, message: 'Please input your username!' },
                ]"
                placeholder="enter your username"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.jobless_role"
                :rules="[
                  { required: false, message: 'Please input your username!' },
                ]"
                placeholder="enter your role"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.jobless_password"
                :rules="[
                  { required: false, message: 'Please input your username!' },
                ]"
                placeholder="enter your password"
                allow-clear
                class="mb-6"
              />
              <a-input
                v-model:value="formState.jobless_woreda"
                :rules="[
                  { required: false, message: 'Please input your username!' },
                ]"
                placeholder="enter your password"
                allow-clear
                class="mb-6"
              />
              <a-select
                v-model:value="formState.jobless_sex"
                :rules="[
                  { required: false, message: 'Please select your gender!' },
                ]"
                placeholder="select your gender"
                class="mb-6"
              >
                <a-select-option value="M">Male</a-select-option>
                <a-select-option value="F">Female</a-select-option>
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
          <div class="grid grid-cols-3 gap-4 mt-10">
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
            <div class="">
              <label for="" class="flex justify-center text-lg text-gray-600"
                >If you and any priority evidence</label
              >
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
        </div>
      </a-form>
    </a-modal>
  </div>

  <!-- JOBLESS DATATABLE -->
  <div class="mb-24">
    <a-table
      bordered
      :data-source="dataSource"
      :columns="columns"
      :scroll="{ x: 1300, y: 1000 }"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span style="color: #1890ff">Name</span>
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
        <template v-if="column.dataIndex === 'name'">
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
        <template v-if="column.dataIndex === 'sex'">
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key].sex"
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
        <template v-if="column.dataIndex === 'age'">
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key].age"
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
        <template v-if="column.dataIndex === 'phonenumber'">
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key].phonenumber"
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

        <template v-if="column.dataIndex === 'address'">
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key].address"
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
        <template v-if="column.dataIndex === 'email'">
          <div class="editable-cell">
            <div
              v-if="editableData[record.key]"
              class="editable-cell-input-wrapper"
            >
              <a-input
                v-model:value="editableData[record.key].email"
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
          <span>
            <a-tag
              v-for="tag in record.status"
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
import { computed, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";

const open = ref(false);
const showModal = () => {
  open.value = true;
};

const formState = reactive({
  jobless_photo: null,
  jobless_username: "",
  jobless_woreda: "",
  jobless_password: "",
  jobless_full_name: "",
  jobless_grandfather_name: "",
  jobless_sex: "",
  jobless_age: "",
  jobless_kebele: "",
  jobless_city: "",
  jobless_subcity: "",
  jobless_phonenumber: "",
  jobless_role: "",
  jobless_email: "",
  jobless_profession: "",
  jobless_housenumber: "",
  jobless_familysize: "",
  jobless_livingstatus: "",
  jobless_birthplace: "",
  jobless_family_status: "",
  jobless_martial_status: "",
  jobless_identification_card: null,
  jobless_disability_status: "",
  jobless_reason_tocome: "",
  jobless_training_cirtificate: null,
  jobless_evidence_card: null,
  jobless_priority_evidence: null,
});

const submitForm = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/jobless", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    alert("Service saved successfully!");
  } catch (error) {
    console.error("Failed to save service:", error);
  }
};

// const handleFormee = (e) => {
//   const newData = {
//     key: `${count.value}`,
//     name: formState.jobless_full_name,
//     sex: formState.jobless_sex,
//     age: formState.jobless_age,
//     address: formState.jobless_city,
//     email: formState.jobless_email,
//     phonenumber: formState.jobless_phonenumber,
//   };
//   dataSource.value.push(newData);
//   open.value = false;
// };

const dataSource = ref([
  {
    key: "1",
    sex: "M",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    status: ["pass"],
    phonenumber: "+(251)567-48-47",
    email: "test44@gmail.com",
  },
  {
    key: "2",
    name: "Joe Black",
    sex: "M",
    age: 42,
    address: "London No. 1 Lake Park",
    status: ["loser"],
    phonenumber: "+(251)56657567-48-47",
    email: "test44@gmasgfdil.com",
  },
  {
    key: "3",
    name: "Jim Green",
    sex: "M",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    status: ["pass"],
    phonenumber: "+(251)567-5675-47",
    email: "test44@gmghail.com",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    sex: "F",
    address: "London No. 2 Lake Park",
    status: ["pending"],
    phonenumber: "+(251)5656757",
    email: "test44@gmail.djghjcom",
  },
]);

const state = reactive({
  searchText: "",
  searchedColumn: "",
});

const searchInput = ref();

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    fixed: "left",
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
    dataIndex: "sex",
    fixed: "left",
    width: "8%",
  },
  {
    title: "Age",
    dataIndex: "age",
    width: "8%",
  },
  {
    title: "Phone Number",
    dataIndex: "phonenumber",
    key: "phonenumber",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.phonenumber.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.address.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.email.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus();
        }, 100);
      }
    },
  },

  {
    title: "Status",
    dataIndex: "status",
    fixed: "right",
    width: "6%",
  },
  {
    title: "operation",
    dataIndex: "operation",
    fixed: "right",
    width: "8%",
  },
];

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

const count = computed(() => dataSource.value.length + 1);
const editableData = reactive({});

const edit = (key) => {
  editableData[key] = cloneDeep(
    dataSource.value.filter((item) => key === item.key)[0]
  );
};

const save = (key) => {
  Object.assign(
    dataSource.value.find((item) => key === item.key),
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
