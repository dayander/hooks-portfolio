import React, { useReducer, useEffect } from 'react'
import * as ContactFormReducer from "../state/reducers/contactReducers";
import { updateFormInput } from '../state/actions/contactActions'
import axios from "axios/index";
import * as actionTypes from "../state/actions/actionTypes";
import history from '../util/History'


function ContactForm() {

  const onSubmit =  event => {
    event.preventDefault();
    event.persist();
    const contact = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }

    axios({
      method: 'post',
      url: '/api/contact',
      data: contact,
    }).then(response => {
      dispatch({
        type: actionTypes.contactSuccess
      })
    })
      .catch(err => {
        dispatch({
          type: actionTypes.contactFailed,
          payload: err
        })
      })


  }
  const handleuseReducerChange = (event) => (
    dispatch(updateFormInput({[event.target.name]:event.target.value}))
  );
  const [state, dispatch] = useReducer(ContactFormReducer.contactReducer,
    ContactFormReducer.initialState)


  useEffect(() => {
    if(state.success){
      history.push('/contact-success')
    }
  })


    return(

       <form onSubmit={onSubmit}>
         <label htmlFor='name'>
           Name:
         </label>
         <input type='text' name='name' id='name' onChange={handleuseReducerChange} value={state.name}/>

         <label htmlFor='email'>
           Email:
         </label>
         <input type='email' name='email' id='email' onChange={handleuseReducerChange} value={state.email}/>


        <label htmlFor='message'> Message: </label>
         <input type='text' name='message' id='message' value={state.message} onChange={handleuseReducerChange}/>

         <button type='submit'>
           Submit
         </button>

       </form>
    )
}

export default ContactForm
