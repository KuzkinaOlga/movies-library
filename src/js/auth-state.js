import { auth } from "./firebase";
import {onLogoutShow, onLoginShow } from "./login";
import { getUserName } from "./user-data";

export function authState() {
  let authData = {};

  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      onLogoutShow();
      getUserName()
      // console.log('User is signed in');

      return;
    }

    onLoginShow()
    // console.log('User is logged out');
  });

}

export default authState;