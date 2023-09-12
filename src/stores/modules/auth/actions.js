export default {
  login(username, password) {
    const isLogin = this.userList.find(
      (user) => user.username === username && user.password === password
    );

    // console.log(isLogin);

    if (isLogin !== undefined) {
      return { success: true, message: "Đăng nhập thành công!" };
    } else
      return {
        success: false,
        message: "Sai thông tin đăng nhập! Vui lòng liên hệ 0559393321",
      };
  },

  checkLogged() {
    const userLocal = JSON.parse(localStorage.getItem("oto")) || "";

    if (userLocal) {
      const isLogged = this.userList.find(
        (user) =>
          user.username === userLocal.username &&
          user.password === userLocal.password
      );

      return isLogged ? true : false;
    }

    return false;
  },
};
