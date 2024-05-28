<template>
  <div class="">
    <!-- WORKPLACE REGISTRATION TEXT AND ADDING NEW WORKPLACE BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">
        Workplace Registration
      </div>
      <a-button
        class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
      >
        New Workplace
      </a-button>
    </div>
    <!-- WORKPLACE FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New Workplace"
      @ok="submitForm"
      okText="submit"
    >
      <a-form :model="formState">
        <div class="mt-10">
          <div class="grid grid-cols-3 gap-3">
            <a-form-item class="row-span-3">
              <a-upload-dragger
                v-model:fileList="formState.workplace_photo"
                name="photo"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload workplace photo',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">Click or drag workplace photo</p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
            <div class="col-span-2">
              <a-form-item
                class=""
                :rules="[
                  { required: false, message: 'Please input workplace name!' },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_name"
                  placeholder="enter workplace name"
                  allow-clear
                />
              </a-form-item>
            </div>
            <div class="-mt-5">
              <a-form-item>
                <span class="text-gray-400">select workplace type</span>
                <a-select
                  v-model:value="formState.workplace_type"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace type!',
                    },
                  ]"
                  placeholder="Please select workplace type"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >
                  <a-select-option value="shade">Shade</a-select-option>
                  <a-select-option value="container">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
            <a-form-item class="-mt-5">
              <span class="text-gray-400">select workplace staus</span>
              <a-select
                v-model:value="formState.workplace_status"
                :rules="[
                  {
                    required: false,
                    message: 'Please select workplace type!',
                  },
                ]"
                placeholder="Please select workplace type"
              >
                <a-select-option value="free">Free</a-select-option>
                <a-select-option value="taken">Taken</a-select-option>
                <a-select-option value="partially_taken"
                  >Partial Taken</a-select-option
                >
              </a-select>
            </a-form-item>
          </div>

          <div class="grid grid-cols-4 gap-2">
            <a-form-item
              :rules="[{ required: true, message: 'Please select your city!' }]"
            >
              <span class="text-gray-400 ml-1">Select city</span>
              <a-select
                v-model:value="formState.workplace_city"
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
                v-model:value="formState.workplace_subcity"
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

            <a-form-item
              :rules="[
                { required: true, message: 'Please select your woreda!' },
              ]"
            >
              <span class="text-gray-400 ml-1">Select woreda</span>
              <a-select
                v-model:value="formState.workplace_woreda"
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
                v-model:value="formState.workplace_kebele"
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
        </div>

        <!-- if workplace type iscondominium  -->
        <div class="">
          <div class="">If Workplace Type is Condominium</div>
          <div class="grid grid-cols-3 gap-2">
            <a-input
              v-model:value="formState.workplace_condominium_amount"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="formState.numberof_block_ineach_condominium"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number block in each condominium"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="formState.workplace_block_size"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter block size (area)"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-2">
            <a-input
              v-show="formState.workplace_condominium_amount === '1'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <a-input
              v-show="formState.workplace_condominium_amount === '2'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '2'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium two"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <a-input
              v-show="formState.workplace_condominium_amount === '3'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '3'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium two"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '3'"
              v-model:value="formState.condominium_number_three"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium three"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-4 gap-3">
            <a-input
              v-show="formState.workplace_condominium_amount === '4'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                {
                  required: false,
                  message: 'Please enter number of condominium one!',
                },
              ]"
              placeholder="number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '4'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium two"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '4'"
              v-model:value="formState.condominium_number_three"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium three"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.workplace_condominium_amount === '4'"
              v-model:value="formState.condominium_number_four"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium four"
              allow-clear
              class="mb-6"
            />
          </div>
        </div>

        <!-- if workplace type is container -->
        <div class="">
          <div>if workplace type is container</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  { required: true, message: 'Please container number!' },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_container_number"
                  placeholder="enter container number"
                />
              </a-form-item>
            </div>
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  { required: true, message: 'Please enter container size!' },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_container_size"
                  placeholder="enter container size"
                />
              </a-form-item>
            </div>
          </div>
        </div>
        <!-- if workplace type is shade -->
        <div class="">
          <div>if workplace type is shade</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  {
                    required: true,
                    message: 'Please enter workplace shade number!',
                  },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_shade_number"
                  placeholder="enter shade number"
                />
              </a-form-item>
            </div>
            <div class="">
              <a-form-item
                name="name"
                :rules="[{ required: true, message: 'Please shade size!' }]"
              >
                <a-input
                  v-model:value="formState.workplace_shade_size"
                  placeholder="enter shade size"
                />
              </a-form-item>
            </div>
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
  workplace_photo: [],
  workplace_city: "",
  workplace_subcity: "",
  workplace_woreda: "",
  workplace_kebele: "",
  workplace_status: "",
  workplace_type: "",
  workplace_condominium_amount: "",
  workplace_condominium_number_one: "",
  workplace_condominium_number_two: "",
  workplace_condominium_number_three: "",
  workplace_condominium_number_four: "",
  workplace_numberof_block_ineach_condominium: "",
  workplace_block_size: "",
  workplace_container_size: "",
  workplace_container_number: "",
  workplace_shade_number: "",
  workplace_shade_size: "",
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

    const response = await fetch("http://127.0.0.1:8000/api/workplace", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      message.success("workplace information created successfully");
      open.value = false;
    } else {
      message.error("Failed to save workplace information");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    message.error("Error submitting form");
  }
};
</script>
