<template>
  <div class="container">
    <div class="row">
      <div class="col col-12 col-md-4 offset-md-4">
        <div class="card mt-5">
          <div class="card-body">
            <h2 class="card-title mb-3">Login</h2>
            <p class="text-danger" v-if="error">{{ error }}</p>
            <form id="form-login" @submit.prevent="submitForm">
              <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                  v-model="username"
                  type="text"
                  id="username"
                  class="form-control"
                  placeholder="username"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  v-model="password"
                  type="password"
                  id="password"
                  class="form-control"
                  placeholder="password"
                />
              </div>
              <base-btn class="btn-primary">Login</base-btn>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useAuthStore from "@/stores/modules/auth";
import { mapStores } from "pinia";
export default {
  name: "login",

  computed: {
    ...mapStores(useAuthStore),
  },

  data() {
    return {
      username: "",
      password: "",
      result: null,
      error: "",
    };
  },
  methods: {
    submitForm() {
      this.result = this.authStore.login(this.username, this.password);
      if (this.result.success === false) this.error = this.result.message;
      else {
        this.error = "";
        const userInfo = {
          username: this.username,
          password: this.password,
        };
        localStorage.setItem("oto", JSON.stringify(userInfo));
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
