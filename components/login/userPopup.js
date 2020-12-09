import { logOut } from 'firebase/client';
import { popUpScroll } from 'styles/mainStyles';

export default function logutPopUp(props) {
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
        <span className="option">Cuenta</span>
        <span> | </span>
        <span className="option">Shadesmar</span>
        <span> | </span>
        <span className="option" onClick={handleLogOut}>
          Desconectar
        </span>
      </div>

      <style jsx>{popUpScroll}</style>
    </section>
  );
}
