<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  props: {
    BtcNum: Number,
    EthNum: Number,
  },
  mounted() {
    this.renderLineChart();
  },
  methods: {
    renderLineChart: function () {
      this.renderChart(
        {
          labels: ["Bitcoin", "Etehreum"],
          datasets: [
            {
              label: "Portfolio",
              data: [this.BtcNum, this.EthNum],
              backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
              hoverOffset: 4,
              borderColor: ["black", "black"],
              borderWidth: [2, 2],
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
        }
      );
    },
  },
  watch: {
    BtcNum: function () {
      this.renderLineChart();
    },
    EthNum: function () {
      this.renderLineChart();
    },
  },
};
</script>