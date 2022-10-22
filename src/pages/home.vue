<template>
  <div class="home col-12">
    <q-dialog v-model="helpHall">
      <hall-helper />
    </q-dialog>
    <frend-answer v-if="openAnswer" />
    <tell-frends v-if="helpTell" />
    <winner />
    <game-over-popup class="gameover" />
    <div class="row justify-between">
      <helpers />

      <div class="col-7 row justify-end items-end">
        <questions class="col-12 q-ma-md" />
      </div>

      <points class="col-2 q-ma-md" />
    </div>
    <div class="col-12">
      <div class="row justify-center">
        <div class="col-8">
          <answers />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import points from "src/components/points.vue";
import questions from "../components/questions.vue";
import answers from "../components/Answers.vue";
import GameOverPopup from "../components/GameOver.vue";
import helpers from "../components/helpers.vue";
import Winner from "../components/winner.vue";
import TellFrends from "../components/TellFrends.vue";
import FrendAnswer from "../components/frendAnswer.vue";
import HallHelper from "../components/HallHelper.vue";
import { computed } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
const store = useStore();
let open = ref(false);
let helpTell = computed(() => store.state.game.helperTell);
let helpHall = computed(() => store.state.game.HelpHoll);
// let openAnswer = computed(() => store.state.openAnswer);
let openAnswer = computed(() => store.getters["game/openAnswer"]);

const props = defineProps({ a: { type: String } });
</script>

<style>
.home {
  height: 100vh;
  width: 100vw;
  background-image: url("../../public/background.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: aliceblue;
}
</style>
