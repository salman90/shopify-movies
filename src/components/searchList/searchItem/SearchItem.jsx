import React, {PureComponent} from 'react';
import styles from './SearchItem.module.css';


class SearchItem extends PureComponent {
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
                    <p className={styles.title}>{this.props.searchItemDetails.Title} </p>
                </div>
                <div>
                    <button onClick={this.handleClick}>
                        Add Nomination
                    </button>
                </div>
            </div>
        )
    }
}

export default SearchItem;