<template>
  <div>
    <a-button type="primary" @click="visible = true">New Woreda</a-button>
    <a-modal
      v-model:open="visible"
      title="Register New Woreda"
      ok-text="Create"
      cancel-text="Cancel"
      @ok.prevent="onOk"
    >
      <a-form :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item name="subcity_id" has-feedback>
          <a-select
            v-model:value="formState.subcity_id"
            placeholder="Please select the subcity"
          >
            <a-select-option
              v-for="subcity in subcities"
              :key="subcity.id"
              :value="subcity.id"
            >
              {{ subcity.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="name">
          <a-input
            v-model:value="formState.name"
            placeholder="Enter woreda name"
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
  subcity_id: null,
  name: "",
});
const subcities = ref([]);

const fetchSubcity = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/subcity");
    const data = await response.json();
    subcities.value = data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    notification.error({
      message: "Error",
      description: "Error fetching subcity data.",
    });
  }
};

const onOk = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/woreda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subcity_id: formState.subcity_id,
        name: formState.name,
      }),
    });

    if (response.status === 201) {
      // Assuming 201 means success
      const responseData = await response.json();
      notification.success({
        message: "Woreda created successfully!",
        description: "Woreda created successfully!",
      });
      console.log("Woreda created successfully:", responseData);
      eventBus.value.dispatchEvent(
        new CustomEvent("woreda-added", { detail: responseData })
      );
      formState.subcity_id = null;
      formState.name = "";
    } else {
      notification.error({
        message: "Error",
        description: "Error creating woreda.",
      });
      console.error("Error creating woreda:", response.statusText);
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

fetchSubcity(); // Fetch subcities when component is initialized
</script>

<style scoped>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
