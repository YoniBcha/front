<template>
  <div>
    <a-form
      :model="formState"
      autocomplete="off"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col mx-10 mb-8 w-64">
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
      <a-space direction="vertical" style="width: 100%">
        <a-alert
          v-if="authStore.errorMessage"
          message="Error"
          :description="authStore.errorMessage"
          type="error"
          show-icon
        />
      </a-space>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import * as yup from "yup";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const router = useRouter();
const authStore = useAuthStore();

const formState = reactive({
  email: "",
  password: "",
  remember: true,
});

const errors = reactive({
  email: null,
  password: null,
});

const touched = reactive({
  email: false,
  password: false,
});

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

watch(
  formState,
  () => {
    if (touched.email) validateField("email");
    if (touched.password) validateField("password");
  },
  { deep: true }
);

const validateField = async (field) => {
  if (!touched[field]) {
    touched[field] = true;
  }
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
    console.log("Form is valid:", formState);
    await authStore.login(formState);
    if (!authStore.errorMessage) {
      router.push("/dashboard");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const handleBlur = (field) => {
  touched[field] = true;
  validateField(field);
};
</script>
