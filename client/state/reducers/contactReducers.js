import * as actionTypes from '../actions/actionTypes'

export const initialState = {
        name: '',
        email: '',
        message:'',
        success: false,
        failed: false,
        error: ''
};

export const contactReducer=(state, action) =>{
    switch(action.type) {
      case actionTypes.updateFormInput:
        return {
          ...state,
          ...action.payload
        }
      case actionTypes.contactSuccess:
        return{
          ...state,
          success: true
        }
      case actionTypes.contactFailed:
        return {
          ...state,
          failed: true,
          error: 'There was an error while submitting. Please try again.'
        }
      default:
        return state
    }

};

