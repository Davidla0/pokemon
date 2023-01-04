<template>
  <header class="app-header">
    <div @click="redirect" class="pokemon-logo">
      <img src="@/assets/Pokédex-logo.png" />
    </div>
    <ShowTime />
  </header>
</template>

<script>
import ShowTime from "@/components/ShowTime.vue";
export default {
  methods: {
    redirect() {
      this.$router.push("/pokemons");
    },
  },
  components: {
    ShowTime,
  },
};
</script>

<style lang="scss">

.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  padding-inline: 10px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
  font-size: 19px;
  background: white;
  border-radius: 9px;
  .pokemon-logo {
    width: 20%;
  }
}
</style>
