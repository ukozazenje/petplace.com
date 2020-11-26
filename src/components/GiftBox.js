import React from 'react'

const GiftBox = ({children,img, title}) => {
  return (
    <div className="gift-box">
      <div className="gift-box-image">
        <img src={img} alt="gift" />
      </div>
      <div className="gift-box-content">
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  )
}

export default GiftBox
