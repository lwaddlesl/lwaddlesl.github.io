<template>
  <div class="portfolio">
    <div class="portfolio__item">
      <div class="usd-price">current USD:{{ usd }}$</div>
      <PortfolioChart :BtcNum="BtcNum" :EthNum="EthNum" />
      <div class="coins">
        <div class="coins__item">
          <div class="num">number of btc: {{ BtcNum }}</div>
          <div class="form">
            <input
              placeholder="change BTC"
              min="0"
              v-model.number="curBtc"
              type="Number"
            />
            <button @click="addBtc">add</button>
            <button @click="subBtc">sub</button>
          </div>
        </div>
        <div class="coins__item">
          <div class="num">number of eth: {{ EthNum }}</div>

          <div class="form">
            <input
              placeholder="change ETH"
              min="0"
              v-model.number="curEth"
              type="Number"
            />
            <button @click="addEth">add</button>
            <button @click="subEth">sub</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PortfolioChart from "../components/portfolio/PortfolioChart";
export default {
  components: {
    PortfolioChart,
  },
  data() {
    return {
      curEth: "",
      curBtc: "",
      BtcNum: 0.001,
      EthNum: 0.0005,
    };
  },
  mounted() {
    if (localStorage.BtcNum) {
      this.BtcNum = +localStorage.BtcNum;
    }
    if (localStorage.EthNum) {
      this.EthNum = +localStorage.EthNum;
    }
  },
  computed: {
    ...mapState(["eth", "btc"]),
    usd: function () {
      return Number(
        (this.btc * this.BtcNum + this.eth * this.EthNum).toFixed(10)
      );
    },
  },
  methods: {
    addBtc() {
      if (this.BtcNum + this.curBtc < 0) {
        this.BtcNum = 0;
      } else {
        this.BtcNum += +this.curBtc;
        this.BtcNum = Number(this.BtcNum.toFixed(10));
      }
      localStorage.BtcNum = this.BtcNum;
      this.curBtc = "";
    },
    addEth() {
      if (this.EthNum + this.curEth < 0) {
        this.EthNum = 0;
      } else {
        this.EthNum += +this.curEth;
        this.EthNum = Number(this.EthNum.toFixed(10));
      }
      localStorage.EthNum = this.EthNum;
      this.curEth = "";
    },
    subBtc() {
      if (this.BtcNum - this.curBtc < 0) {
        this.BtcNum = 0;
      } else {
        this.BtcNum -= +this.curBtc;
        this.BtcNum = Number(this.BtcNum.toFixed(10));
      }
      localStorage.BtcNum = this.BtcNum;
      this.curBtc = "";
    },
    subEth() {
      if (this.EthNum - this.curEth < 0) {
        this.EthNum = 0;
      } else {
        this.EthNum -= +this.curEth;
        this.EthNum = Number(this.EthNum.toFixed(10));
      }
      localStorage.EthNum = this.EthNum;
      this.curEth = "";
    },
  },
};
</script>

<style scoped>
.portfolio__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 700px;
  height: 500px;
  margin-top: 50px;
  font-size: 18px;
}
.usd-price {
  font-size: 25px;
}
.num {
  margin-top: 20px;
}
</style>