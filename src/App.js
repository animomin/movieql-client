import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";
import Home from "./Home";
import Detail from "./Detail";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/detail/:movieId"} component={Detail} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
