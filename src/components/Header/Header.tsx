import styles from './Header.module.css';
import upLogo from '../../assets/up-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img 
                src={upLogo} 
                alt="Logo da Up" 
            />
            <strong>
                Up Feed
            </strong>    
        </header>
    )
}
