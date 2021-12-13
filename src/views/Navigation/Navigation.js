// import { useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  // const { url } = useRouteMatch();
  // console.log(url);
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/saved">SavedMovies</NavLink>
    </nav>
  );
};
