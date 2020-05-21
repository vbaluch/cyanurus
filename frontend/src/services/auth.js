import firebase from "gatsby-plugin-firebase";

const localStoragePrefix = "cyanurus:";

export const isBrowser = () => typeof window !== "undefined";
export const getUser = () =>
  isBrowser() &&
  window.localStorage.getItem(localStoragePrefix + "firebase-user")
    ? JSON.parse(
        window.localStorage.getItem(localStoragePrefix + "firebase-user")
      )
    : {};

export const handleAuthSuccessResult = (result) => {
  setUser(result.user);
};

export const setUser = (user) =>
  window.localStorage.setItem(
    localStoragePrefix + "firebase-user",
    JSON.stringify(user)
  );

export const isLoggedIn = () => {
  const user = getUser();
  return !!user.uid;
};
export const logout = () => {
  return new Promise((resolve) => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setUser({});
        resolve();
      });
  });
};
