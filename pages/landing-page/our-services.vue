<template>
  <div class="">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @submit.prevent="submitForm"
    >
      <a-form-item
        label="Enter Service Title"
        name="service_title"
        :rules="[
          { required: true, message: 'Please input the service title!' },
        ]"
      >
        <a-input v-model:value="formState.service_title" />
      </a-form-item>

      <a-form-item
        label="Service Definition"
        name="service_definition"
        :rules="[
          { required: true, message: 'Please input the service definition!' },
        ]"
      >
        <a-input v-model:value="formState.service_definition" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import axios from "axios";

const formState = reactive({
  service_title: "",
  service_definition: "",
});

const submitForm = async () => {
  try {
    const csrfToken = document.head.querySelector(
      'meta[name="csrf-token"]'
    ).content; // Assuming you're using `nuxt.config.js`

    const response = await axios.post(
      "http://127.0.0.1:8000/api/ourservices",
      formState,
      {
        headers: {
          "X-CSRF-TOKEN": csrfToken,
        },
      }
    );
    alert("Service saved successfully!");
  } catch (error) {
    console.error("Failed to save service:", error);
    alert(
      "Failed to save service, please check the console for more information."
    );
  }
};
</script>
