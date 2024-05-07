<template>
  <div>
    <a-button type="primary" @click="visible = true">New Kebele</a-button>
    <a-modal
      v-model:open="visible"
      title="Register New City"
      ok-text="Create"
      cancel-text="Cancel"
      @ok.prevent="onOk"
    >
      <a-form
        ref="formRef"
        :model="formState"
        layout="vertical"
        name="form_in_modal"
      >
        <a-form-item
          name="name"
          :rules="[{ required: true, message: 'Please input your city name!' }]"
        >
          <a-input
            v-model:value="formState.name"
            placeholder="enter city name"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
const formRef = ref(null); // Changed to null initially
const visible = ref(false);
const formState = reactive({
  name: "",
});

const onOk = async () => {
  // Made onOk async
  await formRef.value.validateFields(); // Await after validation

  try {
    // Assuming ohmyfetch handles CSRF token automatically
    const response = await useFetch("http://127.0.0.1:8000/api/cities", {
      method: "POST",
      body: formState,
    });

    if (response.ok) {
      alert("City name saved successfully!");
      console.log("City name saved successfully:", response.data);
      formState.name = "";
    } else {
      console.error("Error saving city name:", response.statusText);
    }
  } catch (error) {
    alert("City name is not saved!");
    console.error("Error:", error);
  }

  visible.value = false;
  formRef.value.resetFields();
};
</script>

<style scoped>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
