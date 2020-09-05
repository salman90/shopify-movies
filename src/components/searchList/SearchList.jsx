import React, {PureComponent} from 'react';
import SearchItem from './searchItem';
import styles from './SearchList.module.css';

class SearchList extends PureComponent {

    handelNomination = (nomnationItem) => {
        this.props.handelNomination(nomnationItem);
    }

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

    render() {
        console.log(this.props.searchResult, " result");
        return(
            <div className={styles.searchListContainer}>
                

                {this.props.searchResult.length > 0 ? 
                  this.renderSearchItem(this.props.searchResult)
                  :
                  null
                 }
            </div>
        )
    }
}

export default SearchList;