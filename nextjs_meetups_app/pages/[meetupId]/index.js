import React, { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from 'next/head';

export default function MeetupDetailsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meta.description}/>
      </Head>
    <MeetupDetails
      image={props.meetup.image}
      title={props.meetup.title}
      address={props.meetup.address}
      description={props.meetup.description}
    />
    </Fragment>
  );
}

//only need to use if if we are using getStaticProps AND having a dynamic path
export async function getStaticPaths() {
  //you need all the possibilities that a dynamic param can be, usually this is not hardcoded like this but
  //generated on the serversid and used here
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const client = await MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivuvf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  //first object is to filter {} -> find all, secodn object is to which fields to retrieve from the data {_id: 1} -> gets the id fields
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivuvf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)})

  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description
      },
    },
  };
}
