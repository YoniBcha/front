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
        <a-form-item name="city_id" has-feedback>
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
const visible = ref(false);
const formState = reactive({
  subcity_id: null,
  name: "",
});
const subcities = ref([]);

const fetchCities = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/subcities");
    const data = await response.json();
    subcities.value = data;
  } catch (error) {
    console.error("Error fetching data:", error);
    this.error = error.message; // Set error message
  }
};

const onOk = async () => {
  try {
    const response = await useFetch("http://127.0.0.1:8000/api/woredas", {
      method: "POST",
      body: {
        subcity_id: formState.subcity_id,
        name: formState.name,
      },
    });

    if (response.ok) {
      formState.subcity_id = null;
      formState.name = "";
    } else {
      console.error("Error saving subcity:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  visible.value = false;
};

fetchCities();
</script>

