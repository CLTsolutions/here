import { Component } from 'react';
import './App.css';
import { Auth } from './auth'
import { Home } from './home'
import { Profile } from './user'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

type AppState = {
  token: string | null
}

type AppProps = {
}

class App extends Component<AppProps, AppState>{
  constructor(props: AppProps) {
    super(props)
    this.state = {
      token: null
    }
  }

  componentDidMount = () => {
    let token = localStorage.getItem("token")
    if (token) this.setToken(token)
  }
  setToken = (value: string) => {
    this.setState({ token: value })
  }

  render() {
    return (
      <Router>
            {this.state.token ? 
              <Redirect to="/home" /> :
              <Redirect to="/auth" />
            }
        <Switch>
          <Route path="/auth">
            <Auth setToken={this.setToken}/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
