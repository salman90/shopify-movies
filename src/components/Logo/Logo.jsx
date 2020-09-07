import React from 'react';


const Logo = (props) => {
    return <img src={props.src} alt={"shopify logo"} style={{width: props.width, height: props.height}} />
}


export default Logo;