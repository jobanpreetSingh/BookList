import './App.css';
import BookList from './pages/BookList';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import BookDetails from './pages/BookDetails';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={BookList}>
          </Route>
          <Route path='/book_details' exact component={BookDetails}>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
