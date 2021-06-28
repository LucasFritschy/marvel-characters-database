import { Header } from './components/Header'
import { Main } from './components/Main'
import { CharacterDetail } from './components/CharacterDetail'
import { GlobalStyle } from './styles/global'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
