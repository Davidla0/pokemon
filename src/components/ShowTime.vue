<template>
  <div v-if="currTime">{{ currDay }}, {{ currTime }}</div>
</template>

<script>
export default {
  data() {
    return {
      currTime: "",
      currDay: "",
      intervalId: "",
    };
  },
  methods: {
    getCurrTime() {
      this.intervalId = setInterval(() => {
        let today = new Date();

        const seconds =
          today.getSeconds() <= 9
            ? "0" + today.getSeconds()
            : today.getSeconds();
        const minutes =
          today.getMinutes() <= 9
            ? "0" + today.getMinutes()
            : today.getMinutes();
        const hours =
          today.getHours() <= 9
            ? "0" + today.getHours()
            : today.getHours();

        this.currTime =
          hours + ":" + minutes + ":" + seconds;
      }, 1000);
    },
    getCurrDay() {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var d = new Date();
      this.currDay = days[d.getDay()];
    },
    stopTime() {
      clearInterval(this.intervalId);
    },
  },
  created() {
    this.getCurrTime();
    this.getCurrDay()
  },
  unmounted() {
    this.stopTime();
  },
};
</script>

<style>
</style>