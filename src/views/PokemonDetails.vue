<template>
  <div v-if="pokemon" class="pokemon-details">
    <h1>pokemon Details</h1>
    <h2>{{ pokemon.name }}</h2>
    <img :src="image" />
    <h3>{{ pokemon.description }}</h3>
    <div class="types">
      <h3>types:</h3>
      <h3 v-for="type in pokemon.types" :key="type" class="type">
        {{ type }}&nbsp;
      </h3>
    </div>

    <div class="eval-section">
      <button
        v-for="eva in evals"
        class="eva-btn"
        :key="eva"
        @click="getPokemon(eva[0].id)"
      >
        {{ eva[0]?.name }}
      </button>
    </div>
    <button class="home-btn">
      <RouterLink to="/pokemons">Home</RouterLink>
    </button>
  </div>
  <div v-else>Loading pokemon details...</div>
</template>

<script>
import { pokemonService } from "@/services/pokemon.service.js";
export default {
  data() {
    return {
      pokemon: null,
      image: "",
      evals: [],
    };
  },
  created() {
    this.getPokemon();
  },
  methods: {
    async getPokemon(id = this.$route.params.id) {
      // this.$router.push(`/pokemon/${id}`);
      this.pokemon = await pokemonService.get(id);
      this.image = this.pokemon.image_url;
      if (this.evals.length === 0) {
        this.evals.push([this.pokemon])
        this.getEvaPokemons();
      }
    },

    getEvaPokemons() {
      const pokemons = this.$store.getters.pokemons;
      let currPokemon = this.pokemon;
      let isUpgradePokemon = true
      let isPreviousPokemon = true;

      while (isUpgradePokemon) {
        const newPokemon = this.up(currPokemon, pokemons);

        if (newPokemon) {
          this.evals.push([newPokemon]);
          currPokemon = newPokemon;
        } else {
          isUpgradePokemon = false;
        }
      }

      currPokemon = this.pokemon;

      while (isPreviousPokemon) {
        const newPokemon = this.down(currPokemon, pokemons);

        if (newPokemon) {
          this.evals.push([newPokemon]);
          currPokemon = newPokemon;
        } else {
          isPreviousPokemon = false;
        }
      }
    },

    down(currPokemon, pokemons) {
      for (const pokemon of pokemons) {
        if (pokemon.evolutions.length > 0) {
          if (pokemon.evolutions[0].id === currPokemon.id) {
            return pokemon;
          }
        }
      }
      return null;
    },

    up(currPokemon, pokemons) {
      for (const pokemon of pokemons) {
        if (pokemon.id === currPokemon.evolutions[0].id) {
          return pokemon;
        }
      }
      return null;
    },
  },
};
</script>

<style lang="scss">
.pokemon-details {
  text-align: center;
  width: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  gap: 15px;
  font-family: "pokemon-solid";

  > h1 {
    margin-top: 10%;
  }

  .type {
    font-weight: bold;
  }

  .eval-section {
    display: flex;
    justify-content: space-between;
    width: 75%;

    > .eva-btn {
      border: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      height: 100px;
      width: 100px;
      cursor: pointer;
      color: hsl(217deg, 56%, 47%);
      background: white;
    }
  }

  .types > h3 {
    display: inline;
    color: red;
  }

  .home-btn {
    width: 30%;
    background: hsl(217deg 56% 47%);
    border-radius: 9px;
  }
}
</style>