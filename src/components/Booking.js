import React from "react";
import BookingForm from './BookingForm';

const Booking = (props) =>{
    return (
        // <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} 
        // SubmitForm={props.SubmitForm}/>

        <div>
    <h1>Booking</h1>
    <BookingForm />
  </div>
    );
};

export default Booking;