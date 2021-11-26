import React, { useEffect } from 'react'
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuotePage = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if(status === 'completed') {
      history.replace('/quotes')
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
  }
  
  return (
    <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
  )
}

export default NewQuotePage
