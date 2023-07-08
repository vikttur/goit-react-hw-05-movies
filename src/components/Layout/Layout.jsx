import { NavLink, Outlet } from 'react-router-dom';
// import css from './Layout.module.css';
// import styled from 'styled-components';

// const StyledLink = styled(NavLink)`
//   color: #212121;

//   &.active {
//     color: orangered;
//   }
// `;

const Layout = () => {
  return (
    <section>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
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
      </footer>
    </section>
  );
};

export default Layout;
