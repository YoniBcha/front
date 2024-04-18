<template>
  <a-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <div class="">
      <div class="grid grid-cols-3 gap-4 h-48 m-5">
        <!-- photo upload -->
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
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>
