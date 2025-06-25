<template>
  <input
    type="text"
    :value="modelValue"
    class="w-full text-lg font-normal font:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    model: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value;
      this.$emit("update:modelValue", this.value);
    },
  },
};
</script>
