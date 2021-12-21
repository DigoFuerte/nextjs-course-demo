// Meetup Detail Component Page

// import { Fragment } from "react"

import classes from './MeetupDetail.module.css'

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      {/* <img src="images/Kamp's_Earthship.png" alt="Kamp's_Earthship" />
      <address>same, random, address</address>
      <p>some random description</p> */}
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail
