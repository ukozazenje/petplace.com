import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from './footer'
import exitIntent from 'exit-intent'
import "../sass/main.sass"
import Dialog from '@material-ui/core/Dialog';
import ContactUsSection from "../components/homepage/contact-us"


const Layout = ({ children, noFooter, noSearch }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  
  const _onEvent = () => {
    this.setState({
        hasTriggered: true
    })
}
  
  const {removeExitIntent} = exitIntent({
    threshold: 5,
    maxDisplays: 1,
    eventThrottle: 20,
    onExitIntent: () => {  
      setOpen(true);
    }    
  })

  return (
    <>
      <Header noSearch={noSearch} />
      {removeExitIntent}
      {children}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <ContactUsSection />
      </Dialog>
      {
        noFooter
        ? null :
        <Footer />
      }
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
