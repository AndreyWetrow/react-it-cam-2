import axios from "axios";

// const baseUrl = "https://jsonplaceholder.typicode.com/";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const userAPI = {
  getUsers() {
    return instance.get("users").then((response) => response.data);
  },

  follow(userId) {
    return instance.post("users", {
      userId: `${userId}`,
      name: "Hello",
      username: "HelloWorld",
    });
  },
  unfollow(userId) {
    return instance.post("users", {
      userId: `${userId}`,
      name: "Hello",
      username: "HelloWorld",
    });
  },

  getProfile(userId) {
    return instance.get("users/" + userId);
  },

  // signIn() {
  //   const authData = {
  //     email: "test5@mail.ru",
  //     password: "123456",
  //     returnSecureToken: true,
  //     // withCredentials: true,
  //   };
  //   return axios.post(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKoDlTwYXzV1-ggaXVU23GE3NBTf7z-5o",
  //     authData
  //   );
  // },
};

export const authAPI = {
  me() {
    const authData = {
      email: "test5@mail.ru",
      password: "123456",
      returnSecureToken: true,
      // withCredentials: true,
    };
    return axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKoDlTwYXzV1-ggaXVU23GE3NBTf7z-5o",
      authData
    );
  },
};
// export const getUsers = () => {
//   return instance.get("users").then((response) => response.data);
// };
