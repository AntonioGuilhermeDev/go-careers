<template>
  <div class="w-full h-10 border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-brand-green-1">1653 </span><span>vagas relacionadas</span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubnav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
