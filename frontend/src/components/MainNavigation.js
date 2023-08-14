import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';
// import HomePage from '../pages/HomePage';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to={"/"} className={({ isActive, isPending }) =>
              isActive ? classes.active : ""
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to={"events"} className={({ isActive, isPending }) =>
              isActive ? classes.active : ""
            }>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header >
  );
}

export default MainNavigation;
