import { MongoClient } from "mongodb"; //you can have server side imports as well, next will detect it and not include in the client side
import React, { Fragment } from "react";
import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  //if we get data this was, only in the second render cycle the html will actually contain the data
  //which is not good for SEO

  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   //fetch some data from BE
  //   setLoadedMeetups(DUMMY_LIST);
  // }, []);

  return (
    <Fragment>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="Browse a huge list of highly active meetups!"/>
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

//this function runs during build process, more commonly used
//if you dont need to refresh the site every second
//and dont need the req object for for example authentication purposes, staticProps is better
//it can check if there was changes in the content so it can load faster if there wasnt
export async function getStaticProps() {
  //this code will never be exposed to the client so you can do secret stuffs in here
  //such as requesting a secret api or DB etc...
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ivuvf.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    //regenerate the pasge (html) is there was a request for the website to the content is always up to date
    //in seconds
    revalidate: 1,
  };
}

// //this function runs always on the server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //fetch data or any code that you want to run on the server side
//   //e.g. use credentials that shouldnt be exposed to the user
//   return {
//     props: {
//       meetups: DUMMY_LIST
//     }
//   }
// }
