import React, { PureComponent } from 'react';
import styles from './Nomination.module.css';

class NominationItem extends PureComponent {

    handleRemoveNomination = (e) => {
        e.preventDefault();
        this.props.removeNomination(this.props.nomination)
    }
    render(){
        return(
            <div className={styles.nominationContainer}>
                <div>
                    <img
                        className={styles.poster}
                        src={this.props.nomination.Poster} 
                    />
                </div>
                <div>
                    <h4>{this.props.nomination.Title}</h4>
                </div>
                <div>
                    <button
                     onClick={this.handleRemoveNomination}
                    >
                        remove 
                    </button>
                </div>
            </div>
        )
    }
}


export default NominationItem;