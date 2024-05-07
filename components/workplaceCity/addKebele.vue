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
        <a-form-item name="city_id" has-feedback>
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
const visible = ref(false);
const formState = reactive({
  woreda_id: null,
  name: "",
});
const woredas = ref([]);

const fetchCities = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/woredas");
    const data = await response.json();
    woredas.value = data;
  } catch (error) {
    alert("Error fetching data");
  }
};

const onOk = async () => {
  try {
    const response = await useFetch("http://127.0.0.1:8000/api/kebeles", {
      method: "POST",
      body: {
        woreda_id: formState.woreda_id,
        name: formState.name,
      },
    });

    if (response.ok) {
      formState.woreda_id = null;
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
