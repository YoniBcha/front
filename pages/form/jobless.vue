<template>
  <div class="w-[1000px] mx-auto my-20 border-2 border-blue-600 p-5">
    <a-form @submit.prevent="submitForm" ref="joblessForm">
      <div class="mt-10">
        <div class="grid grid-cols-3 gap-3">
          <a-form-item
            :rules="[{ required: true, message: 'Please upload your photo!' }]"
          >
            <a-upload-dragger
              v-model:fileList="formState.jobless_photo"
              name="photo"
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
          <div class="">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your full name!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_full_name"
                placeholder="Enter your fullname"
                allow-clear
              />
            </a-form-item>
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your username!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_username"
                placeholder="Enter your username"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[
                { required: true, message: 'Please input your password!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_password"
                placeholder="Enter your password"
                type="password"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[
                { required: true, message: 'Please confirm your password!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_confirm_password"
                placeholder="Confirm your password"
                type="password"
                allow-clear
              />
            </a-form-item>
          </div>
          <div class="">
            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please input your grandfather name!',
                },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_grandfather_name"
                placeholder="Enter your grandfather name"
                allow-clear
              />
            </a-form-item>
            <div class="flex gap-2">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please select your gender!' },
                ]"
                class="-mt-5"
              >
                <span class="text-gray-400">gender</span>
                <a-select
                  class="w-full"
                  placeholder="Select your gender"
                  v-model:value="formState.jobless_sex"
                  allow-clear
                >
                  <a-select-option value="Male">Male</a-select-option>
                  <a-select-option value="Female">Female</a-select-option>
                </a-select>
              </a-form-item>
              <a-form-item
                :rules="[{ required: true, message: 'Please input your age!' }]"
              >
                <a-input
                  v-model:value="formState.jobless_age"
                  placeholder="Enter your age"
                  type="number"
                  allow-clear
                />
              </a-form-item>
            </div>
            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_phonenumber"
                placeholder="Enter your phone number"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[{ required: true, message: 'Please input your email!' }]"
            >
              <a-input
                v-model:value="formState.jobless_email"
                placeholder="Enter your email"
                allow-clear
              />
            </a-form-item>
          </div>
        </div>

        <div class="grid grid-cols-4 gap-3">
          <a-form-item
            :rules="[{ required: true, message: 'Please select your city!' }]"
          >
            <span class="text-gray-400 ml-1">select city</span>
            <a-select
              v-model:value="formState.jobless_city"
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
            <span class="text-gray-400 ml-1">select subcity</span>
            <a-select
              v-model:value="formState.jobless_subcity"
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
            :rules="[{ required: true, message: 'Please select your woreda!' }]"
          >
            <span class="text-gray-400 ml-1">select woreda</span>
            <a-select
              v-model:value="formState.jobless_woreda"
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
            :rules="[{ required: true, message: 'Please select your kebele!' }]"
          >
            <span class="text-gray-400 ml-1">select kebele</span>
            <a-select
              v-model:value="formState.jobless_kebele"
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

        <div class="grid grid-cols-3 gap-3">
          <div class="mt-5">
            <a-form-item
              :rules="[
                { required: true, message: 'Please input your profession!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_profession"
                placeholder="Enter your profession"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please input your house number!',
                },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_housenumber"
                placeholder="Enter your house number"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[
                { required: true, message: 'Please input your family size!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_familysize"
                placeholder="Enter your family size"
                type="number"
                allow-clear
              />
            </a-form-item>
          </div>
          <div class="">
            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please select your living status!',
                },
              ]"
            >
              <span class="text-gray-400 ml-1">select living status</span>
              <a-select
                v-model:value="formState.jobless_livingstatus"
                placeholder="Select your living status"
                allow-clear
              >
                <a-select-option value="Living Alone"
                  >Living Alone</a-select-option
                >
                <a-select-option value="Living with Family"
                  >Living with Family</a-select-option
                >
                <a-select-option value="Living with Friends"
                  >Living with Friends</a-select-option
                >
              </a-select>
            </a-form-item>

            <a-form-item
              :rules="[
                { required: true, message: 'Please input your birth place!' },
              ]"
            >
              <a-input
                v-model:value="formState.jobless_birthplace"
                placeholder="Enter your birth place"
                allow-clear
              />
            </a-form-item>

            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please select your family status!',
                },
              ]"
              class="-mt-4"
            >
              <span class="text-gray-400 ml-1">select family status</span>
              <a-select
                v-model:value="formState.jobless_family_status"
                placeholder="Select your family status"
                allow-clear
              >
                <a-select-option value="Orphan">Orphan</a-select-option>
                <a-select-option value="Not Orphan">Not Orphan</a-select-option>
              </a-select>
            </a-form-item>
          </div>

          <div class="mt-5">
            <a-form-item
              :rules="[
                {
                  required: true,
                  message: 'Please upload your jobless_identification_card!',
                },
              ]"
            >
              <a-upload-dragger
                v-model:fileList="formState.jobless_identification_card"
                name="jobless_identification_card"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">
                  Click or drag yourjobless identification card here
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-3">
          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please select your marital status!',
              },
            ]"
          >
            <span class="text-gray-400 ml-1">Marital Status</span>
            <a-select
              v-model:value="formState.jobless_martial_status"
              placeholder="Select your marital status"
              allow-clear
            >
              <a-select-option value="Single">Single</a-select-option>
              <a-select-option value="Married">Married</a-select-option>
              <a-select-option value="Divorced">Divorced</a-select-option>
              <a-select-option value="Widowed">Widowed</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please select your disability status!',
              },
            ]"
          >
            <span class="text-gray-400 ml-1">Disability Status</span>
            <a-select
              v-model:value="formState.jobless_disability_status"
              placeholder="Select your disability status"
              allow-clear
            >
              <a-select-option value="Disabled">Disabled</a-select-option>
              <a-select-option value="Not Disabled"
                >Not Disabled</a-select-option
              >
            </a-select>
          </a-form-item>

          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please input your reason to come!',
              },
            ]"
            class="mt-5"
          >
            <a-input
              v-model:value="formState.jobless_reason_tocome"
              placeholder="Enter your reason to come"
              allow-clear
            />
          </a-form-item>
        </div>

        <div class="grid grid-cols-3 gap-4 mt-2">
          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please upload your training certificate!',
              },
            ]"
          >
            <a-upload-dragger
              v-model:fileList="formState.jobless_training_cirtificate"
              name="training_certificate"
            >
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">
                Click or drag your training certificate here
              </p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </a-upload-dragger>
          </a-form-item>

          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please upload your evidence card!',
              },
            ]"
          >
            <a-upload-dragger
              v-model:fileList="formState.jobless_evidence_card"
              name="evidence_card"
            >
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">
                Click or drag your evidence card here
              </p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </a-upload-dragger>
          </a-form-item>

          <a-form-item
            :rules="[
              {
                required: true,
                message: 'Please upload your priority evidence!',
              },
            ]"
          >
            <a-upload-dragger
              v-model:fileList="formState.jobless_priority_evidence"
              name="priority_evidence"
            >
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">
                Click or drag your priority evidence here
              </p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </a-upload-dragger>
          </a-form-item>
        </div>
      </div>
      <div class="flex jsutify end">
        <button type="submit" class="rounded text-white bg-blue-500 px-6 py-2">submit</button>
      </div>
    </a-form>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import * as yup from "yup";
import { InboxOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";

// Modal state
const open = ref(false);
const showModal = () => {
  open.value = true;
};

// Form state
const formState = reactive({
  jobless_photo: [],
  jobless_full_name: "",
  jobless_username: "",
  jobless_password: "",
  jobless_confirm_password: "",
  jobless_grandfather_name: "",
  jobless_sex: "",
  jobless_age: "",
  jobless_woreda: "",
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
  jobless_disability_status: "",
  jobless_reason_tocome: "",
  jobless_identification_card: [],
  jobless_training_cirtificate: [],
  jobless_evidence_card: [],
  jobless_priority_evidence: [],
});

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

// Yup validation schema
const schema = yup.object({
  jobless_full_name: yup.string().required("Full name is required"),
  jobless_username: yup.string().required("Username is required"),
  jobless_password: yup.string().required("Password is required"),
  jobless_confirm_password: yup
    .string()
    .oneOf([yup.ref("jobless_password")], "Passwords must match")
    .required("Confirm password is required"),
  jobless_grandfather_name: yup
    .string()
    .required("Grandfather's name is required"),
  jobless_sex: yup.string().required("Gender is required"),
  jobless_age: yup.number().required("Age is required").positive().integer(),
  jobless_woreda: yup.string().required("Woreda is required"),
  jobless_kebele: yup.string().required("Kebele is required"),
  jobless_city: yup.string().required("City is required"),
  jobless_subcity: yup.string().required("Subcity is required"),
  jobless_phonenumber: yup.string().required("Phone number is required"),
  jobless_email: yup.string().email().required("Email is required"),
  jobless_profession: yup.string().required("Profession is required"),
  jobless_housenumber: yup.string().required("House number is required"),
  jobless_familysize: yup
    .number()
    .required("Family size is required")
    .positive()
    .integer(),
  jobless_livingstatus: yup.string().required("Living status is required"),
  jobless_birthplace: yup.string().required("Birth place is required"),
  jobless_family_status: yup.string().required("Family status is required"),
  jobless_martial_status: yup.string().required("Marital status is required"),
  jobless_disability_status: yup
    .string()
    .required("Disability status is required"),
  jobless_reason_tocome: yup.string().required("Reason to come is required"),
});

const validateForm = async () => {
  try {
    await schema.validate(formState, { abortEarly: false });
    return true;
  } catch (errors) {
    const errorFields = {};
    errors.inner.forEach((error) => {
      errorFields[error.path] = {
        value: formState[error.path],
        errors: [error.message],
      };
    });
    refs.joblessForm.setFields(errorFields);
    return false;
  }
};

const submitForm = async () => {
  try {
    if (!(await validateForm())) {
      message.error("Validation failed. Please check your inputs.");
      return;
    }

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

    const response = await fetch("http://127.0.0.1:8000/api/jobless", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      message.success("Jobless information created successfully");
      open.value = false;
    } else {
      message.error("Failed to save jobless information");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    message.error("Error submitting form");
  }
};
</script>
