<template>
  <a-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <div class="">
      <!-- upload profile photo -->
      <div class="grid grid-cols-3 gap-4 h-48 m-5">
        <div class="">
          <a-form-item style="width: 100%">
            <a-form-item name="dragger" no-style>
              <a-upload-dragger
                v-model:fileList="formState.dragger"
                name="files"
                action="/upload.do"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">
                  Click or drag your photo to this area to upload
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-form-item>
        </div>
        <div class="flex flex-col">
          <a-input
            v-model:value="jobless_fullname"
            placeholder="enter your full name"
            allow-clear
            class="mb-6"
          />
          <a-select
            v-model:value="formState.region"
            placeholder="please enter your gender"
            class="mb-6"
          >
            <a-select-option value="shanghai">Male</a-select-option>
            <a-select-option value="beijing">Female</a-select-option>
          </a-select>
          <a-input
            v-model:value="jobless_city"
            placeholder="enter your city name"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_phonenumber"
            placeholder="enter your phone number"
            allow-clear
            class="mb-6"
          />
        </div>
        <div class="">
          <a-input
            v-model:value="jobless_grandfather_name"
            placeholder="please enter your grandfather name"
            allow-clear
            class="mb-6"
          />
          <div class="flex">
            <a-input
              type="number"
              v-model:value="jobless_age"
              placeholder="your age"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="jobless_kebele"
              placeholder="your kebele"
              allow-clear
              class="mb-6 ml-2"
            />
          </div>
          <a-input
            v-model:value="jobless_subcity"
            placeholder="enter your Sub City name"
            allow-clear
            class="mb-6"
          />
          <a-input
            type="email"
            v-model:value="jobless_subcity"
            placeholder="enter your email please"
            allow-clear
            class="mb-6"
          />
        </div>
      </div>

      <div class="mx-5 mt-12">
        <a-input
          v-model:value="jobless_grandfather_name"
          placeholder="please enter your profession to tran and work with"
          allow-clear
          class="mb-6"
        />
      </div>

      <!-- upload identification card -->
      <div class="grid grid-cols-3 gap-4 h-48 m-3">
        <div class="flex flex-col p-2">
          <a-input
            v-model:value="jobless_housenumber"
            placeholder="enter your house number"
            allow-clear
            class="mb-6"
          />
          <a-input
            type="number"
            v-model:value="jobless_familysize"
            placeholder="enter your fmaily size"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_livingstatus"
            placeholder="enter your living status"
            allow-clear
          />
        </div>
        <div class="pt-2 left-0">
          <a-input
            v-model:value="jobless_birthplace"
            placeholder="please enter your birth place"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_family_status"
            placeholder="enter your family status"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_martial_status"
            placeholder="enter your martial status"
            allow-clear
          />
        </div>
        <a-form-item class="pl-8 pb-18 w-96">
          <a-form-item name="dragger" no-style>
            <a-upload-dragger
              v-model:fileList="formState.dragger"
              name="files"
              action="/upload.do"
            >
              <p class="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p class="ant-upload-text">
                Click or drag your photo to this area to upload
              </p>
              <p class="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>
      </div>

      <div class="flex mx-5 mt-5">
        <a-input
          v-model:value="jobless_grandfather_name"
          placeholder="please enter disability staus"
          allow-clear
        />
        <a-input
          v-model:value="jobless_grandfather_name"
          placeholder="enter your reason to come"
          allow-clear
          class="ml-5"
        />
      </div>

      <div class="grid grid-cols-3 gap-4 h-48 m-5">
        
      </div>

    </div>
  </a-form>
</template>
<script setup>
import { reactive } from "vue";
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const formState = reactive({
  "input-number": 3,
  "checkbox-group": ["A", "B"],
  rate: 3.5,
});
</script>
