import { ref, computed } from "vue";
import { defineStore } from "pinia";

// 建立counter store及匯出
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  function addCount() {
    count.value++;
  }

  function resetCount() {
    count.value = 0
  }

  const squareCount = computed(() => count.value **2);

//   要回傳定義的資料與方法
  return { count, addCount, squareCount, resetCount };
});
