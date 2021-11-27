import React, { useEffect } from "react";
import { Fragment } from "react";
import { Route, useParams } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from '../hooks/use-http';
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuotePage = () => {
  const params = useParams();
  const match = useRouteMatch();
  const { sendRequest, data: quote, status } = useHttp(getSingleQuote, true);
  
  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest, params.quoteId]);

  if(status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(!quote) {
    return <p className="centered">No Quote found!</p>;
  }

  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
      <div className="centered">
          <Link className="btn--flat" to={match.url}>
            Hide Comments
          </Link>
        </div>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuotePage;
