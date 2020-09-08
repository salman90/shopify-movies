import React from 'react';
import styles from './Header.module.css';
import Logo from '../logo'
import imageSrc from '../../images/shopifyLogo.png';


const Header = (props) => {
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