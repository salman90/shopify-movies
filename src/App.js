import React, { PureComponent } from 'react';
import axios from 'axios';
import appStyles from './App.module.css';
import Header from './components/header';
import Search from './components/search';
import SearchList from './components/searchList';
import NominationList from './components/nomination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends PureComponent {
  

  state = {
    searchResult: [],
    nominations: [],
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
    if (prevState.nominations.length != this.state.nominations.length)
    {
      localStorage.setItem('nominations', JSON.stringify(this.state.nominations));
    }
  }


  


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
    axios.get(' http://www.omdbapi.com/?apikey=110ce11', {
      params: {
        s: text,
        type: "movie"
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
      console.log(err)
      toast.error(err.toString())
    })
  }

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
      let searchCopy = [...this.state.searchResult];
      this.setState({
        nominations: [...this.state.nominations, nominationItem]
      })
      // this.addToLocalStorage(nominationItem)
      toast.success(nominationItem.Title + " added to nominations list successfully")
      // console.log(localStorage.getItem('nominations'), " nominations")
      // localStorage.setItem('nominations', JSON.stringify(this.state.nominations))
    }
  }




  removeNomination = (nominationItem) => {
    let copyArray = [...this.state.nominations];
    let index = copyArray.indexOf(nominationItem);
    if (index !== -1)
    {
      copyArray.splice(index, 1)
      this.setState({ nominations: copyArray });
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
         style={{
           display: "flex",
           flex: 1,
           background: "geen",
           flexDirection: "row",
           height: 500,
         }}
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
