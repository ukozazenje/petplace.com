import React, { useState } from 'react'
import pawImg from "../images/paw_no.png"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import ContactUsSection from "./homepage/contact-us"
import EmailImg from '../images/widget-email-pets.png'
import CounterPawImg from '../images/counterPaw.svg'

const validate = (values) => {
  const errors = {};
  if (!values.feedback) {
    errors.feedback = 'Required';
  }
  return errors;
};

const ThankYouMsg = () => <span className="thank-you-msg">Thanks for helping us make PetPlace the ultimate destination for pet enthusiasts!</span>

const FormContent = (successMsg, setSuccessMsg, url, wordpress_id, HandleSubmit) => {
  return (
    successMsg ? 
    ThankYouMsg() :
    <Formik
      initialValues={{ feedback: '' }} 
      validate={validate}
      onSubmit={({feedback}, actions) => {
        const helpful = 'no'
        HandleSubmit(setSuccessMsg, url, wordpress_id, helpful, feedback)
      } }
    >
      {props => (
        <div className="form-container">
          <span>How can we improve this article?</span>
          <Form>
            <Field name="feedback" component="textarea" placeholder="Type your comment" />
            <ErrorMessage component="div" className="error" name="feedback" />
            <button type="submit">SEND</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

const LikeArticleContent = (setFormState, setSuccessMsg, successMsg, url, wordpress_id, HandleSubmit) => {
  
  const helpful = "yes"
  return (
    successMsg ? 
    ThankYouMsg() : 
    <>
      <span>Was this article helpful?</span>
      <span className="yes-btn" onClick={() => HandleSubmit(setSuccessMsg, url, wordpress_id, helpful )} >Yes</span>
      <span className="yes-btn" onClick={() => setFormState(true)}>No</span>
    </>
  )
}

const LikeArticleWidget = ({url, wordpress_id, likes, HandleSubmit, liked}) => {
  
  const [ formActive, setFormState ] = useState(false)
  const [ successMsg, setSuccessMsg] = useState(liked)
  const [open, setOpen] = useState(false);
  if (typeof window !== 'undefined') {

    return (
      <div className="like-post-container">
        <div className="counter">
          <img src={CounterPawImg} alt="CounterPaw"/>
          <p>{likes} paws up</p>
        </div>
        
        {
          liked ? ThankYouMsg() : (
            formActive ? 
            FormContent(successMsg, setSuccessMsg, url, wordpress_id, HandleSubmit) : 
            LikeArticleContent(setFormState, setSuccessMsg, successMsg, url, wordpress_id, HandleSubmit))
        }
        
        <img className="email-pets" src={EmailImg} alt="email" />
        <div className="sign-up-wrapper">
          <p>Get the best of PetPlace straight to your inbox.</p>
          <button onClick={() => {setOpen(true)} }>Sign Up Now</button>
          <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
            <ContactUsSection />
        </Dialog>
      </div>
    )
  } else {
    return null
  }
}

export default LikeArticleWidget
