import React, { PureComponent } from 'react';
import styles from './NominationItem.module.css';
import placeHolderImage from '../../../images/movie_placeholder.png'

/**
 * @class NominationItem
 * @extends React.PureComponent
 * @description contains nomination
 */
class NominationItem extends PureComponent {

    handleRemoveNomination = (e) => {
        e.preventDefault();
        this.props.removeNomination(this.props.nomination)
    }
    render(){
        console.log(this.props.nomination)
        
        return(
            <div className={styles.nominationContainer}>
                <div>
                    <img className={styles.poster} alt={"movie poster"} src={this.props.nomination.Poster !== "N/A" ? this.props.nomination.Poster : placeHolderImage} />
                </div>
                <div className={styles.titleContainer}>
                    <h4 className={styles.nominationTitle}>{this.props.nomination.Title} <span> ({this.props.nomination.Year})</span> </h4>
                </div>
                <div>
                    <button className={styles.buttonStyle} onClick={this.handleRemoveNomination}>
                        Remove 
                    </button>
                </div>
            </div>
        )
    }
}


export default NominationItem;