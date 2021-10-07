<template>
  <div class="convert">
    <div class="convert__items">
      <div class="form">
        USD:
        <input type="number" min="0" @input="getBtc" />
        Bitcoin: {{ convertBtc }}
      </div>

      <LineChartBtc v-if="this.loadedBtc" />
    </div>
    <div class="convert__items">
      <div class="form">
        USD:
        <input type="number" min="0" @input="getEth" />
        Etehreum: {{ convertEth }}
      </div>
      <LineChartEth v-if="this.loadedEth" />
    </div>
  </div>
</template>

<script>
import LineChartBtc from "../components/convert/LineChartBtc.vue";
import LineChartEth from "../components/convert/LineChartEth.vue";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    LineChartBtc,
    LineChartEth,
  },
  data() {
    return {
      usd: 0,
      convertBtc: 0,
      convertEth: 0,
    };
  },
  computed: {
    ...mapState(["btc", "eth", "loadedBtc", "loadedEth"]),
  },
  async mounted() {
    await this.getBtcChartData();
    await this.getEthChartData();
  },
  methods: {
    ...mapActions(["getBtcChartData", "getEthChartData"]),

    getBtc(e) {
      this.convertBtc = e.target.value * this.btc;
    },
    getEth(e) {
      this.convertEth = e.target.value * this.eth;
    },
  },
};
</script>

<style scoped>
.convert {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.convert__items {
  margin-top: 50px;
  width: 500px;
  height: auto;
}
.form {
  margin-bottom: 20px;
  margin-left: 30px;
}
@media screen and (max-width: 1000px) {
  .convert {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 501px) {
    .convert__items {
      width: 320px;
    }
  }
}
</style>