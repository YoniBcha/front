<template>
    <input
      :value="value"
      @input="$emit('update:value', $event.target.value)"
      @keydown.enter="$emit('enter')"
      @blur="$emit('blur')"
      ref="input"
    />
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
        required: true,
      },
    },
    mounted() {
      // Focus the input when component is mounted
      this.$refs.input.focus();
    },
  };
  </script>
  