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
                v-model:fileList="formState.photo"
                name="photo"
                action="/upload.do"
                :rules="[
                  { required: false, message: 'Please upload your photo!' },
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
          </a-form-item>
        </div>
        <div class="flex flex-col">
          <a-input
            v-model:value="jobless_fullname"
            :rules="[
              { required: false, message: 'Please input your fullname!' },
            ]"
            placeholder="enter your full name"
            allow-clear
            class="mb-6"
          />
          <a-select
            v-model:value="formState.sex"
            :rules="[{ required: false, message: 'Please select your sex!' }]"
            placeholder="please enter your gender"
            class="mb-6"
          >
            <a-select-option value="male">Male</a-select-option>
            <a-select-option value="female">Female</a-select-option>
          </a-select>
          <a-input
            v-model:value="jobless_city"
            :rules="[{ required: false, message: 'Please select your sex!' }]"
            placeholder="enter your city name"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_phonenumber"
            :rules="[
              { required: false, message: 'Please select your phone number!' },
            ]"
            placeholder="enter your phone number"
            allow-clear
            class="mb-6"
          />
        </div>
        <div class="">
          <a-input
            v-model:value="jobless_grandfather_name"
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
              v-model:value="jobless_age"
              :rules="[{ required: false, message: 'Please select your age!' }]"
              placeholder="your age"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="jobless_kebele"
              :rules="[
                { required: false, message: 'Please select your kebele!' },
              ]"
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
          v-model:value="jobless_profession"
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

      <!-- upload identification card -->
      <div class="grid grid-cols-3 gap-4 h-48 m-3">
        <div class="flex flex-col p-2">
          <a-input
            v-model:value="jobless_housenumber"
            :rules="[
              { required: false, message: 'Please select your house number!' },
            ]"
            placeholder="enter your house number"
            allow-clear
            class="mb-6"
          />
          <a-input
            type="number"
            v-model:value="jobless_familysize"
            :rules="[
              { required: false, message: 'Please select your family size!' },
            ]"
            placeholder="enter your fmaily size"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_livingstatus"
            :rules="[
              { required: false, message: 'Please select your living status!' },
            ]"
            placeholder="enter your living status"
            allow-clear
          />
        </div>
        <div class="pt-2 left-0">
          <a-input
            v-model:value="jobless_birthplace"
            :rules="[
              { required: false, message: 'Please select your birth place!' },
            ]"
            placeholder="please enter your birth place"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_family_status"
            :rules="[
              { required: false, message: 'Please select your fmily status!' },
            ]"
            placeholder="enter your family status"
            allow-clear
            class="mb-6"
          />
          <a-input
            v-model:value="jobless_martial_status"
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

      <!-- profession certificate and jobless evidence card -->
      <div class="grid grid-cols-2 gap-4 h-48 m-5 pt-2 mb-20">
        <div class="">
          <label for="" class="text-lg text-gray-600"
            >If you and any certificate in specific profection</label
          >
          <a-form-item class="mt-4">
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
                  Click or drag your profession cirtificate
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-form-item>
        </div>
        <div class="">
          <div class="">
            <a-input
              v-model:value="jobless_grandfather_name"
              placeholder="please enter profession name"
              allow-clear
            />
          </div>
          <div class="mt-5">
            <label for="" class="text-lg text-gray-600"
              >Upload Jobless evidence card here</label
            >
            <a-form-item class="mt-4">
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
                    Click or drag your jobless evidence
                  </p>
                  <p class="ant-upload-hint">
                    Support for a single or bulk upload.
                  </p>
                </a-upload-dragger>
              </a-form-item>
            </a-form-item>
          </div>
        </div>
      </div>

      <!-- and lastly proiority evidence card -->
      <div class="grid grid-cols-2 gap-4 h-48 m-5">
        <div class="flex items-center">
          <label for="" class="text-lg text-gray-600"
            >If you and any priority evidence</label
          >
        </div>
        <div class="">
          <a-form-item class="mt-4">
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
                  Click or drag your priority cirtificate
                </p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </a-form-item>
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
</script>
