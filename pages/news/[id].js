import Link from 'next/link';
import Head from 'next/head';

import MainConteiner from 'components/main';
import GoTop from 'components/goTop';
import TextHadle from 'api/textHandle';

import { fetchNew } from '../../firebase/client';
import { articleStyles, newSecction } from '../../styles/newStyles';

export default function ReedNews(props) {
  const { content } = props;

  return (
    <MainConteiner>
      <GoTop />
      <Head>
        <title>
          Cosmere-latam |{' '}
          {content.error === '404' ? content.error : content.title}{' '}
        </title>
      </Head>
      <section className="new">
        <div className="back">
          <div>
            <Link href="/news">&#60; Volver a Noticias</Link>
          </div>
        </div>
        <div className="body">
          <div className="article">
            <h1>{content.error === '404' ? `Error 404` : content.title} </h1>
            <span>
              Fecha de publicación {content.error !== null && content.date}
            </span>

            <div className="text" style={{ whiteSpace: 'pre-line' }}>
              {content.error !== '404'
                ? `${content.content}`
                : 'El posteo no hay sido encontrado. Es posible que fuera borrado, o que la direccion sea incorrecta.'}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{articleStyles}</style>
      <style jsx>{newSecction}</style>
    </MainConteiner>
  );
}

export async function getServerSideProps(ctx) {
  const { params } = ctx;
  const { id } = params;
  const content = await fetchNew(id).then((newArray) => {
    return newArray;
  });
  return { props: { content: content } };
}
