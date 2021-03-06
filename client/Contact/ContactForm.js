import React, { useReducer, useEffect } from 'react'
import * as ContactFormReducer from "../state/reducers/contactReducers";
import { updateFormInput } from '../state/actions/contactActions'
import axios from "axios/index";
import * as actionTypes from "../state/actions/actionTypes";
import history from '../util/History'
import {makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  errorMessage: {
    margin: '0 auto'
  },
  formGroup:{
    marginBottom: '15px',
  },
  formLabel: {
    marginBottom: '5px',
    fontWeight: '700',
    display: 'inline-block',
    maxWidth: '100%'
  },
  formInput: {
    display: 'block',
    width: '100%',
    height: '45px',
    fontSize: '16px',
    lineHeight: '1.5',
    border: '1px solid #000',
    borderRadius: '5px'
  }
}))


function ContactForm() {
  const [state, dispatch] = useReducer(ContactFormReducer.contactReducer,
    ContactFormReducer.initialState)

  const classes = useStyles()

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

  useEffect(() => {
    if(state.success){
      history.push('/contact-success')
    }
  })

  const errorMessage = (
        <div>
          {state.error}
        </div>
      )

    return(

       <form onSubmit={onSubmit}>
         {state.failed?errorMessage:''}
         <div className={classes.formGroup}>
           <label htmlFor='name' className={classes.formLabel}>
             Name:
           </label>
           <input
             type='text'
             name='name'
             id='name'
             onChange={handleuseReducerChange}
             value={state.name}
             className={classes.formInput}
           />
         </div>
         <div className={classes.formGroup}>
           <label htmlFor='email' className={classes.formLabel}>
             Email:
           </label>
           <input
             type='email'
             name='email'
             id='email'
             onChange={handleuseReducerChange}
             value={state.email}
             className={classes.formInput}
           />
         </div>
         <div className={classes.formGroup}>
          <label htmlFor='message' className={classes.formLabel}>
            Message:
          </label>
           <input
             type='text'
             name='message'
             id='message'
             value={state.message}
             onChange={handleuseReducerChange}
             className={classes.formInput}
           />
         </div>

         <Button style={{border: '1px solid #000', background: '#fff'}} type='submit'>
           Submit
         </Button>

       </form>
    )
}

export default ContactForm
