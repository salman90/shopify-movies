import React, {PureComponent} from 'react';
import styles from './SearchItem.module.css';



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
                    <img className={styles.posterStyle} src={this.props.searchItemDetails.Poster} />
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