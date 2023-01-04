<template>
  <section class="sidebar">
    <PokemonFilter :types="types" @filter="onFilter" />
  </section>
</template>

<script>
import PokemonFilter from "@/components/PokemonFilter.vue";

export default {
  props: {
    types: {
      type: Array,
      required: true,
    },
    onFilter: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    PokemonFilter,
  },
};
</script>

<style lang="scss">
.sidebar {
  flex: 1;
  position: relative;
}

@media (max-width: 920px){
  .sidebar{
    position: absolute;
  }
}
</style>