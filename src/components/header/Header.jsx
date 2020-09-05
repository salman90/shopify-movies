import React, { PureComponent } from 'react';
import styles from './Header.module.css';

class Header extends PureComponent {
    render() {
        return (
            <header className={styles.AppHeader}>
                <div>
                    <p>Logo </p>
                </div>
            </header>
        )
    }
}

export default Header;