<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      para todos
    </h1>
    <h2 class="text-2xl font-light">Encontre seu próximo emprego na Go Careers</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementinList";
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Construir",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
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
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.construir {
  color: #1a73c8;
}

.criar {
  color: #34a853;
}

.projetar {
  color: #f9ab00;
}

.programar {
  color: #d93025;
}
</style>
