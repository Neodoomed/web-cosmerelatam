/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import ShadesmarNav from '../../components/shadesmar/shadesmarNav';

export default function newNotice() {
  return (
    <ShadesmarNav>
      <div>
        <form className="content">
          <h1>Crear nueva noticia.</h1>
          <div>
                        Sección:
            <select id="section" name="section">
              <option value="adds">Anuncios</option>
              <option value="news">Noticias</option>
              <option value="event">Eventos</option>
            </select>
          </div>
          <div>
                        Mensaje:
            <textarea placeholder="Nueva noticia...">
            </textarea>
          </div>
          <div>
            <button className="btn-black">Crear</button>
          </div>
        </form>
      </div>
    </ShadesmarNav>
  );
}
