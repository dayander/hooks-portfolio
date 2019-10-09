import React, {useState} from 'react'
import { Form, Field } from 'react-final-form'
import usePost from '../Hooks/usePost'


function ContactForm() {
  const [loading, setLoading] = useState(false)
  const onSubmit =  values => {
  }

    return(
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit}>
                  <label htmlFor='name'>
                      Name
                  </label>
                  <Field
                    name='name'
                    component='input'
                    type='text'
                  />
                <label htmlFor='email'>
                  Email
                </label>
                <Field
                  name='email'
                  component='input'
                  type='email'
                />
                <label htmlFor='message'>
                  Message
                </label>
                <Field
                  name='message'
                  component='input'
                  type='textarea'
                />
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </form>
            )}
        />
    )
}

export default ContactForm