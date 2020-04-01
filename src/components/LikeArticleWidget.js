import React, { useState } from 'react'
import pawImg from "../images/paw_no.png"
import {Formik, Form, Field} from 'formik'
import axios from 'axios'
import Dialog from '@material-ui/core/Dialog'
import ContactUsSection from "./homepage/contact-us"

const ThankYouMsg = () => <span>Thank you so much for making petplace.com even better web destination for us and our furry friends!</span>

const HandleSubmit = (setSuccessMsg, url, wordpress_id, helpful, feedback) => {

  const d = new Date()
  const day = d.getDay()
  const year = d.getFullYear() 
  const month = d.getMonth()
  const hour = d.getHours()
  const minutes = d.getMinutes()
  const seconds = d.getSeconds()
  const timestamp = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`

  const data = {
    post_id: wordpress_id,
    helpful,
    url: process.env.GATSBY_WEB_SITE_URL + url,
    feedback: feedback || "none",
    timestamp,
  }
  axios.post('https://mkhl1ii6eb.execute-api.us-east-1.amazonaws.com/prod', data
  ).then(res => setSuccessMsg(true))
  .catch( err => console.log(err))
}

const FormContent = (successMsg, setSuccessMsg, url, wordpress_id) => {
  return (
    successMsg ? 
    ThankYouMsg() :
    <Formik
      initialValues={{ feedback: '' }} 
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
            <button type="submit">SEND</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

const LikeArticleContent = (setFormState, setSuccessMsg, successMsg, url, wordpress_id) => {
  const helpful = "yes"
  return (
    successMsg ? 
    ThankYouMsg() : 
    <>
      <span>Was this article helpful?</span>
      <span className="yes-btn" onClick={() => HandleSubmit(setSuccessMsg, url, wordpress_id, helpful )} >Yes</span>
      <img src={pawImg} onClick={() => setFormState(true)}/>
    </>
  )
}

const LikeArticleWidget = ({url, wordpress_id}) => {
  const [ formActive, setFormState ] = useState(false)
  const [ successMsg, setSuccessMsg] = useState(false)
  const [open, setOpen] = useState(false);
  return (
    <div className="like-post-container">
      {formActive ? 
        FormContent(successMsg, setSuccessMsg, url, wordpress_id) : 
        LikeArticleContent(setFormState, setSuccessMsg, successMsg, url, wordpress_id)}
      <button onClick={() => {setOpen(true)} }>Sign Up Now</button>
      <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
          <ContactUsSection />
      </Dialog>
    </div>
  )
}

export default LikeArticleWidget
