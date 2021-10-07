<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions(["getPrice"]),
  },

  async mounted() {
    await this.getPrice();
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
</style>
