import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
// import Container from "./components/Container";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NewContainer from "./components/NewContainer.jsx";
import UpdateContainer from "./components/update.jsx";
import HooksContainer from "./components/HooksContainer";
import HooksUpdateContainer from "./components/HooksUpdate";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>
          <h1>React Skeletons</h1>
        </header>
        <div className="content">
          <BrowserRouter>
            <Switch>
              {/* <Route path="/update/:id" component={UpdateContainer} /> */}
              {/* <Route exact path="/" component={NewContainer} /> */}
              <Route path="/update/:id" component={HooksUpdateContainer} />
              <Route exact path="/" component={HooksContainer} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </Provider>
  );
}

export default App;
