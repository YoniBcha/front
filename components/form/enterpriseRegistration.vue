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
        Add ENTERPRISE
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
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { cloneDeep } from "lodash-es";

const open = ref(false);
const showModal = () => {
  open.value = true;
};
const formState = reactive({});
</script>
