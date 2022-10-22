<template>
  <div class="main">
    <div class="container">
      <div
        class="item row justify-evenly"
        :class="{
          whiteItem: i % 5 == 0,
          activeItem: active + i == 15,
        }"
        v-for="(item, i) in pointsArr.slice().reverse()"
        :key="item"
      >
        <div>{{ 15 - i }}</div>
        <div>${{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { useStore } from "vuex";
// let active = ref(0);
const store = useStore();
let pointsArr = ref([]);
let active = computed(() => store.state.game.questionNumber);
let count = computed(() => store.state.game.questions);

// console.log(count.value);
for (let i = 0; i < count.value.length; i++) {
  pointsArr.value.push(count.value[i].Price);
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /* color: aliceblue; */
}
.main {
  background-color: #3e97f3;
  padding: 20px 30px;
  width: 20%;
  z-index: 1;
}
.item {
  margin: 10px 5px;
  font-size: 20px;
  color: rgb(211, 156, 36);
}
.whiteItem {
  color: aliceblue;
}
.activeItem {
  border: 1px solid rgb(236, 225, 225);
  border-radius: 10px;
}
</style>
