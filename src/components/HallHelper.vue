<template>
  <!-- <q-dialog v-model="HelpHoll" persistent>
    <q-card class="card">
      <q-card-section class="popup row items-around justify-center">
        <span class="q-ml-sm mesage">Դահլիճի պատասղանն է</span>
       
      </q-card-section>

      <q-card-actions class="row justify-center">
        <q-btn
          @click="Close()"
          class="glossy"
          rounded
          color="deep-orange"
          label="try again"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog> -->
  <div class="row items-center justify-center">
    <div class="popup row items-center justify-center">
      <span class="cursor-pointer close" @click="closeHall()">X</span>
      <div class="q-ml-sm mesage col-12">
        <div class="row justify-center">
          <!-- <span
            >Դահլիճը կարծում է, որ ճիշտ պատասխանն է {{ TellRightAnswer }}
          </span> -->
        </div>
      </div>
      <canvas
        :width="100"
        :height="100"
        class="hamakarg"
        ref="myChart"
      ></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters("game", ["TellRightAnswer", "OnlyAnswers", "graficpoints"]),
    ...mapState("game", ["HelpHoll"]),
    ctx() {
      return this.$refs.myChart;
    },
  },
  methods: {
    ...mapMutations("game", ["closeHall"]),
  },
  mounted() {
    // console.log(this.curentQuestion.Answers);
    const mixedChart = new Chart(this.ctx, {
      data: {
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: this.graficpoints,
            backgroundColor: ["red", "blue", "yellow", "green"],
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [100, 100, 100, 100],
          },
        ],

        labels: this.OnlyAnswers,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>

<style scoped>
.popup {
  height: 500px;
  z-index: 10;
}
.close {
  color: black;
  position: absolute;
  position: relative;
  width: 20px;
  height: 20px;
  font-size: 20px;
  top: 0%;
  right: -45%;
}
.hamakarg {
  width: 80% !important;
  height: 90% !important;
  background: aquamarine;
}
</style>
