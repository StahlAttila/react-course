import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const {
    sendRequest,
    data: comments,
    status,
  } = useHttp(getAllComments, true);
  const params = useParams();
  const { quoteId } = params;

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  },[sendRequest, quoteId]);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let commentsSection;

  if (status === "pending") {
    commentsSection = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && (comments && comments.length > 0)) {
    commentsSection = <CommentsList comments={comments} />
  }

  
  if (status === "completed" && (!comments || comments.length === 0)) {
    commentsSection = <p className="centered">Such empty...</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm onAddedComment={addCommentHandler} quoteId={quoteId} />
      )}
      {commentsSection}
    </section>
  );
};

export default Comments;
