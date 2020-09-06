import React, { PureComponent } from 'react';
import styles from './Header.module.css';
import Logo from '../Logo'
import imageSrc from '../../images/shopifyLogo.png';

/**
 * @class Header
 * @extends PureComponent
 * @description 
 */
class Header extends PureComponent {
    render() {
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
}

export default Header;