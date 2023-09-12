import { defineStore } from "pinia";
import getters from "./getters";
import actions from "./actions";

const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      userList: [
        { id: 1, username: "linh", password: "linhluonleo" },
        { id: 2, username: "tam", password: "thientam" },
      ],
    };
  },
  getters,
  actions,
});

export default useAuthStore;
