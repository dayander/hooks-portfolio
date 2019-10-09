"use strict";

import axios from 'axios';

export const postContact = (contact) => {
            axios({
                method: 'post',
                url: '/api/contact',
                data: contact,

            })
                .then(response => {
                    return true
                })
                .catch(err => {
                    return err
                })
    };


export const setFormInput = (input) => {


    return function(dispatch){
    dispatch({type: "SET_FORM_INPUT", payload: input});}
};




export const sendContactForm = (url, values) => {
  axios({
    method: 'POST',
    url: url,
    data: values,

  })
}