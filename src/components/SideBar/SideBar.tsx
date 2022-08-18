import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from './SideBar.module.css';

type SideBarProps = {
    userName: string;
    avatarUrl: string; 
    role: string;
    backgroundUrl: string;
};

export function SideBar({ userName, avatarUrl, role, backgroundUrl}: SideBarProps) {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={backgroundUrl} 
            />     

            <div className={styles.profile}>
                <Avatar 
                    src={avatarUrl}
                />

                <strong>{userName}</strong>
                <span>{role}</span>
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
