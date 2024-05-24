<template>
  <div class="">
    <!-- ENTERPRISE REGISTRATION TEXT AND ADDING NEW ENTERPRISE BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">
        Enterprise Registration
      </div>
      <a-button
        class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
      >
        Add Enterprise
      </a-button>
    </div>
    <!-- JOBLESS FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New Enterprise Adding Form"
      @ok.prevent="submitForm"
      okText="submit"
    >
      <a-form :model="formState" name="validate_other">
        <div class="mt-10">
          <div class="grid grid-cols-3 grid-rows-3 gap-2 h-60">
            <a-form-item class="row-span-3 col-span-1">
              <label class="text-4xl text-center"
                >upload enterprise logo here</label
              >
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

            <a-form-item class="col-span-2">
              <a-input
                v-model:value="formState.enterprise_name"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise name!',
                  },
                ]"
                placeholder="enter enterprise name please"
                allow-clear
                class="mt-10"
              />
            </a-form-item>

            <a-form-item class="">
              <label class="text-gray-400">enterprise type</label>
              <a-select
                placeholder="enter enterprise sector please"
                v-model:value="formState.enterprise_type"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise sector!',
                  },
                ]"
                class="w-full"
              >
                <a-select-option value="PLC">PLC</a-select-option>
                <a-select-option value="Private Enterprise"
                  >Private Enterprise</a-select-option
                >
                <a-select-option value="Small Enterprise"
                  >Small Enterprise</a-select-option
                >
                <a-select-option value="Stock">Stock</a-select-option>
                <a-select-option value="Union Enterprise"
                  >Union Enterprise</a-select-option
                >
              </a-select>
            </a-form-item>
            <a-form-item class="">
              <label class="text-gray-400">enterprise sector</label>
              <a-select
                placeholder="select your enterprise type"
                v-model:value="formState.enterprise_sector"
                :rules="[
                  {
                    required: false,
                    message: 'Please select your sector!',
                  },
                ]"
                class="w-full"
              >
                <a-select-option value="Manufacturing"
                  >Manufacturing</a-select-option
                >
                <a-select-option value="Contractions"
                  >Contractions</a-select-option
                >
                <a-select-option value="Urban farming "
                  >Urban Farming
                </a-select-option>
                <a-select-option value="Services">Services</a-select-option>
                <a-select-option value="Commercial">Commercial</a-select-option>
                <a-select-option value="Mine digging "
                  >Mine digging
                </a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <a-input
                v-model:value="formState.enterprise_phone_number"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise phone number!',
                  },
                ]"
                placeholder="enter enterprise phone number"
                allow-clear
                class=""
              />
            </a-form-item>
            <a-form-item>
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
                class=""
              />
            </a-form-item>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="mt-8">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your city!' },
                ]"
              >
                <span class="text-gray-400 ml-1">Select city</span>
                <a-select
                  v-model:value="formState.enterprise_city"
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

              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your subcity!' },
                ]"
              >
                <span class="text-gray-400 ml-1">Select subcity</span>

                <a-select
                  v-model:value="formState.enterprise_subcity"
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

            <div class="mt-8">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your woreda!' },
                ]"
              >
                <span class="text-gray-400 ml-1">Select woreda</span>
                <a-select
                  v-model:value="formState.enterprise_woreda"
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

              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your kebele!' },
                ]"
              >
                <span class="text-gray-400 ml-1">Select kebele</span>
                <a-select
                  v-model:value="formState.enterprise_kebele"
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
            </div>

            <a-form-item>
              <label class="text-4xl text-gray-400"
                >upload taxpayer identification card</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_taxpayer_identification_card"
                action="/upload.do"
                :rules="[
                  { required: false, message: 'Please upload taxpayer identification card!' },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">Click or drag taxpayer identification card</p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </div>
          <div class="grid grid-cols-3 gap-2">
            <div class="">
              <a-form-item>
                <a-input
                  v-model:value="formState.enterprise_manager_name"
                  :rules="[
                    {
                      required: false,
                      message: 'enter enterprise manager name!',
                    },
                  ]"
                  placeholder="enter enterprise manager name"
                  allow-clear
                  class=""
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="formState.username"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter username!',
                    },
                  ]"
                  placeholder="enter enterprise username"
                  allow-clear
                  class=""
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="formState.password"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter password!',
                    },
                  ]"
                  placeholder="enter enterprise password"
                  allow-clear
                  class=""
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="formState.confirm_password"
                  :rules="[
                    {
                      required: false,
                      message: 'Please confirm password!',
                    },
                  ]"
                  placeholder="confirm password"
                  allow-clear
                  class=""
                />
              </a-form-item>
            </div>

            <a-form-item class="">
              <label class="text-xl text-gray-400 text-center"
                >upload enterprise approved trade name here</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_approved_trade_name"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload your approved trade name!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">
                  Click or drag enterprise trade name
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
            <a-form-item class="">
              <label class="text-xl text-gray-400 text-center"
                >upload enterprise bussiness plan here</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_business_plan"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload your bussiness plan!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag enterprise bussiness plan
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </div>

          <div class="grid grid-cols-3 gap-3">
            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload Business license here</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_Business_license"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload Business license!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag Business license
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload ownership of business address</label
              >
              <a-upload-dragger
                v-model:fileList="
                  formState.enterprise_ownership_ofbusiness_adress_and_approved_lease
                "
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload ownership of business address!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag ownership of business address
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
            <div class="mt-8">
              <a-form-item>
                <a-input
                  v-model:value="
                    formState.enterprise_taxpayer_identification_number
                  "
                  :rules="[
                    {
                      required: false,
                      message:
                        'Please enter enterprise taxpayer  identification number!',
                    },
                  ]"
                  placeholder="enterprise taxpayer identification number"
                  allow-clear
                  class=""
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="formState.enterprise_stock_price"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter enterprise stock price!',
                    },
                  ]"
                  placeholder="enterprise stock price"
                  allow-clear
                  class=""
                />
              </a-form-item>
              <a-form-item>
                <a-input
                  v-model:value="formState.enterprise_Price_per_share"
                  :rules="[
                    {
                      required: false,
                      message: 'Please enter enterprise Price per share!',
                    },
                  ]"
                  placeholder="enterprise Price per share"
                  allow-clear
                  class=""
                />
              </a-form-item>
            </div>
          </div>

          <div class="grid grid-cols-4 gap-2 mt-5">
            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload professional qualification</label
              >
              <a-upload-dragger
                v-model:fileList="
                  formState.enterprise_professional_qualification_certification
                "
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message:
                      'upload enterprise professional qualification certification!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag professional qualification
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload bylaws establishment here</label
              >
              <a-upload-dragger
                v-model:fileList="
                  formState.enterprise_Approved_bylaws_of_establishment
                "
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'upload bylaws establishment!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag bylaws establishments
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>

            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload Bylaws of shares here</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_Bylaws_of_shares"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload Bylaws of shares!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag Bylaws of shares
                </p>
                <p class="text-gray-400 ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>

            <a-form-item class="col-span-1">
              <label class="text-xl text-gray-400 text-center"
                >upload priority evidence here</label
              >
              <a-upload-dragger
                v-model:fileList="formState.enterprise_priority_evidence"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please enterprise priority evidence!',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="text-gray-400 ant-upload-text">
                  Click or drag priority evidence
                </p>
                <p class="text-gray-400 ant-upload-hint">
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
import { computed, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";

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
  enterprise_logo: [],
  enterprise_name: "",
  enterprise_username: "",
  enterprise_password: "",
  enterprise_type: "",
  enterprise_sector: "",
  enterprise_city: "",
  enterprise_subcity: "",
  enterprise_woreda: "",
  enterprise_kebele: "",
  enterprise_manager_name: "",
  enterprise_phone_number: "",
  enterprise_email: "",
  enterprise_stock_price: "",
  enterprise_taxpayer_identification_card: [],
  enterprise_taxpayer_identification_number: "",
  enterprise_approved_trade_name: [],
  enterprise_professional_qualification_certification: [],
  enterprise_business_plan: [],
  enterprise_ownership_ofbusiness_adress_and_approved_lease: [],
  enterprise_Price_per_share: "",
  enterprise_Approved_bylaws_of_establishment: [],
  enterprise_Business_license: [],
  enterprise_Bylaws_of_shares: [],
  enterprise_priority_evidence: [],
});

const submitForm = async () => {
  try {
    const response = await useFetch("http://127.0.0.1:8000/api/enterprises", {
      method: "POST",
      body: formState,
    });

    alert("enteprise information created successfully");
  } catch (error) {
    console.error("Error submitting form:");
    alert("not saved");
  }
};
</script>
