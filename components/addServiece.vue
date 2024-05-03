<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @submit.prevent="submitForm"
  >
    <a-form-item
      label="Enter service Title"
      name="service_title"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.service_title" />
    </a-form-item>

    <a-form-item
      label="service defination"
      name="service_defination"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.service_defination" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script setup>
import { reactive } from "vue";

const formState = reactive({
  service_title: "",
  service_defination: "",
});

const submitForm = async () => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/services",
      formState
    );
    console.log("Service created:", response.data);
  } catch (error) {
    alert("not saved made a mistake");
  }
};
</script>
