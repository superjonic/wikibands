import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home/Home';
import BandDetail from './components/Banddetail/BandDetail';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Auth0ProviderWithHistory from './auth0Provider';

function App() {
  return (
    <Auth0ProviderWithHistory>
      <Switch>
        <Route exact path ="/"> <Landing /> </Route>
        <Route path ="/register"> <Signup /> </Route>
        <Route path ="/login"> <Login /> </Route>
        <Route path="/home">  <Home />  </Route>
        <Route path ="/band/:id"> <BandDetail /> </Route>

      </Switch>
    </Auth0ProviderWithHistory>
  );
}

export default App;
