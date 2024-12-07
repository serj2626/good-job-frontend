import { defineStore } from "pinia";
import { ref } from "vue";

export const useInterviewsStore = defineStore("interviews", () => {
  const categories = ref([]);

  return { categories };
});
