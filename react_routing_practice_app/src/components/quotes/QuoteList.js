import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, asceding) => {
  return quotes.sort((quoteA, quoteB) => {
    if(asceding) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const chengeSortingHandler = () => {
    // history.replace(`/quotes?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    // history.replace(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`);
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? 'desc' : 'asc'}`
    });
  }

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={chengeSortingHandler} >Sort {isSortingAscending ? 'Descending' : 'Ascending'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
