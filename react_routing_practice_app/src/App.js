import { Switch, Route, Redirect } from "react-router-dom";
import NewQuotePage from "./pages/NewQuote";
import QuotePage from "./pages/QuoteDetails";
import QuotesPage from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <QuotesPage />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuotePage />
        </Route>
        <Route path="/new-quote">
          <NewQuotePage />
        </Route>
        <Route path="*">
          <p className="centered">Page Not Found!</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
