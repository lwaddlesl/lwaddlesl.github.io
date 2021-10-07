import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedBtc: false,
        loadedEth: false,
        chartDataBtc: [],
        labelBtc: [],
        chartDataEth: [],
        labelEth: [],
        eth: null,
        btc: null,
        newLabelBtc: [],
        newLabelEth: [],
    },
    mutations: {
        loadedBtc(state, bool) {
            state.loadedBtc = bool
        },
        loadedEth(state, bool) {
            state.loadedEth = bool
        },
        getDataBtc(state, data) {
            data.forEach((el) => {
                state.chartDataBtc.push(el[1]);
                state.labelBtc.push(el[0]);
            })
        },
        getDataEth(state, data) {
            data.forEach((el) => {
                state.chartDataEth.push(el[1]);
                state.labelEth.push(el[0]);
            })
        },
        getBtc(state, data) {
            state.btc = data
        },
        getEth(state, data) {
            state.eth = data
        },
        clearBtc(state) {
            state.chartDataBtc = []
            state.labelBtc = []
        },
        clearEth(state) {
            state.chartDataEth = []
            state.labelEth = []
        },
        convertTimestamp(state, timestamp) {
            var d = new Date(timestamp), // Convert the passed timestamp to milliseconds
                yyyy = d.getFullYear(),
                mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
                dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
                hh = d.getHours(),
                h = hh,
                min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
                ampm = "AM",
                time;
            if (hh > 12) {
                h = hh - 12;
                ampm = "PM";
            } else if (hh === 12) {
                h = 12;
                ampm = "PM";
            } else if (hh == 0) {
                h = 12;
            }
            time = yyyy + "-" + mm + "-" + dd + ", " + h + ":" + min + " " + ampm;
            if (state.newLabelBtc.length < 15) {
                state.newLabelBtc.push(time)
            } else if (state.newLabelEth.length < 15) {
                state.newLabelEth.push(time)
            }
        },
    },
    actions: {
        async getBtcChartData({ state, commit }) {
            commit('clearBtc')
            commit('loadedBtc', false)
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily"
            )
            commit('getDataBtc', response.data.prices)
            state.labelBtc.map((el) =>
                commit('convertTimestamp', el)
            );
            commit('loadedBtc', true)
        },
        async getEthChartData({ state, commit }) {

            commit('clearEth')
            commit('loadedEth', false)

            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=14&interval=daily"
            )
            commit('getDataEth', response.data.prices)
            state.labelEth.map((el) =>
                commit('convertTimestamp', el)
            );
            commit('loadedEth', true)
        },
        async getPrice({ commit }) {
            const response = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=falsehttps://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false"
            )
            commit('getBtc', response.data[0].current_price)
            commit('getEth', response.data[1].current_price)
        },
    },
    getters: {},
})