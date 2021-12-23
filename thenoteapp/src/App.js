//we need to import our components 
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import NotesListPage from './pages/NotesListPage';
import NotePage from './pages/NotePage'


function App() {
  return (
    <Router>
    <div className="container dark">
      <div className="app">
        <Header />      
        <Route path='/' exact component={NotesListPage}/> 
        <Route path="/note/:id" component={NotePage}/>
      </div>
    </div>
    </Router>
  );
}

export default App;



/*---------------------------------------------
Things that i'm learning 

-Components
We gonna have components that are different parts of our page 
And we gonna have components that represent differents pages

-rafce with the es7 snippet with can write an arrow function by react

-the pages folder will hold all of your pages components

-props is a immutable form of data that we can't modify it once
we pass it down 
-state is data that we can update

-for the react router dom i can check here
https://v5.reactrouter.com/web/guides/quick-start

-in adition i noticed that component was replace by element
as component={NotesListPage} by  element={<NotesListPage/>}

-After we create the dummy backend with the json server 
by using npm install -g json-server
and to create and watch the db.json by using json-server --watch db.json

We don't want that at every time we want to use it we have to use the command 
to watch it so we gonne make a shortcut in the package.json.
  ##this shortcut is in the script
  "server": "json-server --watch db.json --port 5000"
d

*/