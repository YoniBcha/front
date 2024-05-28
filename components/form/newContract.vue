<template>
  <div class="">
    <!-- WORKPLACE REGISTRATION TEXT AND ADDING NEW WORKPLACE BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">Contract Document</div>
      <a-button
        class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
      >
        New Contract
      </a-button>
    </div>
    <!-- WORKPLACE FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New Contract Document"
      @ok="submitForm"
      okText="submit"
    >
      <a-form :model="formState">
        <div class="mt-10">
          <div class="flex justify-end">
            <div class="">
              <a-input
              v-model:value="formState.contract_end_date"
              :rules="[
                {
                  required: false,
                  message: 'Please enter contract end date!',
                },
              ]"
              placeholder="enter contract end date"
              allow-clear
              class="mb-6"
            />
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="">
              <label for="" class="text-gray-500"
                >select the contract makeing body</label
              >
              <div class="mt-2">
                <a-form-item>
                  <a-select
                    placeholder="Please select enterprise name"
                    v-model:value="formState.employee_id"
                    :rules="[
                      {
                        required: false,
                        message: 'Please entemplyee_ider lessor name!',
                      },
                    ]"
                  >
                    <a-select-option value="1">Condominium</a-select-option>
                    <a-select-option value="2">Shade</a-select-option>
                    <a-select-option value="3">Container</a-select-option>
                  </a-select>
                </a-form-item>
              </div>
            </div>
            <div class=""></div>
            <div class="">
              <label for="" class="text-gray-500">selete enterprise</label>
              <a-form-item>
                <a-select
                  placeholder="Please select enterprise name"
                  v-model:value="formState.enterprise_id"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select enterprise name!',
                    },
                  ]"
                >
                  <a-select-option value="1">Condominium</a-select-option>
                  <a-select-option value="2">Shade</a-select-option>
                  <a-select-option value="3">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
          </div>
          <!-- divider -->
          <div class="mr-4">
            <a-divider
              style="background: gray; margin-left: 2px; margin-right: 40px"
            />
          </div>
          <div class="">
            <div class="flex justify-center text-2xl font-bold text-gray-600">
              workplace management agreement
            </div>
            <div class="text-xl">Rule</div>
            <div class="text-lg mt-3">
              <p>
                1, Based on the hire agreement given kare meter
                <a-input
                  class="w-36 ml-1"
                  v-model:value="formState.karameter"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="enter kare meter"
                  allow-clear
                />
                .
              </p>
              <p class="mt-2">
                2, One kare meter have hire value
                <a-input
                  class="w-36 ml-1"
                  v-model:value="formState.karameter_value"
                  :rules="[
                    { required: false, message: 'Please enter karare meter!' },
                  ]"
                  placeholder="1 kare meter"
                  allow-clear
                />
                so the enterprise must pay
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.karameter_value_month"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter month payment value!',
                    },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                in month and pay
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.karameter_value_year"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                birr in year.
              </p>
              <p>
                3, The hire must update the contract or the agreement in
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.contract_update_date"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter contract update date!',
                    },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                E.C .
              </p>
              <p>
                4,The hire workplace havev the authority to dissoulution based
                on the rule statted in.
              </p>
            </div>
          </div>

          <div
            class="mt-16 text-lg text-gray-600 border-2 border-[#0a58a4] py-5 px-2"
          >
            <div class="flex gap-3">
              In
              <a-form-item
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
              >
                <a-input
                  class="w-40 ml-1"
                  v-model:value="formState.office_name"
                  placeholder="enter office name"
                  allow-clear
                />
              </a-form-item>
              in city
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your city!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.office_city_id"
                  placeholder="Select your city"
                  @change="onCityChange"
                  allow-clear
                >
                  <a-select-option
                    v-for="city in cities"
                    :key="city.id"
                    :value="city.id"
                  >
                    {{ city.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              subcity
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your subcity!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.office_subcity_id"
                  placeholder="Select your subcity"
                  @change="onSubcityChange"
                  allow-clear
                >
                  <a-select-option
                    v-for="subcity in filteredSubcities"
                    :key="subcity.id"
                    :value="subcity.id"
                  >
                    {{ subcity.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
            </div>
            <div class="flex gap-3">
              woreda
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your woreda!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.office_woreda_id"
                  placeholder="Select your woreda"
                  @change="onWoredaChange"
                  allow-clear
                >
                  <a-select-option
                    v-for="woreda in filteredWoredas"
                    :key="woreda.id"
                    :value="woreda.id"
                  >
                    {{ woreda.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              and kebele
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your kebele!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.office_kebele_id"
                  placeholder="Select your kebele"
                  allow-clear
                >
                  <a-select-option
                    v-for="kebele in filteredKebeles"
                    :key="kebele.id"
                    :value="kebele.id"
                  >
                    {{ kebele.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              have workplace name
            </div>
            <div class="flex gap-3">
              <a-form-item
                :rules="[
                  { required: true, message: 'select your workplace name!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.workplace_id"
                  placeholder="Select you workplace name"
                  allow-clear
                >
                  <a-select-option
                    v-for="kebele in filteredKebeles"
                    :key="kebele.id"
                    :value="kebele.id"
                  >
                    {{ kebele.name }}
                  </a-select-option>
                </a-select>
              </a-form-item>
              and workplace type is:
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select workplace type!' },
                ]"
                class="w-60"
              >
                <a-select
                  v-model:value="formState.workplace_type"
                  placeholder="Select your workplace type"
                  allow-clear
                >
                  <a-select-option value="condominium">
                    condominium </a-select-option
                  ><a-select-option value="shade"> shade </a-select-option
                  ><a-select-option value="container">
                    container
                  </a-select-option>
                </a-select>
              </a-form-item>
              and workplace number
            </div>
            <div class="flex gap-3">
              <a-form-item
                class="w-60"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter workplace number!',
                  },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_number"
                  placeholder="enter workplace number"
                  allow-clear
                />
              </a-form-item>

              and take workplace size in meter square
              <a-form-item
                class="w-60"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
              >
                <a-input
                  v-model:value="formState.karemeter_taken"
                  placeholder="enter kare meter taken"
                  allow-clear
                /> </a-form-item
              >is
            </div>
            <div class="">given to the enterprise .</div>
          </div>

          <div class="mt-10">
            <a-divider
              style="background: gray; margin-left: 2px; margin-right: 40px"
            />
          </div>

          <div class="grid grid-cols-4 gap-3">
            <div class="col-start-3">
              <p class="font-semibold">lessor signature</p>
              <a-form-item class="">
                <a-upload-dragger
                  v-model:fileList="formState.lessor_signature"
                  name="photo"
                  action="/upload.do"
                  :rules="[
                    {
                      required: false,
                      message: 'upload lessor signature',
                    },
                  ]"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p class="ant-upload-text">Click or drag lessor signature</p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
            </div>
            <div class="">
              <p class="font-semibold">enterprise manager signature</p>
              <a-form-item>
                <a-upload-dragger
                  v-model:fileList="formState.enterprise_manager_signature"
                  name="photo"
                  action="/upload.do"
                  :rules="[
                    {
                      required: false,
                      message: 'upload manager signature',
                    },
                  ]"
                >
                  <p class="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p class="ant-upload-text">drag manager signature</p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
              <a-form-item
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise manager name!',
                  },
                ]"
              >
                <a-input
                  v-model:value="formState.enterprise_manager_name"
                  placeholder="enterprise manager name"
                  allow-clear
                />
              </a-form-item>
            </div>
          </div>

          <div class="mt-10">
            <a-divider
              style="background: gray; margin-left: 2px; margin-right: 40px"
            />
          </div>

          <div class="grid grid-cols-4 mt-5">
            <a-form-item class="col-start-1 con-end-2">
              <a-upload-dragger
                v-model:fileList="formState.contract_document"
                name="photo"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload upload contract document',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">
                  Click or drag upload contract document
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
</template>

<script setup>
const open = ref(false);
const showModal = () => {
  open.value = true;
};

// Data fetching state
const cities = ref([]);
const subcities = ref([]);
const filteredSubcities = ref([]);
const woredas = ref([]);
const filteredWoredas = ref([]);
const kebeles = ref([]);
const filteredKebeles = ref([]);

// Fetch data function
const fetchData = async () => {
  try {
    const [cityResponse, subcityResponse, woredaResponse, kebeleResponse] =
      await Promise.all([
        fetch("http://127.0.0.1:8000/api/city"),
        fetch("http://127.0.0.1:8000/api/subcity"),
        fetch("http://127.0.0.1:8000/api/woreda"),
        fetch("http://127.0.0.1:8000/api/kebele"),
      ]);

    const [cityData, subcityData, woredaData, kebeleData] = await Promise.all([
      cityResponse.json(),
      subcityResponse.json(),
      woredaResponse.json(),
      kebeleResponse.json(),
    ]);
    cities.value = cityData;
    subcities.value = subcityData;
    woredas.value = woredaData;
    kebeles.value = kebeleData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

onMounted(fetchData);

// Handle city change event
const onCityChange = (selectedCity) => {
  const selectedCityObject = cities.value.find(
    (city) => city.id === selectedCity
  );
  if (selectedCityObject) {
    filteredSubcities.value = subcities.value.filter(
      (subcity) => subcity.city_id === selectedCityObject.id
    );
  } else {
    filteredSubcities.value = [];
  }
};

const onSubcityChange = (selectedSubcity) => {
  const selectedSubcityObject = subcities.value.find(
    (subcity) => subcity.id === selectedSubcity
  );
  if (selectedSubcityObject) {
    filteredWoredas.value = woredas.value.filter(
      (woreda) => woreda.subcity_id === selectedSubcityObject.id
    );
  } else {
    filteredWoredas.value = [];
  }
};

const onWoredaChange = (selectedWoreda) => {
  const selectedWoredaObject = woredas.value.find(
    (woreda) => woreda.id === selectedWoreda
  );
  if (selectedWoredaObject) {
    filteredKebeles.value = kebeles.value.filter(
      (kebele) => kebele.woreda_id === selectedWoredaObject.id
    );
  } else {
    filteredKebeles.value = [];
  }
};

const formState = reactive({
  employee_id: "",
  enterprise_id: "",
  workplace_contract_office_name: "",
  karameter: "",
  karameter_value: "",
  karameter_value_month: "",
  karameter_value_year: "",
  contract_update_date: "",
  office_name: "",
  office_city_id: "",
  office_subcity_id: "",
  office_woreda_id: "",
  office_kebele_id: "",
  workplace_id: "",
  karemeter_taken: "",
  contract_document: [],
  lessor_signature: [],
  enterprise_manager_signature: [],
  enterprise_manager_name: ""
  // 'employee_id','enterprise_id',
});

const submitForm = async () => {
  try {
    const formData = new FormData();
    for (const key in formState) {
      if (Array.isArray(formState[key])) {
        formState[key].forEach((file) => {
          formData.append(key, file.originFileObj);
        });
      } else {
        formData.append(key, formState[key]);
      }
    }

    const response = await fetch(
      "http://127.0.0.1:8000/api/contract-document",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      message.success("Contract document information created successfully");
      open.value = false;
    } else {
      message.error("Failed to save contract document");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    message.error("Error submitting form");
  }
};
</script>
