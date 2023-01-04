<template>
  <section class="app-layout">
    <div v-if="!pokemons.length"><Loader /></div>
    <Sidebar @filter="onFilter" :types="getTypes" />
    <PokemonList :pokemons="pokemonsToShow" :filterBy="getFilter" />
  </section>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";
import Sidebar from "@/components/Sidebar.vue";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      filterBy: {
        pokemon: "",
        selectedTypes: [],
      },
      types: [],
    };
  },
  methods: {
    onFilter(filterBy) {
      console.log(filterBy);
      this.filterBy = filterBy;
    },
  },
  computed: {
    pokemons() {
      return this.$store.getters.pokemons;
    },
    pokemonsToShow() {
      let pokemons = this.pokemons;

      if (this.filterBy.pokemon) {
        const regex = new RegExp(this.filterBy.pokemon, "i");
        pokemons = this.pokemons.filter((pokemon) => regex.test(pokemon.name));
      }

      if (this.filterBy.selectedTypes.length > 0) {
        pokemons = this.pokemons.filter((pokemon) =>
          pokemon.types.some((type) =>
            this.filterBy.selectedTypes.includes(type)
          )
        );
      }
      return pokemons;
    },
    getFilter() {
      return this.filterBy;
    },
    getTypes() {
      const types = [];
      for (let i = 0; i < this.pokemons.length; i++) {
        for (const key in this.pokemons[i].types) {
          if (!types.includes(this.pokemons[i].types[key]))
            types.push(this.pokemons[i].types[key]);
        }
      }

      this.types = types;
      return types;
    },
  },
  async created() {
    this.$store.dispatch({ type: "loadPokemons" });
  },
  components: {
    PokemonList,
    Sidebar,
    Loader,
  },
};
</script>

<style lang="scss">
.app-layout {
  // height: 100vh;
  display: flex;
  gap: 100px;
  margin: 50px 0;
}
</style>