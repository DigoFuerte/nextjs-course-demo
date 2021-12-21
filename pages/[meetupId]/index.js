// Meetup Details Component Page
// DYNAMIC Page

import Head from 'next/head'

import { Fragment } from 'react'

import { MongoClient, ObjectId } from 'mongodb'

import MeetupDetail from '../../components/meetups/MeetupDetail'

const uidDb = 'dbUser'
const pwdDb = 'pr!BRItOXechl2Esp$St'
const nameDb = 'meetups'
const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`

// const MeetupDetailsPage = () => {
const MeetupDetailsPage = (props) => {
  // console.log('Data from getStaticProps')
  // console.log(props)
  return (
        // image="images/Kamp's_Earthship.png"
        // title="Kamp's_Earthship"
        // address="same, random, address"
        // description="some random description"
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={ props.meetupData.description } />
      </Head>
      <h1>Meetup Details Page</h1>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  )
}

// when getStaticProps is used on a dynamic page (like this one)
// getStaticPaths must be provided
// BECAUSE: every instance of the dynamic page must be pre-generated
//          at build time e.g for id1,id2, ... id[n-1], id[n]
export const getStaticPaths = async () => {
  //
  const mongoClient = await MongoClient.connect(uriMongoDb)
  const meetupsDb = mongoClient.db()
  const meetupsCollection = meetupsDb.collection('meetups')

  // find({}, {_id: 1})
  //      {} ... empty filter criteria
  //          {_id: 1} ... only pull out the _id values
  const MDB_MEETUPS = await meetupsCollection.find({}, { _id: 1 }).toArray()

  mongoClient.close()

  return {
    paths: MDB_MEETUPS.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
    // [
    //   { params: {meetupId: 'm1'} },
    //   { params: {meetupId: 'm2'} },
    //   { params: {meetupId: 'm3'} },
    //   { params: {meetupId: 'm4'} },
    //   { params: {meetupId: 'm5'} },
    // ],
    fallback: false,
  }
}
// fallback: false ... when paths supports all possible paths
// fallback: true  ... when paths does not supports all possible paths
//                     NextJS will try to generate the paths dynamically

export const getStaticProps = async (context) => {
  //
  const meetupId = context.params.meetupId

  // e.g. fetch data from API
  const mongoClient = await MongoClient.connect(uriMongoDb)
  const meetupsDb = mongoClient.db()
  const meetupsCollection = meetupsDb.collection('meetups')

  // find({}, {_id: 1})
  //      {} ... empty filter criteria
  //          {_id: 1} ... only pull out the _id values
  // const MDB_MEETUPS = await meetupsCollection.find({}, { _id: 1 }).toArray()
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })

  mongoClient.close()

  return {
    props: {
      // meetupData: {
      //   img: "images/Kamp's_Earthship.png",
      //   id: meetupId,
      //   title: "Kamp's_Earthship",
      //   address: 'same, random, address',
      //   description: 'some random description',
      // },
      // meetupData: selectedMeetup,
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
    revalidate: 10,
  }
}

export default MeetupDetailsPage
