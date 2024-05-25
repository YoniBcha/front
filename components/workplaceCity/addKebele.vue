<template>
  <div class="">
    <a-button type="primary" @click="visible = true">New Kebele</a-button>
    <a-modal
      v-model:open="visible"
      title="Register New Kebele"
      ok-text="Create"
      cancel-text="Cancel"
      @ok.prevent="onOk"
    >
      <a-form :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item name="woreda_id" has-feedback>
          <a-select
            v-model:value="formState.woreda_id"
            placeholder="Please select woreda"
          >
            <a-select-option
              v-for="woreda in woredas"
              :key="woreda.id"
              :value="woreda.id"
            >
              {{ woreda.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="name">
          <a-input
            v-model:value="formState.name"
            placeholder="Enter kebele name"
          />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { notification } from "ant-design-vue";
import eventBus from "@/eventBus"; // Update the path to eventBus.js accordingly

const visible = ref(false);
const formState = reactive({
  woreda_id: null,
  name: "",
});
const woredas = ref([]);

const fetchWoreda = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/woreda");
    const data = await response.json();
    woredas.value = data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    notification.error({
      message: "Error",
      description: "Error fetching woreda data.",
    });
  }
};

const onOk = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/kebele", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        woreda_id: formState.woreda_id,
        name: formState.name,
      }),
    });

    if (response.status === 201) {
      // Assuming 201 means success
      const responseData = await response.json();
      notification.success({
        message: "Success",
        description: "Kebele created successfully!",
      });
      console.log("Kebele created successfully:", responseData);
      eventBus.value.dispatchEvent(
        new CustomEvent("kebele-added", { detail: responseData })
      );
      formState.woreda_id = null;
      formState.name = "";
    } else {
      notification.error({
        message: "Error",
        description: "Error creating kebele.",
      });
      console.error("Error creating kebele:", response.statusText);
    }
  } catch (error) {
    notification.error({
      message: "Error",
      description: "Unable to complete the request.",
    });
    console.error("Network or other error:", error);
  }

  visible.value = false;
};

fetchWoreda(); // Fetch woredas when component is initialized
</script>

<style scoped>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
