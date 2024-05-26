<template>
  <div>
    <a-button type="primary" @click="visible = true">New City</a-button>
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
        <div class="w-full">
          <a-input
            v-model:value="formState.name"
            placeholder="Enter city name"
            class="w-full"
          />
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import eventBus from '@/eventBus';  

const formRef = ref(null);
const visible = ref(false);
const formState = reactive({
  name: "",
});

const onOk = async () => {
  try {
    await formRef.value.validateFields();

    const response = await fetch("http://127.0.0.1:8000/api/city", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const responseData = await response.json();

    if (response.status === 201) {
      notification.success({
        message: 'City is Registered successfully',
        description: responseData.message,
      });
      console.log("City name saved successfully:", responseData);
      eventBus.value.dispatchEvent(new CustomEvent('city-added', { detail: responseData }));
      formState.name = "";
    } else {
      notification.error({
        message: 'Error',
        description: responseData.message || 'Error saving city name.',
      });
      console.error("Error saving city name:", responseData);
    }
  } catch (error) {
    notification.error({
      message: 'Error',
      description: 'City name is not saved!',
    });
    console.error("Error:", error);
  }

  visible.value = false;
};
</script>

<style scoped>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
