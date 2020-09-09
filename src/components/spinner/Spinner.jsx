import React from 'react';
import classes from './Spinner.module.css';

/**
 * @description react componet for laoding
 * @returns functional react component Spinner
 */
const Spinner = () => {
    return (
        <div className={classes.loader} >Loading...</div>
    )
}

export default Spinner;