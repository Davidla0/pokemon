<template>
  <section class="pokemon-preview">
    <h3 v-html="getName" class="pokemon-name"></h3>
    <img :src="image" />
    <h3 class="pokemon-description">{{ pokemon.description }}...</h3>
    <h4 class="pokemon-types">{{ pokemon.types?.join(", ") }}</h4>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
    filterBy: {
      type: Text,
      required: true,
    },
  },
  mounted: function () {
    if (this.pokemon) {
      //is it empty
      this.image = this.pokemon.image_url; //replace placeholder
    }
    this.loading = false;
  },
  computed: {
    getName() {
      if (!this.filterBy.pokemon) return this.pokemon.name;
      var strRegExp = new RegExp(this.filterBy.pokemon, "i");
      return this.pokemon.name?.replace(
        strRegExp,
        `<p>${this.filterBy.pokemon}</p>`
      );
    },
  },
  data() {
    return {
      image: "", //url for placeholder image
      loading: true,
    };
  },
};
</script>

<style lang="scss">
.pokemon-preview {
  display: flex;
  flex-direction: column;

  .pokemon-name {
    font-family: "pokemon-solid";

    > p {
      display: inline-block;
      font-family: "pokemon-hollow";
      color: #356abd;
      font-weight: bold;
    }
  }

  .pokemon-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: fantasy;
  }

  .pokemon-types {
    color: red;
    font-family: fantasy;
  }
}
</style>