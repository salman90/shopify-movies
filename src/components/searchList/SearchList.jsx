import React, {PureComponent} from 'react';
import SearchItem from './searchItem';
import Spinner from '../../components/spinner';
import styles from './SearchList.module.css';


/**
 * @class SearchList
 * @extends React.PureComponent
 * @description this is a class contains all the seachItems
 */
class SearchList extends PureComponent {

    handelNomination = (nomnationItem) => {
        this.props.handelNomination(nomnationItem);
    }

    /**
     * @description traverse each searchItem
     * @param {Array} searchItems 
     * @returns {React.PureComponent} SearchItem
     */
    renderSearchItem = (searchItems) => (
        searchItems.map((searchItemDetails) => {
            return (
                    <SearchItem
                        key={searchItemDetails.imdbID}
                        searchItemDetails={searchItemDetails}
                        handelNomination={this.handelNomination}
                    />
            )
        })
    )   

    /**
     * 
     */
    renderLoading = () => {
        if(!this.props.loading)
        {
            return null;
        }
        else
        {
            return (<Spinner />)
        }
    }

    render() {
        return( 
            <div className={styles.searchListContainer}>
                <p className={styles.searchTitle} style={{textAlign: 'center'}}>Search Results</p>
                {this.props.searchResult.length > 0 ? 
                  this.renderSearchItem(this.props.searchResult)
                  :
                 this.renderLoading()
                 }
            </div>
        )
    }
}

export default SearchList;