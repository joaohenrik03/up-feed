import { Header } from './components/Header/Header';
import { SideBar } from './components/SideBar/SideBar';

import styles from './App.module.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <SideBar /> 
      </div>
    </>
  )
}
