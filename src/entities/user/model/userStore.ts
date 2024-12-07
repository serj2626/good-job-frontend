import { defineStore } from "pinia";
import { ref } from "vue";

interface IUser {
  id: number;
  email: string;
  type: string;
  online: boolean;
  count_friends: number;
}

export const useUserStore = defineStore("user", () => {
  const user = ref<IUser>();

  return { user };
});
