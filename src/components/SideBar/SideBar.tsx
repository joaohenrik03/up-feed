import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from './SideBar.module.css';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />     

            <div className={styles.profile}>
                <Avatar 
                    src="https://avatars.githubusercontent.com/u/84729916?v=4"
                />

                <strong>João Henrik</strong>
                <span>Junior</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
