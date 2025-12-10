import { Outlet } from "react-router";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
}

export default AppLayout;
