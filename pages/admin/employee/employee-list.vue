<template>
  <div class="">
    <div>Employee List</div>
    <a-button type="primary" @click="showModal">Add Employee</a-button>
    <a-modal
      @submit.prevent="handleSubmit"
      v-model:visible="isModalVisible"
      title="Add Employee"
    >
      <a-form :model="formState" autocomplete="off">
        <div class="flex flex-col mx-10 mb-8 w-64">
          <a-input
            v-model:value="formState.name"
            placeholder="Enter your full name"
            :status="errors.name && touched.name ? 'error' : ''"
            @blur="() => handleBlur('name')"
            class="mt-5"
          />
          <div v-if="errors.name && touched.name" class="text-red-500">
            {{ errors.name }}
          </div>

          <a-input
            v-model:value="formState.username"
            placeholder="Enter your username"
            :status="errors.username && touched.username ? 'error' : ''"
            @blur="() => handleBlur('username')"
            class="mt-5"
          />
          <div v-if="errors.username && touched.username" class="text-red-500">
            {{ errors.username }}
          </div>

          <a-input
            v-model:value="formState.emial"
            placeholder="Enter your email"
            :status="errors.emial && touched.emial ? 'error' : ''"
            @blur="() => handleBlur('emial')"
            class="mt-5"
          />
          <div v-if="errors.emial && touched.emial" class="text-red-500">
            {{ errors.emial }}
          </div>

          <a-input-password
            v-model:value="formState.password"
            placeholder="Enter your password"
            :status="errors.password && touched.password ? 'error' : ''"
            @blur="() => handleBlur('password')"
            class="mt-5"
          />
          <div v-if="errors.password && touched.password" class="text-red-500">
            {{ errors.password }}
          </div>

          <a-input-password
            v-model:value="formState.confirm_password"
            placeholder="Confirm your password"
            :status="
              errors.confirm_password && touched.confirm_password ? 'error' : ''
            "
            @blur="() => handleBlur('confirm_password')"
            class="mt-5"
          />
          <div
            v-if="errors.confirm_password && touched.confirm_password"
            class="text-red-500"
          >
            {{ errors.confirm_password }}
          </div>

          <a-button class="mt-5" type="primary" html-type="submit"
            >Register</a-button
          >
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const handleOk = () => {
  isModalVisible.value = false;
};

const handleCancel = () => {
  isModalVisible.value = false;
};

import { reactive, watch } from "vue";
import { useAuthStore } from "@/stores/auth"; // Assuming store is in `src/stores/auth.js`
import * as yup from "yup";
import { message } from "ant-design-vue";

// Pinia store
const { register, error } = useAuthStore();

const formState = reactive({
  username: "",
  name: "",
  emial: "",
  password: "",
  confirm_password: "",
});

const errors = reactive({
  username: null,
  name: null,
  emial: null,
  password: null,
  confirm_password: null,
});

const touched = reactive({
  username: false,
  name: false,
  emial: false,
  password: false,
  confirm_password: false,
});

const schema = yup.object({
  username: yup
    .string()
    .required("Employee username is required")
    .min(3, "Employee username must be at least 3 characters long")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Employee username must contain only letters, numbers, or underscores"
    ),
  name: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters long")
    .matches(/^[a-zA-Z]+$/, "Full name must contain only letters"),
  emial: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

watch(
  formState,
  () => {
    if (touched.username) validateField("username");
    if (touched.name) validateField("name");
    if (touched.emial) validateField("emial");
    if (touched.password) validateField("password");
    if (touched.confirm_password) validateField("confirm_password");
  },
  { deep: true }
);

const validateField = async (field) => {
  if (!touched[field]) touched[field] = true;
  try {
    await schema.validateAt(field, formState);
    errors[field] = null;
  } catch (error) {
    errors[field] = error.message;
  }
};

const handleSubmit = async () => {
  try {
    await schema.validate(formState, { abortEarly: false });

    const formData = {
      username: formState.username,
      name: formState.name,
      emial: formState.emial,
      password: formState.password,
      confirm_password: formState.confirm_password,
    };
    const response = await fetch("http://127.0.0.1:8000/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      message.success("Employee information created successfully");
      // Reset form or handle success as necessary
    } else {
      const errorData = await response.json();
      message.error(
        `Failed to save employee information: ${errorData.message}`
      );
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    message.error("Error submitting form");
  }
};

const handleBlur = (field) => {
  touched[field] = true;
  validateField(field);
};
</script>
