/* eslint-disable require-jsdoc */
import {useState, useEffect} from 'react';

import {onAuthStateChanged} from '../firebase/client';

const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
};

export default function useUser() {
  const [login, setLogin] = useState(USER_STATES.NOT_KNOWN);
  useEffect(() => {
    onAuthStateChanged(setLogin);
  }, [] );
  return login;
}
