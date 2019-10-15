import * as actionTypes from './actionTypes'

import axios from 'axios';


export const updateFormInput = (input) => {
  return {
    type: actionTypes.updateFormInput,
    payload: input
  }
}

export const postContact = (event) => {
  const contact = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value
  }
            return function(dispatch){
              axios({
                method: 'post',
                url: '/api/contact',
                data: contact,
              }).then(response => {
                console.log('then')
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
};
