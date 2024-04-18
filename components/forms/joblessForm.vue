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
          >
            <a-select-option value="shanghai">Male</a-select-option>
            <a-select-option value="beijing">Female</a-select-option>
          </a-select>
        </div>
        <div class="">
          <a-input
            v-model:value="jobless_grandfather_name"
            placeholder="please enter your grandfather name"
            allow-clear
            class="mb-6"
          />
          <a-input
            type="number"
            v-model:value="jobless_grandfather_name"
            placeholder="please enter your age"
            allow-clear
            class=""
          />
        </div>
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
