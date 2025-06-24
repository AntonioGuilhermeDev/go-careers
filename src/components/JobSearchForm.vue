<template>
  <form class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3">
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-2" />
    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="flex h-full flex-1 relative items-center py-3">
        <label class="absolute left-0 -top-10">Cargo</label>
        <input
          type="text"
          v-model="role"
          placeholder="Desenvolvedor de Software"
          class="w-full text-lg font-normal font:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full border-1 border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3"
      >
        em
      </span>
      <div class="flex h-full flex-1 relative items-center pl-3">
        <label class="absolute left-0 -top-10">Onde?</label>
        <input
          v-model="location"
          type="text"
          placeholder="São Paulo"
          class="w-full text-lg font-normal font:outline-none"
        />
      </div>
    </div>
    <action-button text="Buscar" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
