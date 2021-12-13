// import { useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink exact to="/" className={s.link} activeClassName={s.active}>Home </NavLink>
      <NavLink to="/saved" className={s.link} activeClassName={s.active}>SavedMovies</NavLink>
    </nav>
  );
};
