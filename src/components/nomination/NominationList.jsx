import React, { PureComponent } from 'react';
import styles from './NominationList.module.css';
import NominationItem from './nominationItem';

class NominationList extends PureComponent {

    removeNomination = (nomination) => {
        this.props.removeNomination(nomination);
    }
    
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
            <div
             className={styles.nominationContainer}

            > 
                {
                    this.props.nominations.length > 0 ? 
                    this.renderNominationItem(this.props.nominations)
                    : 
                    null
                }
            </div>
        )
    }
}

export default NominationList;
