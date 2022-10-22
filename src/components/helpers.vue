<template>
  <div class="helpers col-2 q-ml-xl q-mt-xl">
    <div class="row full-height justify-end items-around">
      <div class="col-7">
        <div
          @click="help()"
          :class="!helper1 ? 'disabled noneEvents' : ''"
          class="row justify-center icon cursor-pointer"
        >
          <img src="../../public/50:50.png" class="icon" alt="" />
        </div>
      </div>
      <div class="col-7">
        <div
          @click="helpHall()"
          :class="!helper2 ? 'disabled noneEvents' : ''"
          class="row justify-center icon cursor-pointer"
        >
          <img src="../../public/hall.png" class="icon" alt="" />
        </div>
      </div>
      <div class="col-7">
        <div
          @click="helptell()"
          :class="!helper3 ? 'disabled noneEvents' : ''"
          class="row justify-center icon cursor-pointer"
        >
          <img src="../../public/tell.png" class="icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
let store = useStore();

let helper2 = computed(() => store.state.game.helpHallDisable);
let helper1 = computed(() => store.state.game.fiftin);
let helper3 = computed(() => store.state.game.Telephone);
let HelpTell = computed(() => store.state.game.helperTell);

function help() {
  store.dispatch("game/help");
  store.commit("game/fiftin");
}
function helpHall() {
  console.log(1234);
  store.commit("game/HelpHoll");
  const HelpHoll = computed(() => store.getters["game/HelpHoll"]);
}
function helptell() {
  store.commit("game/chengeHelpTell");
  const rightAnswer = computed(() => store.getters["game/TellRightAnswer"]);
}
</script>

<style scoped>
.icon {
  width: 100px;
  height: 100px;
}
button {
  background: unset;
}
</style>
