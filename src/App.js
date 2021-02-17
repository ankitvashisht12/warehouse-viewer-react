import Header from './components/header/Header';
import Home from './containers/home-container/home';
import {Router} from '@reach/router';
import Detail from './components/detail/Detail';

function App() {
  return (
    <div>
      <Header />
      <Router>
      <Home path="/" />
      <Detail path="/details/:id" />
      </Router>
   </div>
  );
}

export default App;
