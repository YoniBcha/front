<template>
  <div>
    <a-form
      :model="formState"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col mx-10 mb-8 w-64">
        <a-input
          v-model:value="formState.username"
          placeholder="Enter username please"
          :status="errors.username && touched.username ? 'error' : ''"
          @blur="() => handleBlur('username')"
        />
        <div v-if="errors.username && touched.username" class="text-red-500">
          {{ errors.username }}
        </div>
        <a-input-password
          v-model:value="formState.password"
          placeholder="Enter password please"
          :status="errors.password && touched.password ? 'error' : ''"
          @blur="() => handleBlur('password')"
          class="mt-5"
        />
        <div v-if="errors.password && touched.password" class="text-red-500">
          {{ errors.password }}
        </div>
        <a-checkbox class="mt-6 mb-5" v-model:checked="formState.remember">
          Remember me
        </a-checkbox>
        <a-button type="primary" html-type="submit">Submit</a-button>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import { useRouter } from "vue-router";
import * as yup from "yup";
import { useAuthStore } from "@/stores/auth";
import { message } from "ant-design-vue";

const router = useRouter();

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});

const errors = reactive({
  username: null,
  password: null,
});

const touched = reactive({
  username: false,
  password: false,
});

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters long")
    .matches(
      /^[a-zA-Z]*$/,
      "Username must not contain numbers or special characters"
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

watch(
  formState,
  () => {
    if (touched.username) validateField("username");
    if (touched.password) validateField("password");
  },
  { deep: true }
);

const validateField = async (field) => {
  if (!touched[field]) {
    touched[field] = true;
  }
  try {
    if (schema.fields[field]) {
      await schema.validateAt(field, formState);
      errors[field] = null;
    }
  } catch (error) {
    errors[field] = error.message;
  }
};

const authStore = useAuthStore();

const handleSubmit = async () => {
  try {
    await schema.validate(formState, { abortEarly: false });
    console.log("Form is valid:", formState);
    await authStore.login(formState);

    const userRole = authStore.user.role;
    switch (userRole) {
      case "jobless":
        router.push("/jobless");
        break;
      case "enterprise":
        router.push("/enterprise");
        break;
      case "admin":
        router.push("/admin/dashboard");
        break;
      case "con_comp_maker":
        router.push("/admin/dashboard");
        break;
      case "recorders":
        router.push("/admin/dashboard");
        break;
      default:
        router.push("/login");
        break;
    }
    message.success("Login successful!");
  } catch (error) {
    console.error("Error:", error.message);
    message.error("Login failed. Please check your credentials and try again.");
  }
};

const handleBlur = (field) => {
  touched[field] = true;
  validateField(field);
};
</script>
