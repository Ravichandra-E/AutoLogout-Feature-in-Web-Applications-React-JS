import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "_actions";
const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];
const AppLogout = ({ children }) => {
  const dispatchInsta = useDispatch();
  let timer;
  const handleLogoutTimer = () => {
    timer = setTimeout(() => {
      resetTimer();
      Object.values(events).forEach((item) => {
        window.removeEventListener(item, resetTimer);
      });
      logoutAction();
    }, 600000); // 10000ms = 10secs. You can change the time.
  };
  const resetTimer = () => {
    if (timer) clearTimeout(timer);
  };
  useEffect(() => {
    Object.values(events).forEach((item) => {
      window.addEventListener(item, () => {
        resetTimer();
        handleLogoutTimer();
      });
    });
  }, []);

  const logoutAction = () => {
    dispatchInsta(userActions.logout());
  };
  return children;
};
export default AppLogout;
