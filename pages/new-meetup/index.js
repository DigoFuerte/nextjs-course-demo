// new meetup page

import Head from 'next/head'
import { useRouter } from 'next/router'

import { Fragment } from 'react'

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
  // 
  const router = useRouter()
  
  const addMeetupHandler = async (enteredMeetupData) => {
    console.log('Inside addMeetupHandler()')
    console.log(enteredMeetupData)

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const responseData = await response.json()
    console.log(responseData)

    router.push('/')

  }

  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta name='description' content='Add new meetup to React Meetups' />
      </Head>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetupPage
