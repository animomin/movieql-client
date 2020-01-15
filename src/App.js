import React from "react";
import { ApolloProvider } from "react-apollo";
import client from "./apolloClient";

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App" />
      </ApolloProvider>
    );
  }
}

export default App;
