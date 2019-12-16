import React from 'react'
import exitIntent from 'exit-intent'
import Dialog from '@material-ui/core/Dialog'
import ContactUsSection from "../components/homepage/contact-us"

export default function EmailDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
    };
    
    const {removeExitIntent} = exitIntent({
      threshold: 5,
      maxDisplays: 1,
      eventThrottle: 20,
      onExitIntent: () => {  
        setOpen(true);
      }    
    })

    return (
        <div>
            {removeExitIntent}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                 <ContactUsSection />
            </Dialog>
        </div>
    )
}
