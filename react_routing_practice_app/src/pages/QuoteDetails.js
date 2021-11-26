import React from "react";
import { Fragment } from "react";
import { Route, useParams } from "react-router";
import { Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "State", text: "swag swag yolo yolo" },
  { id: "q2", author: "State2", text: "lorem asd ydsa dasd asdk " },
  { id: "q3", author: "State3", text: "asdasd asd asd , asdasd,d asdasd!!" },
];

const QuotePage = () => {
  const params = useParams();
  const match = useRouteMatch();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
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
