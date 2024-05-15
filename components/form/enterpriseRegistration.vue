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
      @ok.prevent="submitForm"
      okText="submit"
    >
      <a-form :model="formState" name="validate_other">
        <div class="mt-5">
          <!-- enterprise manager name and registration date -->
          <div class="grid grid-cols-12">
            <div class="col-start-1 col-end-4">
              <a-input
                v-model:value="formState.manager_id"
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
              <a-input
                v-model:value="formState.enterprise_username"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise user name!',
                  },
                ]"
                placeholder="enter enterprise username"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="col-start-10 col-end-13">
              <a-form-item
                :rules="[
                  { required: true, message: 'Please input your password!' },
                ]"
              >
                <a-input-password
                  placeholder="enter enterprise password"
                  v-model:value="formState.enterprise_password"
                />
              </a-form-item>
              <a-form-item
                :rules="[
                  {
                    required: true,
                    message: 'Please input enterpise password!',
                  },
                ]"
              >
                <a-input-password
                  placeholder="confirm enterprise password"
                  v-model:value="formState.confirm_enterprise_password"
                />
              </a-form-item>
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
              <p class="text-gray-400">enterprise type</p>
              <a-select
                placeholder="select your enterprise type"
                v-model:value="formState.enterprise_type"
                :rules="[
                  { required: false, message: 'Please select your type!' },
                ]"
                class="mb-4 w-full"
              >
                <a-select-option value="enterprise type">enterprise type</a-select-option>
              </a-select>

              <p class="text-gray-400">enterprise sector</p>
              <a-select
                placeholder="enter enterprise sector please"
                v-model:value="formState.enterprise_sector"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise sector!',
                  },
                ]"
                class="mb-6 w-full"
              >
                <a-select-option value="Male"
                  >enterprise sector</a-select-option
                >
              </a-select>
            </div>
            <div class="flex col-span-2 gap-3 row-span-1">
              <a-select
              label="enterprise city"
                placeholder="enter enterprise city"
                v-model:value="formState.enterprise_city_id"
                :rules="[
                  { required: false, message: 'Please enter enterprise city!' },
                ]"
                class="mb-6 w-full"
              >
                <a-select-option value="Male">Addis</a-select-option>
              </a-select>

              <a-select
                placeholder="enter enterprise subcity"
                v-model:value="formState.enterprise_subcity_id"
                :rules="[
                  { required: false, message: 'Please enter enterprise city!' },
                ]"
                class="mb-6 w-full"
              >
                <a-select-option value="ldeat">ldeta</a-select-option>
              </a-select>

              <a-select
                placeholder="enter enterprise kebele"
                v-model:value="formState.enterprise_kebele_id"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise kebele!',
                  },
                ]"
                class="mb-6 w-full"
              >
                <a-select-option value="ldeat">02</a-select-option>
              </a-select>
            </div>

            <div class="flex col-span-3 gap-3 row-span-1">
              <a-select
                placeholder="enter enterprise woreda"
                v-model:value="formState.enterprise_woreda_id"
                :rules="[
                  {
                    required: false,
                    message: 'Please enter enterprise woreda!',
                  },
                ]"
                class="mb-6 w-full"
              >
                <a-select-option value="ldeat">wo 02</a-select-option>
              </a-select>
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
const formState = reactive({
  enterprise_name: "",
  enterprise_username: "",
  enterprise_password: "",
  enterprise_city_id: "",
  enterprise_subcity_id: "",
  enterprise_woreda_id: "",
  enterprise_kebele_id: "",
  manager_id: "",
  enterprise_role: "enterprise",
  enterprise_status: "pass",
  enterprise_type: "",
  manager_id: "",
  enterprise_sector: "",
  enterprise_phone_number: "",
  enterprise_email: "",
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

<!-- 'city_id',
'subcity_id',
'woreda_id',
'jobless_id',
'kebele_id',
'enterprise_name',
'enterprise_role'
'enterprise_status',
'enterprise_type',
'enterprise_manager_name'
'enterprise_sector',
'enterprise_phone_number',
'enterprise_email',


'enterprise_stock_price',
'enterprise_taxpayer_identification_card',
'enterprise_taxpayer_identification_number',
'enterprise_approved_trade_name',
'enterprise_professional_qualification_certification',
'enterprise_business_plan',
'enterprise_ownership_ofbusiness_adress_and_approved_lease',
'enterprise_Price_per_share',
'enterprise_Approved_bylaws_of_establishment',
'enterprise_Business_license',
'enterprise_Bylaws_of_shares',
'enterprise_priority_evidence', -->
