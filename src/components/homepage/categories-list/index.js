import React from 'react'
import petCareIcon from "../../../images/pet-care.png"
import petHealthIcon from "../../../images/pet-health.png"
import petInsuranceIcon from "../../../images/pet-insurance.png"
import petTrainingIcon from "../../../images/pet-training.png"
import breedLibraryIcon from "../../../images/breed-library.png"
import justForFun from "../../../images/just-for-fun.png"
import Card from "./categoryCard"
import DogImg from '../../../static/images/dogImg'
const CategoriesList = () => {
  return (
    <section className="section home-page-intro">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third-tablet is-one-third-fullhd home-page-intro-heading">
            <div className="intro-content">
              <h2>You Don’t Have To Be Human To <span className="highlight">Be Family</span></h2>
              <p>Ask any pet parent.  Our pets are our furry children, beloved members of our family.  We love them dearly and we want to give them the best possible life.</p>
            </div>
            <DogImg />
          </div>
          <div className="column is-two-thirds-tablet">
            <div className="columns">
              <div className="column is-one-third-tablet">
                <Card icon={petCareIcon} link='/article/category/pet-care/' title="Pet Care" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
              <div className="column is-one-third-tablet">
                <Card icon={petHealthIcon} link='/article/category/pet-health/' title="Pet Health" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
              <div className="column is-one-third-tablet">
                <Card icon={petInsuranceIcon} link='/article/category/pet-insurance/' title="Pet Insurance" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third-tablet">
                <Card icon={petTrainingIcon} link='/article/category/pet-behavior-training/' title="Pet Training" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
              <div className="column is-one-third-tablet">
                <Card icon={breedLibraryIcon} link='/article/category/breeds/' title="Breed Library" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
              <div className="column is-one-third-tablet">
                <Card icon={justForFun} link='/article/category/just-for-fun/' title="Just for Fun" text="Vets, vet techs, trainers and behaviorists from industry worldwide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesList
