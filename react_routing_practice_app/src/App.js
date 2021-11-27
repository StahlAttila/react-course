import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import NewQuote from "./pages/NewQuote";
// import Quote from "./pages/QuoteDetails";
import Quotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const Quote = React.lazy(() => import("./pages/QuoteDetails"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <Quotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <Quote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <p className="centered">Page Not Found!</p>
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
