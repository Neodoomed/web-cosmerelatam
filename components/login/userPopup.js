import Link from 'next/link';

import { logOut } from 'firebase/client';
import { popUpScroll } from 'styles/mainStyles';

export default function logutPopUp(props) {
  const { uid, level } = props.user;
  const handleLogOut = () => {
    logOut();
    props.toggle();
  };

  return (
    <section
      className="popUp"
      style={{ display: props.showMe ? 'flex' : 'none' }}
      onClick={props.toggle}
    >
      <div className="popUp-content">
        <Link href="/user/panel/[id]" as={`/user/panel/${uid}`}>
          <span className="option">Cuenta</span>
        </Link>
        <span> | </span>
        {props.user && level === 'admin' && (
          <Link href="/shadesmar">
            <span className="option">Shadesmar</span>
          </Link>
        )}
        {props.user && level === 'admin' && <span> | </span>}
        <span className="option" onClick={handleLogOut}>
          Desconectar
        </span>
      </div>

      <style jsx>{popUpScroll}</style>
    </section>
  );
}
