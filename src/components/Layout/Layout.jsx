import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div>
      <header>
        <ul className={css.navigation}>
          <li className={css.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={css.item}>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>

      {/* <footer>
        <ul>
          <li>
            <p>1</p>
          </li>
          <li>
            <p>2</p>
          </li>
          <li>
            <p>3</p>
          </li>
        </ul>
      </footer> */}
    </div>
  );
};

export default Layout;
