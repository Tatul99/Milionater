<template>
  <div class="questions-main bg-blue q-pa-lg text-center">{{ question }}</div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
// let active = ref(0);
const store = useStore();
let question = computed(() => store.getters["game/curentQuestion"].question);

let active = computed(() => store.state.game.questionNumber);
let count = computed(() => store.getters["game/questions"]);
// question.value = curentQuestion.value.question;
// let questions = ref();
</script>

<style scoped>
.questions-main {
  /* height: 100px !important; */
  /* padding: 20px; */
  border-radius: 20px;
  margin-right: 0 !important;
  position: relative;
  border: 1px solid #092847;
}
.questions-main:before {
  content: "";
  width: 31vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  left: -53.3%;
}
.questions-main:after {
  content: "";
  width: 20vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  right: -34.5%;
  border: 0, 5px solid #092847;
}
</style>
