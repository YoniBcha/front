<template>
  <div>
    <a-button type="primary" @click="visible = true">New Subcity</a-button>
    <a-modal
      v-model:open="visible"
      title="Register New Subcity"
      ok-text="Create"
      cancel-text="Cancel"
      @ok.prevent="onOk"
    >
      <a-form :model="formState" layout="vertical" name="form_in_modal">
        <a-form-item name="city_id" has-feedback>
          <a-select
            v-model:value="formState.city_id"
            placeholder="Please select the city"
          >
            <a-select-option
              v-for="city in cities"
              :key="city.id"
              :value="city.id"
            >
              {{ city.name }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item name="name">
          <a-input
            v-model:value="formState.name"
            placeholder="Enter subcity name"
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
  city_id: null,
  name: "",
});
const cities = ref([]);

const fetchCities = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/city", {
      method: "GET",
    });
    const data = await response.json();
    cities.value = data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    notification.error({
      message: "Error",
      description: "Error fetching cities data.",
    });
  }
};

const onOk = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/subcity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        city_id: formState.city_id,
        name: formState.name,
      }),
    });

    if (response.status === 201) {
      // Assuming 201 means success
      const responseData = await response.json();
      notification.success({
        message: "Success",
        description: "Subcity created successfully!",
      });
      console.log("Subcity created successfully:", responseData);
      eventBus.value.dispatchEvent(
        new CustomEvent("subcity-added", { detail: responseData })
      );
      formState.city_id = null;
      formState.name = "";
    } else {
      notification.error({
        message: "Error",
        description: "Error creating subcity.",
      });
      console.error("Error creating subcity:", response.statusText);
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

fetchCities(); // Fetch cities when component is initialized
</script>

<style scoped>
.collection-create-form_last-form-item {
  margin-bottom: 0;
}
</style>
