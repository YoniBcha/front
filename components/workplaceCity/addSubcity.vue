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
const visible = ref(false);
const formState = reactive({
  city_id: null,
  name: "",
});
const cities = ref([]);

const fetchCities = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/cities");
    const data = await response.json();
    cities.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
    this.error = error.message; // Set error message
  }
};

const onOk = async () => {
  try {
    const response = await useFetch("http://127.0.0.1:8000/api/subcities", {
      method: "POST",
      body: {
        city_id: formState.city_id,
        name: formState.name,
      },
    });

    if (response.ok) {
      formState.city_id = null;
      formState.name = "";
    } else {
      console.error("Error saving subcity:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
  visible.value = false;
};

fetchCities(); // Fetch cities when component is initialized
</script>
