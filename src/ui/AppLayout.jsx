import { NavLink, Outlet } from "react-router";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <nav className={styles.navbar}>
        <NavLink to="/">Meal Generator</NavLink>
        <NavLink to="/recipeList">Recipe List</NavLink>
      </nav>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
