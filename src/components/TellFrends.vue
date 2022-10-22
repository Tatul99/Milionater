<template>
  <q-dialog v-model="HelpTell" persistent>
    <q-card class="card">
      <q-card-section class="popup row items-around">
        <span class="q-ml-sm mesage">Որ Ընկերոջն եք ցանկանում զանգահարել</span>
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

      <!-- <q-card-actions class="row justify-center">
        <q-btn
          class="glossy"
          rounded
          color="deep-orange"
          label="Close Game"
          v-close-popup
        ></q-btn>
        <q-btn
          @click="Close()"
          class="glossy"
          rounded
          color="deep-orange"
          label="try again"
        ></q-btn>
      </q-card-actions> -->
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let HelpTell = computed(() => store.getters["game/HelpTell"]);
let FrendsArr = computed(() => store.state.game.frends);
console.log(FrendsArr.value);
function tellFrend(name) {
  store.commit("game/TellFrend", name);
}
</script>

<style>
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
.frend {
  font-size: 18px;
  color: aliceblue;
  width: 150px;
  height: 150px;
}
.frend-image {
  width: 150px;
  height: 150px;
}
</style>
