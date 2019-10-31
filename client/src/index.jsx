import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Server from './Server.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    this.props.Server.post(term, (top25repos) => {
      this.setState({repos: top25repos});
    });
  }

  //componentDidMount calls Server.get
  // so everytime there is a page refresh it
  // will populate repos in state

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App Server={Server} />, document.getElementById('app'));