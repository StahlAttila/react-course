import React, { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

export default function NewMeetupPage() {
  const addMeetupHandler = async (meetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("DATA", data);
  };

  return (
    <Fragment>
      <Head>
        <title>Add new meetup</title>
        <meta name="description" content="Add a new cool place to meet." />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
