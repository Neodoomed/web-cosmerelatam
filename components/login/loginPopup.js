import { popUp } from 'styles/mainStyles';

export default function loginPopUp(props) {
  return (
    <section
      className="popUp"
      style={{ display: props.showMe ? 'flex' : 'none' }}
    >
      <div className="popUp-content">
        <div className="btn-exit" onClick={props.toggle}>
          +
        </div>
        <img src="/images/logo.png" />
        <h1>Inicio de sesion.</h1>
        <h5>Seleccione el metodo para iniciar sesion.</h5>
        <br />

        <button className="btn-black btn-login" onClick={props.google}>
          <img src="/images/icons/user.png" />
          <span>Iniciar seccion con Gmail.</span>
        </button>
      </div>

      <style jsx>{popUp}</style>
    </section>
  );
}
