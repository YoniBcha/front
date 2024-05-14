<template>
    <div class="">
      <!-- JOBLESS REGISTRATION TEXT AND ADDING NEW JOBLESS BUTTON  -->
      <div class="flex justify-between mt-5 mb-10">
        <div class="text-2xl text-[#0a58a4] font-bold">
          Enterprise Registration
        </div>
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
        @ok="handleForm"
        okText="submit"
      >
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
    jobless_registration_date: "",
    //jobless_photo: "",
    jobless_full_name: "",
    jobless_grandfather_name: "",
    jobless_sex: "",
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
      sex: formState.jobless_sex,
      age: formState.jobless_age,
      address: formState.jobless_city,
      email: formState.jobless_email,
      phonenumber: formState.jobless_phonenumber,
    };
    dataSource.value.push(newData);
    open.value = false;
  };
  
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
  