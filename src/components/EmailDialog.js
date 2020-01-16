import React, { useState }  from 'react'
import exitIntent from 'exit-intent'
import Dialog from '@material-ui/core/Dialog'
import ContactUsSection from "../components/homepage/contact-us"

export default function EmailDialog() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = React.useState(false);
  let oldY = 0;
  let directionY = '';

  if (typeof window !== 'undefined') {
    const handleClose = () => {
      setOpen(false);
      setCount(count + 1);
      localStorage.setItem('closed', (count + 1));  
    };
    
    exitIntent({
      threshold: 5,
      maxDisplays: 1,
      eventThrottle: 200,
      onExitIntent: () => {  
        setOpen(true);
      }    
    })

    function captureMouseMove($event){
      if ($event.pageY < oldY) {
          directionY = "top"
          return directionY;
      } else if ($event.pageY > oldY) {
          directionY = "bottom";
          return directionY;
      }
      oldY = $event.pageY;
    }

    window.addEventListener('mousemove', captureMouseMove);
   
    return (
        <div>
            {
                ((localStorage.getItem('closed')) <= 0 || (directionY === 'bottom')) ? (
                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <ContactUsSection />
                    </Dialog>
                ) : null 
            }  
        </div>
    ) 
  } else {
    return null;
  }
}
