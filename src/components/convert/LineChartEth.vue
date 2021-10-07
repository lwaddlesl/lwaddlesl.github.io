<script>
import { Line } from "vue-chartjs";
import { mapState } from "vuex";

export default {
  extends: Line,
  computed: {
    ...mapState(["chartDataEth", "newLabelEth"]),
  },
  mounted() {
    this.renderChart(
      {
        labels: this.newLabelEth,
        datasets: [
          {
            label: "ETH",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(225,0,0,0.4)",
            borderColor: "blue", // The main line color
            borderCapStyle: "square",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "black",
            pointBackgroundColor: "white",
            pointBorderWidth: 1,
            pointHoverRadius: 4,
            pointHoverBackgroundColor: "yellow",
            pointHoverBorderColor: "brown",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: this.chartDataEth,
          },
        ],
      },
      this.options
    );
  },
};
</script>