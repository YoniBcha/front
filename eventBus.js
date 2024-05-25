import { ref } from "vue";

const eventBus = ref(new EventTarget());

export default eventBus;
