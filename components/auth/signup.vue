<template>
  <div>
    <a-form
      :model="formState"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col mx-10 mb-8 w-64">
        <a-input
          v-model:value="formState.name"
          placeholder="Enter your name"
          :status="errors.name && touched.name ? 'error' : ''"
          @blur="() => handleBlur('name')"
          class="mt-5"
        />
        <div v-if="errors.name && touched.name" class="text-red-500">
          {{ errors.name }}
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
          v-model:value="formState.password"
          placeholder="Enter password"
          :status="errors.password && touched.password ? 'error' : ''"
          @blur="() => handleBlur('password')"
          class="mt-5"
        />
        <div v-if="errors.password && touched.password" class="text-red-500">
          {{ errors.password }}
        </div>
        <a-input-password
          v-model:value="formState.confirm_password"
          placeholder="confirm password"
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
import { reactive, watch, computed } from "vue";
import { useAuthStore } from "@/stores/auth"; // Assuming store is in `src/stores/auth.js`
import * as yup from "yup";

// Pinia store
const { register, error } = useAuthStore();

const formState = reactive({
  name: "",
  email: "",
  password: "",
  confirm_password: "",
});

const errors = reactive({
  name: null,
  email: null,
  password: null,
  confirm_password: null,
});

const touched = reactive({
  name: false,
  email: false,
  password: false,
  confirm_password: false,
});

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters long")
    .matches(/^[a-zA-Z]+$/, "Name must contain only letters"),
  email: yup
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
    .required("Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

watch(
  formState,
  () => {
    Object.keys(touched).forEach((field) => {
      if (touched[field]) validateField(field);
    });
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
    await register(formState);
    if (!error.value) {
      alert("Registration successful!");
    }
  } catch (error) {
    console.error("Form validation error:", error.message);
  }
};

const handleBlur = (field) => {
  touched[field] = true;
  validateField(field);
};
</script>