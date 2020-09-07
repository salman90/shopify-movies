import React, { PureComponent } from 'react';
import styles from './Search.module.css';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';





/**
 * @class Search
 * @extends React.PureComponent
 * @description this a class that handles search
 */
class Search extends PureComponent {

    /**
     * @constructor
     * @param {Object} props 
     */
    constructor(props){
        super(props)

        this.state ={
            text: '',
        }
    }

    /**
     * @description handles seach text input change
     * @param {Object} event 
     */
    handleTextChange = (event) => {
        console.log(event.target.value)
        this.setState({
            text: event.target.value
        });

    }

    /**
     * 
     * @param {Object} event 
     * @description handles on form submit event
     */
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
                    <TextField id="input-with-icon-textfield" 
                                variant="outlined"
                                className={styles.textInput} 
                                value={this.state.text}
                                autoFocus={false} 
                                onChange={this.handleTextChange}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                />

                    <button type="submit" name='search' value="submit" className={styles.buttonStyle}>
                        Search  
                    </button>
                </form>
            </div>
        )
    }
}


export default Search