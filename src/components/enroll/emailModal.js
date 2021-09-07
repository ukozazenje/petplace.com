import React from "react"
import Dialog from "@material-ui/core/Dialog"
import { Form, Formik, Field } from "formik"
const emailModal = ({ open, setOpen }) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="form-dialog-title"
    >
      <div className="email-quote">
        <h4>Email Quote</h4>
        <p>Send a link to this quote</p>
        <Formik
          initialValues={{
            email_quote: "",
          }}
          // validate={validate}
          onSubmit={(values, actions) => {
            setOpen(false)
          }}
        >
          {props => (
            <Form>
              {/* <label htmlFor="email_quote">Email</label> */}
              <Field type="email" name="email_quote" placeholder="Email" />
              <button type="submit">Send</button>
            </Form>
          )}
        </Formik>
      </div>
    </Dialog>
  )
}

export default emailModal
