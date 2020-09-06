import React, { PureComponent } from 'react';

class Logo extends PureComponent {
    
    render(){
        console.log(this.props.src)
        const styles = {
            width: this.props.width,
            height: this.props.height
        }
        return (
            <img  src={this.props.src} style={styles}/>
        )
    }
}

export default Logo;