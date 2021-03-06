import { Component } from "react";
import './App.css';
import beastList from "./data.json"
import Header from './components/Header';
import Main from './components/Main';
import SelectedBeast from './components/SelectedBeast';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      selBeastUrl: null,
      selBeastTitle: null,
      selBeastDescription: null,
      modalShowing: false,
    }
  }

  handlePicClick = (theBeast) => {
    this.setState({
      selBeastUrl: theBeast.props.image_url, 
      selBeastTitle: theBeast.props.title, 
      selBeastDescription: theBeast.props.description,
      modalShowing: true
    })
  }

  exitModal = () => {
    this.setState({modalShowing: false});
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <SelectedBeast 
          url={this.state.selBeastUrl} 
          title={this.state.selBeastTitle}
          exitModal = {this.exitModal} 
          description = {this.state.selBeastDescription}
          showing={this.state.modalShowing}
        />
        <Main 
          list={beastList} 
          handlePicClick={this.handlePicClick} 
          className = "main"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
