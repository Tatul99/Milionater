<template>
  <q-dialog v-model="openAnswer" persistent>
    <q-card class="card">
      <q-card-section class="popup row items-center">
        <span class="q-ml-sm mesage">
          {{ frendName }}ն կարծում է որ ճիշտ պատտասխանն է {{ Answer }}
        </span>
        <div class="frends row justify-around">
          <div
            @click="tellFrend(frend.name)"
            class="col-2 frend cursor-pointer"
            v-for="frend in FrendsArr"
            :key="frend.id"
          >
            <img class="frend-image" :src="frend.image" alt="" />
            <span>{{ frend.name }}</span>
          </div>
        </div>
      </q-card-section>

      <q-card-actions class="row justify-center">
        <q-btn
          @click="closePopup()"
          class="glossy"
          rounded
          color="deep-orange"
          label="close"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let HelpTell = computed(() => store.getters["game/HelpTell"]);
let openAnswer = computed(() => store.getters["game/openAnswer"]);
let frendName = computed(() => store.getters["game/frendName"]);
let Answer = computed(() => store.getters["game/TellRightAnswer"]);
console.log(openAnswer.value);
// let FrendsArr = computed(() => store.state.game.frends);
console.log(HelpTell.value);
function closePopup() {
  store.commit("game/closeFrendAnswer");
}
</script>

<style scoped>
.popup {
  background: #3e97f3;
  width: 800px;
  height: 300px;
}
.mesage {
  font-size: 25px;
  color: aliceblue;
  opacity: 1 !important;
}
</style>
