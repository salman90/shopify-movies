import React from 'react';
import styles from './Header.module.css';
import Logo from '../Logo'
import imageSrc from '../../images/shopifyLogo.png';

/**
 * @deprecated functional React component Header
 * @returns Header functional React component
 */
const Header = () => {
    return (
        <header className={styles.AppHeader}>
            <div className={styles.LogoContainer}>
                <Logo
                    src={imageSrc}
                    width={56}
                    height={56}
                />
                <p className={styles.logoText}>shopify<span className={styles.spantext}>Movies</span></p>
            </div>


        </header>
    )
}
export default Header;