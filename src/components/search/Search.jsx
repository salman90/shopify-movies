import React, { PureComponent } from 'react';
import styles from './Search.module.css';

class Search extends PureComponent {
    state = {
        text: '',
    }


    handleTextChange = (event) => {
        console.log(event.target.value)
        this.setState({
            text: event.target.value
        });

    }

    handleSubmitSearch = (event) => {
        event.preventDefault();
        this.props.handleSubmitSearch(this.state.text)
    }


    render(){
        return (
            <div
             className={styles.searchContainer}
            >
                <form className={styles.formStyle} onSubmit={this.handleSubmitSearch}>
                    <input className={styles.textInput} type="text" name="search" value={this.state.text} onChange={this.handleTextChange}/>
                    <input type="submit" name='search' value="submit" className={styles.buttonStyle} />
                </form>
            </div>
        )
    }
}


export default Search