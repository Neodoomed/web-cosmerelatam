/* eslint-disable require-jsdoc */
import { useState, useEffect } from 'react';

import { onAuthStateChanged, getUserInfo } from 'firebase/client';

const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined
};

export default function useUser() {
  const [login, setLogin] = useState(USER_STATES.NOT_KNOWN);
  const [user, setUser] = useState(USER_STATES.NOT_LOGGED);
  useEffect(() => {
    onAuthStateChanged(setLogin);
  }, []);

  useEffect(() => {
    if (login) getUserInfo(login.uid).then(setUser);
  }, [login]);

  return login && user ? user : login;
}
