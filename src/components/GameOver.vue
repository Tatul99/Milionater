<template>
  <q-dialog v-model="openPopup" persistent>
    <q-card class="card">
      <q-card-section class="popup row items-center">
        <span class="q-ml-sm mesage">Դուք պարտվեցիք փորձեք կրկին</span>
        <span v-if="PrizeMoney != null">Դուք շահել եք {{ PrizeMoney }} $</span>
      </q-card-section>

      <q-card-actions class="row justify-center">
        <!-- <q-btn
          class="glossy"
          rounded
          color="deep-orange"
          label="Close Game"
          v-close-popup
        ></q-btn> -->
        <q-btn
          @click="Close(curentQuestion)"
          class="glossy"
          rounded
          color="deep-orange"
          label="try again"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let openPopup = computed(() => store.getters["game/GameOverPopup"]);
let curentQuestion = computed(() => store.getters["game/curentQuestion"]);
let PrizeMoney = computed(() => store.state.game.PrizeMoney);

function Close(curentQuestion) {
  store.commit("game/closePopup", curentQuestion);
}
</script>

<style scoped>
.popup {
  background: rgb(226, 29, 29);
  width: 800px;
  height: 300px;
}
.mesage {
  font-size: 25px;
  color: aliceblue;
  opacity: 1 !important;
}
</style>
