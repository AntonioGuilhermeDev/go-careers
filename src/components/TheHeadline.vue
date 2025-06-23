<template>
  <section>
    <h1>Construido para todos</h1>
    <h2>Encontre seu próximo emprego na Go Careers</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      sample: "Hello",
    };
  },
  created() {
    console.log("Hey, I've been created. My data exists. Look: ", this.sample);
  },
};
</script>
