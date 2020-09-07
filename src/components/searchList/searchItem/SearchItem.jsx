import React, {PureComponent} from 'react';
import styles from './SearchItem.module.css';
import placeHolderImage from '../../../images/movie_placeholder.png'



class SearchItem extends PureComponent {
    /**
     * @param {Object} e
     * @description handle on click event to add a nomination 
     */
    handleClick = (e) => {
        e.preventDefault();
        this.props.handelNomination(this.props.searchItemDetails);
    }
    render() {
        return(
            <div className={styles.searchItemContainer}>
                <div>
                    <img className={styles.posterStyle} alt={"movie poster"} src={this.props.searchItemDetails.Poster !== "N/A" ? this.props.searchItemDetails.Poster : placeHolderImage} />
                </div>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{this.props.searchItemDetails.Title} <span> ({this.props.searchItemDetails.Year})</span> </p>
                </div>
                <div>
                    <button className={styles.buttonStyle}onClick={this.handleClick}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchItem;