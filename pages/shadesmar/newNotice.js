import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { addNews } from 'firebase/client';
import useUser from 'hook/useUser';

import ShadesmarNav from 'components/shadesmar/shadesmarNav';
import DropIMG from 'components/dropImg';

const FORM_STATES = {
  IDLE: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1
};

export default function newNotice() {
  /* == Variables del Fromulario == */
  const router = useRouter();
  const user = useUser();
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [section, setSection] = useState('');
  const [message, setMessage] = useState('');
  const [bannerURL, setBannerURL] = useState(null);
  const [status, setStatus] = useState(FORM_STATES.IDLE);

  // Validacion de cantidad minima de caracteres para el textarea.
  const disableBtn = message.length < 50 || status === FORM_STATES.LOADING;

  /* Manejo de variables del formulario */
  const handleChange = (event) => {
    const { name, value } = event.target;
    name === 'title' && setTitle(value);
    name === 'subtitle' && setSubTitle(value);
    name === 'section' && setSection(value);
    name === 'message' && setMessage(value);
  };
  /* ============================== */

  /* ===== Funcion de posteo ====== */
  const handleSubmint = (event) => {
    event.preventDefault();
    setStatus(FORM_STATES.LOADING);
    const post = {
      userId: user.uid,
      title: title,
      subTitle: subTitle,
      banner: bannerURL,
      content: message,
      section: section
    };
    addNews(post)
      .then(() => {
        setStatus(FORM_STATES.SUCCESS);
        router.push('/news');
      })
      .catch((err) => {
        setStatus(FORM_STATES.ERROR);
      });
  };
  /* ============================== */

  return (
    <ShadesmarNav>
      <div>
        <form className="content" onSubmit={handleSubmint}>
          <h1>Crear nueva noticia.</h1>
          <div>
            Sección:
            <select name="section" onChange={handleChange}>
              <option value=""></option>
              <option value="adds">Anuncios</option>
              <option value="news">Noticias</option>
              <option value="event">Eventos</option>
            </select>
          </div>
          <div>
            Titulo:
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            Resumen(opcional):
            <input
              type="text"
              name="subtitle"
              value={subTitle}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            Banner:
            <DropIMG getBannerURL={setBannerURL} folder="images"></DropIMG>
          </div>
          <div>
            Mensaje:
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="Nueva noticia..."
              value={message}
            ></textarea>
          </div>
          <div>
            <button className="btn-black" disabled={disableBtn}>
              Crear
            </button>
          </div>
        </form>
      </div>
    </ShadesmarNav>
  );
}
