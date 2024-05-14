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

</script>


