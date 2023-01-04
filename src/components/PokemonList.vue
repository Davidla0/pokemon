<template>
  <section class="pokemon-list">
    <div v-if="!pokemons.length"><Loader /></div>
    <ul v-else>
      <TransitionGroup name="list">
        <li v-for="pokemon in pokemons" :key="pokemon.id">
          <RouterLink :to="`/pokemon/${pokemon.id}`">
            <PokemonPreview :pokemon="pokemon" :filterBy="filterBy" />
          </RouterLink>
        </li>
      </TransitionGroup>
    </ul>
  </section>
</template>

<script>
import PokemonPreview from "@/components/PokemonPreview.vue";
import Loader from "@/components/Loader.vue";
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
    filterBy: {
      type: Text,
      required: true,
    },
  },
  components: {
    PokemonPreview,
    Loader,
  },
};
</script>

<style lang="scss">
.pokemon-list {
  position: relative;
  float: left;
  width: 315px;
  flex: 5;

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 10px;
    text-align: center;
    top: 0;
    &:hover {
      animation-play-state: paused;
    }

    > li {
      padding: 20px;
      background-color: whitesmoke;
      font-family: auto;
      display: block;
      margin: 5px;
      box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
        rgb(9 30 66 / 8%) 0px 0px 0px 1px;
      border-radius: 9px;
      border: 3px solid #356abd;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}

</style>