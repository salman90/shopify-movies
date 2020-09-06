import React, { PureComponent } from 'react';
import axios from 'axios';
import appStyles from './App.module.css';
import Header from './components/header';
import Search from './components/search';
import SearchList from './components/searchList';
import NominationList from './components/nomination';
import { ToastContainer, toast } from 'react-toastify';
import { URL, API_KEY, PARAM_TYPE } from './constants';
import 'react-toastify/dist/ReactToastify.css';
import { removeFromArray } from './util'

/**
 * @class App
 * @extends React.PureComponent
 * @description this a component of the all the components and it handle all the application state
 */
class App extends PureComponent {
/**
 * @constructor
 * @param {object} props
 */
  constructor(props) {
    super(props)
    this.state = {
      searchResult: [],
      nominations: [],
    }
  }


  componentDidMount() {
    const nominations = JSON.parse(localStorage.getItem('nominations'));
    if (nominations !== null && nominations.length > 0)
    {
      this.setState({
        nominations: nominations
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if (prevState.nominations.length !== this.state.nominations.length)
    {
      localStorage.setItem('nominations', JSON.stringify(this.state.nominations));
    }
  }


  
  /**
   * @description fech information from Omdb API and sets the searchResult to data coming from the API
   * @param {String} text - seachInput
   */
  handleSubmitSearch = async (text) => {
   if(text.length > 0){
     this.fetchMovies(text)
   }
   else
   {
     toast.warn("Serach is empty")
   }
  }

  async fetchMovies(text){
    axios.get(`${URL}apikey=${API_KEY}`, {
      params: {
        s: text,
        type: PARAM_TYPE
      }
    })
    .then((res) => {
      if (res.data.Response === "True")
      {
        this.setState({
          searchResult: res.data.Search
        })
      }
      else
      {
        throw new Error(res.data.Error);
      }
    })
    .catch((err) => {
      toast.error(err.toString())
    })
  }

  /**
   * @description adds a nominationItem Object to nominations array
   * @param {Object} nominationItem
   */
  addNominations = (nominationItem) => {
    if (this.state.nominations.some(nomination => nomination.imdbID === nominationItem.imdbID))
    {
      toast.warn(nominationItem.Title + " already exists in nominations");
    }
    else if (this.state.nominations.length >= 5)
    {
      toast.warn("Can't add more than five nominations")
    }
    else
    {
      const newArray = removeFromArray(nominationItem, this.state.searchResult);
      if (newArray !== null)
      {
        this.setState({
          nominations: [...this.state.nominations, nominationItem],
          searchResult: newArray
        });
        toast.success(nominationItem.Title + " added to nominations list successfully");
      }
    }
  }


  /**
   * @description removes a nominationItem from nomination array
   * @param {Object} nominationItem 
   */
  removeNomination = (nominationItem) => {
    const newArray = removeFromArray(nominationItem, this.state.nominations);
    
    if (newArray !== null)
    {
      this.setState({ nominations: newArray });
      toast.success("Removed " + nominationItem.Title + " from nomination list")
    }
    else
    {
      toast.error("can't remove " + nominationItem.Title)
    }

    
  }


  render(){
    return (
      <div className={appStyles.App}>
        <Header />
        <Search
          handleSubmitSearch={this.handleSubmitSearch}
        />
        <div
          className={appStyles.ListsContainer}
        >
          <SearchList
            searchResult={this.state.searchResult}
            handelNomination={this.addNominations}
          />
          <NominationList
            nominations={this.state.nominations} 
            removeNomination={this.removeNomination}
          />
        </div>
        <ToastContainer 
          draggable={false}
          position={'bottom-right'}
          autoClose={3000}
        />
      </div>
    );
  }
}

export default App;
