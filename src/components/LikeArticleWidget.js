import React, { useState } from 'react'
import pawImg from "../images/paw_no.png"
import {Formik, Form, Field} from 'formik'

const FormContent = (successMsg, setSuccessMsg) => {

  return (

    successMsg ? 

    <span>Thank you so much for making petplace.com even better web destination for us and our furry friends!</span> :
    
    <Formik
      initialValues={{ comment: '' }} 
      onSubmit={(values, actions) => setSuccessMsg(true) }
    >
      {props => (
        <div className="form-container">
          <span>How can we improve this article?</span>
          <Form>
            <Field name="comment" component="textarea" placeholder="Type your comment">

            </Field>
            <button type="submit">SEND</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

const LikeArticleContent = (setFormState) => (
  <>
    <span>Was this article helpful?</span>
    <span>Yes</span>
    <img src={pawImg} onClick={() => setFormState(true)}/>
  </>
)

const LikeArticleWidget = () => {
  const [ formActive, setFormState ] = useState(false);
  const [ successMsg, setSuccessMsg] = useState(false);
  // const [formState, setFormState] = useState[false]
  return (
    <div className="like-post-container">
      {formActive ? FormContent(successMsg, setSuccessMsg) : LikeArticleContent(setFormState)}
      <button onClick={() =>setFormState(true) }>Sign Up Now</button>
      <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
    </div>
  )
}

export default LikeArticleWidget
