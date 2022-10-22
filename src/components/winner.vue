<template>
  <q-dialog v-model="verjinHarciArdyunq" persistent>
    <q-card class="card">
      <q-card-section class="popup row items-center">
        <span class="q-ml-sm mesage">Դուք Հաղթեցիք 1.000.000 $</span>
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
          @click="Clos()"
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
let verjinHarciArdyunq = computed(() => store.state.game.verjinHarciArdyunq);
function Clos() {
  store.commit("game/closeWinner");
}
</script>

<style scoped>
.popup {
  background: rgb(163, 216, 102);
  width: 800px;
  height: 300px;
}
.mesage {
  font-size: 25px;
  color: aliceblue;
  opacity: 1 !important;
}
</style>
