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
    <div className="App">
      <Header />      
      <Route path='/' exact component={NotesListPage}/> 
      <Route path="/note/:id" component={NotePage}/>
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


*/