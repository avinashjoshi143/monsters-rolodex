import './App.css';
import { Component } from 'react';
import {CardList} from './components/card-list/card.list.component';
import {SearchBox} from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello My Name is Avinash
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField : ""
      } 
    }
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(Response => Response.json())
      .then(users => this.setState({monsters: users}));
    }

    handlechange = (e) => {
      this.setState({searchField: e.target.value})
    }

  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      );

    return(
      <div className="App">
        <h1 className="apph1">Monsters Rolodex</h1>
        <SearchBox 
        placeHolder = 'search monsters'
        handlechange = {this.handlechange}
        />
        <CardList monsters = {filteredMonsters}> 
          
        </CardList>
      </div>
    );
  }
}

export default App;
