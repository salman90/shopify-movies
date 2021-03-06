import React, { PureComponent } from 'react';
import styles from './NominationList.module.css';
import NominationItem from './nominationItem';

/**
 * @class NominationList
 * @extends React.PureComponent
 * @description this is a class that has all the NominationItems
 */
class NominationList extends PureComponent {

    /**
     * @param {Object} nomination 
     */
    removeNomination = (nomination) => {
        this.props.removeNomination(nomination);
    }

    /**
     * @description  traverse each nomination and return nominiationItem
     * @param {Array} nominations 
     * @returns {React.PureComponent} NominationItem
     */
    renderNominationItem = (nominations) => (
        nominations.map((nomination) => {
            return (
                <NominationItem
                    key={nomination.imdbID}
                    nomination={nomination}
                    removeNomination={this.removeNomination}
                />
            )
        })
    )

    render(){
        return(
            <div className={styles.nominationContainer}> 
                <div className={styles.nominationListTitleContainer}>
                    <p className={styles.nominationTitle}>Nominations</p>
                </div>
                {
                    this.props.nominations && this.props.nominations.length >= 5?
                        <p className={styles.nominationTitle}>You have Five Nominations</p>
                    :
                        <div className={styles.nominationContainerTitle}></div>
                }
                <div className={styles.nominationItemContainer}>
                    
                    {
                        this.props.nominations &&this.props.nominations.length > 0 ?
                            this.renderNominationItem(this.props.nominations)
                            :
                            null
                    }
                </div>
            </div>
        )
    }
}

export default NominationList;
