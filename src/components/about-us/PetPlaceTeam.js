import React from 'react'
import PetPlaceTeamImg from '../../images/about-us/petplace-team.png'

const PetPlaceTeam = () => {
  return (
    <>
      <section className="section petplace-team-section">
        <div className="container is-fullhd">
          <div className="columns">
            <div className="column is-7">
              <h2>The PetPlace Team</h2>              
              <p>At PetPlace, we know that every pet parent’s experience is different. We know that because so many members of our team have dogs, cats, birds, and other pets of their own. A number of our writers are even seasoned pet care professionals, including veterinarians, vet technicians, and trainers. We don’t just talk about pet care, we live it. That’s why we’re a trusted resource for thousands of pet parents just like you.</p>
            </div>
            <div className="column image-wrapper">
              <img src={PetPlaceTeamImg} alt="Woman hugging puppies" />
            </div>
          </div>         
        </div>
        
      </section>
    </>
  )
}

export default PetPlaceTeam