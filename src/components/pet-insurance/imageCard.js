import React from "react"

const ImageCard = ({ imageMain, image, title, data, position }) => (
  <div className="post-card-container is-clearfix">
    <div className="image-container">
      <img className="display-image" src={ imageMain } alt={ title } />
      <div className="post-card" style={ position === 'right' ? { right: 0} : { left: 0} } >
        <img src={ image } alt={ title }/>
        <h3>{ title }</h3>
        <div dangerouslySetInnerHTML={{
          __html: data
        }} />
      </div>
    </div>
  </div>
  )

export default ImageCard;