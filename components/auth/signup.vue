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
          v-model:value="formState.verifyPassword"
          placeholder="Verify password"
          :status="
            errors.verifyPassword && touched.verifyPassword ? 'error' : ''
          "
          @blur="() => handleBlur('verifyPassword')"
          class="mt-5"
        />
        <div
          v-if="errors.verifyPassword && touched.verifyPassword"
          class="text-red-500"
        >
          {{ errors.verifyPassword }}
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
import * as yup from "yup";

const formState = reactive({
  name: "",
  email: "",
  password: "",
  verifyPassword: "",
  remember: true,
});

const errors = reactive({
  name: null,
  email: null,
  password: null,
  verifyPassword: null,
});

const touched = reactive({
  name: false,
  email: false,
  password: false,
  verifyPassword: false,
});

const schema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "name must be at least 3 characters long")
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
  verifyPassword: yup
    .string()
    .required("Please verify your password")
    .when("password", {
      is: (val) => val !== undefined && val !== null && val !== "",
      then: yup.string().oneOf([yup.ref("password")], "Passwords must match"),
      otherwise: yup.string().nullable(),
    }),
});

watch(
  formState,
  () => {
    if (touched.name) validateField("name");
    if (touched.email) validateField("email");
    if (touched.password) validateField("password");
    if (touched.verifyPassword) validateField("verifyPassword");
  },
  { deep: true }
);

const validateField = async (field) => {
  if (!touched[field]) {
    touched[field] = true;
  }
  try {
    await schema.fields[field].validate(formState[field]);
    errors[field] = null;
  } catch (error) {
    errors[field] = error.message;
  }
};

const handleSubmit = async () => {
  try {
    await schema.validate(formState, { abortEarly: false });
    console.log("Form is valid:", formState);
    const data = JSON.stringify(formState);

    const response = await useFetch(
      "http://127.0.0.1:8000/api/register-employee",
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    } else {
      alert("registered");
    }
    const responseData = await response.json();
  } catch (error) {
    console.error("Error:", error.message);
    // Handle errors (e.g., display error message)
  }
};

const handleBlur = (field) => {
  touched[field] = true;
  validateField(field);
};
</script>
