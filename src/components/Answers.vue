<template>
  <div class="answers row justify-center">
    <div
      @click="logId(item.answerId)"
      class="col-5 row cursor-pointer justify-end answer bg-blue q-pa-md q-mt-md q-mr-md"
      :class="item.eliminated ? 'disabled' : ''"
      v-for="(item, i) in curentQuestion.Answers"
      :key="item.id"
    >
      <div v-if="!item.eliminated">{{ i + 1 }}.</div>
      <div class="col-10">
        <div class="row justify-center">
          <div v-if="!item.eliminated">{{ item.answer }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
// let active = ref(0);
const store = useStore();
let curentQuestion = computed(() => store.getters["game/curentQuestion"]);
let active = computed(() => store.state.game.questionNumber);
console.log(curentQuestion.value);
function logId(id, i) {
  store.commit("game/chengeQuestionNumber", id);
}
</script>

<style scoped>
.answer {
  border-radius: 10px;
  position: relative;
  border: 1px solid #092847;
}
.answer:hover {
  background: rgb(214, 183, 98) !important;
}
/* .disabled {
  cursor: not-allowed;
} */

/* .answer-1:before {
  content: "";
  width: 31vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  left: -100%;
}
.answer-3:before {
  content: "";
  width: 31vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  left: -100%;
}
.answer-2:after {
  content: "";
  width: 20vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  right: -72%;
}
.answer-4:after {
  content: "";
  width: 20vw;
  height: 3px;
  background: #3e97f3;
  position: absolute;
  top: 50%;
  right: -72%;
} */
</style>
