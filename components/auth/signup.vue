<template>
  <div>
    <a-form
      :model="formState"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col mx-10 mb-8 w-64">
        <a-input
          v-model:value="formState.employee_fullname"
          placeholder="Enter your full name"
          :status="
            errors.employee_fullname && touched.employee_fullname ? 'error' : ''
          "
          @blur="() => handleBlur('employee_fullname')"
          class="mt-5"
        />
        <div
          v-if="errors.employee_fullname && touched.employee_fullname"
          class="text-red-500"
        >
          {{ errors.employee_fullname }}
        </div>

        <a-input
          v-model:value="formState.employee_user_name"
          placeholder="Enter your username"
          :status="
            errors.employee_user_name && touched.employee_user_name
              ? 'error'
              : ''
          "
          @blur="() => handleBlur('employee_user_name')"
          class="mt-5"
        />
        <div
          v-if="errors.employee_user_name && touched.employee_user_name"
          class="text-red-500"
        >
          {{ errors.employee_user_name }}
        </div>

        <a-input
          v-model:value="formState.email"
          placeholder="Enter your email"
          :status="errors.email && touched.email ? 'error' : ''"
          @blur="() => handleBlur('email')"
          class="mt-5"
        />
        <div v-if="errors.email && touched.email" class="text-red-500">
          {{ errors.email }}
        </div>

        <a-input-password
          v-model:value="formState.employee_password"
          placeholder="Enter your password"
          :status="
            errors.employee_password && touched.employee_password ? 'error' : ''
          "
          @blur="() => handleBlur('employee_password')"
          class="mt-5"
        />
        <div
          v-if="errors.employee_password && touched.employee_password"
          class="text-red-500"
        >
          {{ errors.employee_password }}
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
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useAuthStore } from "@/stores/auth"; // Assuming store is in `src/stores/auth.js`
import * as yup from "yup";
import { message } from "ant-design-vue";

// Pinia store
const { register, error } = useAuthStore();

const formState = reactive({
  employee_user_name: "",
  employee_fullname: "",
  email: "",
  employee_password: "",
  confirm_password: "",
});

const errors = reactive({
  employee_user_name: null,
  employee_fullname: null,
  email: null,
  employee_password: null,
  confirm_password: null,
});

const touched = reactive({
  employee_user_name: false,
  employee_fullname: false,
  email: false,
  employee_password: false,
  confirm_password: false,
});

const schema = yup.object({
  employee_user_name: yup
    .string()
    .required("Employee username is required")
    .min(3, "Employee username must be at least 3 characters long")
    .matches(
      /^[a-zA-Z0-9_]+$/,
      "Employee username must contain only letters, numbers, or underscores"
    ),
  employee_fullname: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters long")
    .matches(/^[a-zA-Z]+$/, "Full name must contain only letters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  employee_password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  confirm_password: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("employee_password")], "Passwords must match"),
});

watch(
  formState,
  () => {
    if (touched.employee_user_name) validateField("employee_user_name");
    if (touched.employee_fullname) validateField("employee_fullname");
    if (touched.email) validateField("email");
    if (touched.employee_password) validateField("employee_password");
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
      employee_user_name: formState.employee_user_name,
      employee_fullname: formState.employee_fullname,
      email: formState.email,
      employee_password: formState.employee_password,
      confirm_password: formState.confirm_password,
    };

    const response = await fetch("http://127.0.0.1:8000/api/employee", {
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

<style>
/* Add any necessary styles here */
</style>
