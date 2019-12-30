import React, { useState }  from 'react'
import ExitIntent from '../components/homepage/ExitIntent'
import Dialog from '@material-ui/core/Dialog'
import ContactUsSection from "../components/homepage/contact-us"

export default function EmailDialog() {
    const [count, setCount] = useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
      setOpen(false);
      setCount(count + 1);
      localStorage.setItem('closed', (count + 1));  
    };
    
    const {removeExitIntent} = ExitIntent({
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
            {
                ((localStorage.getItem('closed')) <= 0) ? (
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <ContactUsSection />
                    </Dialog>
                ) : null 
            }  
        </div>
    )
}
