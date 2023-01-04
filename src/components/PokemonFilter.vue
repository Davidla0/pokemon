<template>
  <div class="burger-menu" @click="toggleMenu">{{ isOpen ? "<<" : ">>" }}</div>
  <section :class="`pokemon-filter ${isOpen ? 'open' : 'close'}`">
    <div class="search-section">
      <input
        type="text"
        @input="onFilter"
        v-model="filterBy.pokemon"
        placeholder="Search for pokemon"
      />
    </div>
    <div class="checkbox-types">
      <div v-for="type in types" :key="type">
        <input
          type="checkbox"
          @change="onFilter"
          :id="`${type}`"
          :value="`${type}`"
          v-model="filterBy.selectedTypes"
        />
        <label :for="`${type}`">{{ type }}</label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    types: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filterBy: { pokemon: "", selectedTypes: [] },
      isOpen: false,
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },

    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss">
.burger-menu {
  display: none;
}
.pokemon-filter {
  position: fixed;
  bottom: 3%;
  padding: 10px;
  box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
    rgb(9 30 66 / 8%) 0px 0px 0px 1px;
  border: 5px solid #356abd;
  border-radius: 9px;
  .search-section {
    margin: 10px;
    > input {
      padding: 10px;
      border-radius: 7px;
      border: 3px solid black;
    }
  }
  .checkbox-types {
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
    /* position: relative; */
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-left: 10px;

    > div {
      display: flex;
      /* justify-content: space-between; */
      gap: 10px;
    }
  }
}

@media (max-width: 920px) {
  .burger-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 0;
    box-shadow: rgb(9 30 66 / 25%) 0px 4px 8px -2px,
      rgb(9 30 66 / 8%) 0px 0px 0px 1px;
    width: 20px;
    height: 100px;
    padding: 10px;
    border: 3px solid #5275af;
    border-radius: 9px;
    cursor: pointer;
  }

  .close {
    left: 0;
    transition: transform 0.6s, box-shadow 0.6s;
    transform: translateX(-100%);
  }
  .open {
    transform: translateX(0);
    transition: transform 0.6s, box-shadow 0.6s;
  }

  .pokemon-filter {
    z-index: 999;
    background: #fdcd02;
    opacity: 0.9;
    bottom: 13%;
  }
}
</style>