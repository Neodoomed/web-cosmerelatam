/* eslint-disable react/prop-types */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import _Styles from 'styles/shadesmarStyles';
import { globalStyles } from 'styles/globalStyles';

import useUser from 'hook/useUser';

export default function Shadesmar(props) {
  const router = useRouter();

  const user = useUser();

  useEffect(() => {
    user === null && router.replace('/');
  }, [user]);

  return (
    <section className="Shadesmar">
      <div className="navbar">
        <div>
          <Link href="/">
            <a>logo</a>
          </Link>
        </div>
        <div>Administracion</div>
        <div>
          <Link href="/shadesmar/newNotice">
            <a>Nueva Noticia</a>
          </Link>
        </div>
      </div>
      <div className="main">
        <div className="header_section">
          <div>
            <h3>{router.pathname}</h3>
          </div>
          {user && user.username && (
            <div className="user">
              <span>{user.username}</span>
              <img src={user.avatar}></img>
            </div>
          )}
        </div>
        {props.children}
      </div>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{_Styles}</style>
    </section>
  );
}
