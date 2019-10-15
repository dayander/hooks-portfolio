import React, {useReducer} from 'react'
import * as ContactFormReducer from '../reducers/contactReducers'
import { postContact, updateFormInput } from "../actions/contactActions";
import Context from './context'



const ContextStateValue = () => {

  const [stateFormReducer, dispatchFormReducer] = useReducer(ContactFormReducer.contactReducer,
    ContactFormReducer.initialState)

  const handleFormChange = (event) => {
    console.log(event)
    dispatchFormReducer(updateFormInput(event))
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    event.persist();
    dispatchFormReducer(postContact(event))

  };



  const contextValue = {
    useContextChangeState: stateFormReducer.user_textChange,
    useContextSubmitState: stateFormReducer.user_textSubmit,
    useContextSubmit: (event) => handleFormSubmit(event),
    useContextChange: (event) => handleFormChange(event),

  }

  return contextValue
}


export default ContextStateValue



