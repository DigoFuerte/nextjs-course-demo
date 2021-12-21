// Home Component Page
import Head from 'next/head'

import { MongoClient } from 'mongodb'

const uidDb = 'dbUser'
const pwdDb = 'pr!BRItOXechl2Esp$St'
const nameDb = 'meetups'
const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`
// console.log('Home Page: 02')
// console.log(uriMongoDb)

import { Fragment } from 'react'
// import { Fragment, useEffect, useState } from 'react'

import MeetupList from '../components/meetups/MeetupList'

// import Layout from '../components/layout/Layout'

// 'https://commons.wikimedia.org/wiki/File:Convection_banner_1.jpg#/media/File:Convection_banner_1.jpg',
// "https://commons.wikimedia.org/wiki/File:Kamp%27s_Earthship.png#/media/File:Kamp's_Earthship.png",
// 'https://commons.wikimedia.org/wiki/File:Earthship_Brighton_Front.jpg#/media/File:Earthship_Brighton_Front.jpg',
// 'https://commons.wikimedia.org/wiki/File:Inside_greenhouse_of_Global_model_Earthship.JPG#/media/File:Inside_greenhouse_of_Global_model_Earthship.JPG',
// 'https://commons.wikimedia.org/wiki/File:G2_Global_model_Earthship_Taos_N.M..JPG#/media/File:G2_Global_model_Earthship_Taos_N.M..JPG',

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     image: 'images/Convection_banner.jpg',
//     title: 'Convection banner',
//     address: 'Design',
//     descriptopn: 'meetup one',
//   },
//   {
//     id: 'm2',
//     image: "images/Kamp's_Earthship.png",
//     title: "Kamp's Earthship",
//     address: 'New Mexico',
//     descriptopn: 'meetup two',
//   },
//   {
//     id: 'm3',
//     image: 'images/Earthship_Brighton_Front.jpg',
//     title: 'Brighton Earthship',
//     address: 'Brighton',
//     descriptopn: 'meetup three',
//   },
//   {
//     id: 'm4',
//     image: 'images/Inside_greenhouse_of_Global_model_Earthship.jpeg',
//     title: 'Inside greenhouse of Global model',
//     address: 'New Mexico',
//     descriptopn: 'meetup four',
//   },
//   {
//     id: 'm5',
//     image: 'images/Global_model_Earthship_Taos_N.M.jpeg',
//     title: 'Global model Earthship Taos',
//     address: 'New Mexico',
//     descriptopn: 'meetup five',
//   },
// ]

// props from the pre-render call to getStaticProps

const HomePage = (props) => {
  //#region
  //

  // const [loadedMeetups, setLoadedMeetups] = useState([])

  // the empty dependency array means the effect is run
  // on the initial render of the component
  // useEffect(() => {
  // 1. send http request to fetch meetups data
  // 2. setLoadedMeetups()

  // simulate fetching data via an http request
  // setLoadedMeetups(DUMMY_MEETUPS)
  // }, [])
  // ! NOTE: the useEffect function is run after
  // ! the component function has executed
  // therefore in the initial render of the component
  //  loadedMeetups is empty
  // then the state changes when the useEffect function is executed
  // this causes the component to be re-rendered... loadedMeetups populated

  // const testStr = 'hjhkjfghfdkgjh'
  //#endregion

  console.log('Home Page: 02')
  console.log(uriMongoDb)

  return (
    <Fragment>
      {/* <Layout> */}
      {/* moved into _app.js */}
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse a list of React Meetups' />
      </Head>
      <h1>HomePage</h1>
      {/* <MeetupList meetups={loadedMeetups} /> */}
      <MeetupList meetups={props.meetups} />
      {/* </Layout> */}
    </Fragment>
  )
}

// runs on the server after deployment
// for every request for this component page
// better for situations where the data changes frequently... e.g every sec
// export const getServerSideProps = async (context) => {
//   // e.g fetch data from an API

//   const requestObj = context.req
//   const responseObj = context.res

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   }
// }

// Only for Component Page... NextJS looks for getStaticProps
// to produce page pre-loaded with data on the server... not client-side
// getStaticProps gets called before the component function
// NOTES: runs duriog the build process
// better for situations where the data does not changes frequently
// ADV: makes use of caching
// export async function getStaticProps() {
export const getStaticProps = async () => {
  // e.g fetch data from an API... etc

  // NextJS allow the use fetch on the server-side
  // BUT using fetch here is a bit redundant, it is run on the server
  // const DB_MEETUPS = await fetch('/api/meetups')

  const mongoClient = await MongoClient.connect(uriMongoDb)
  const meetupsDb = mongoClient.db()
  const meetupsCollection = meetupsDb.collection('meetups')

  const MDB_MEETUPS = await meetupsCollection.find().toArray()
  console.log('Home Page: 02')
  console.log(`Meetups found: ${MDB_MEETUPS.length}`)

  mongoClient.close()

  // getStaticProps must always return an object
  // revalidate (number in seconds) ... enables incremental static generation
  //    if there are requests for this page the data gets regenerated on that frequency

  // meetups: DUMMY_MEETUPS,
  // the call to map() is required because the object returned from MongoDb
  // has an Id object that cannot be handled without code
  return {
    props: {
      meetups: MDB_MEETUPS.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        description: meetup.description,
      })),
      // props: {
      //   meetups: MDB_MEETUPS,
      // },
      revalidate: 10,
    },
  }
}

export default HomePage
