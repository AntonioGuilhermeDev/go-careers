<template>
  <section>
    <h1>{{ action }} para todos</h1>
    <h2>Encontre seu próximo emprego na Go Careers</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Construir",
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Construir", "Criar", "Projetar", "Programar"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>
