import React from "react"
import petCareIcon from "../../../images/pet-care.png"
import petHealthIcon from "../../../images/pet-health.png"
import petInsuranceIcon from "../../../images/pet-insurance.png"
import petTrainingIcon from "../../../images/pet-training.png"
import breedLibraryIcon from "../../../images/breed-library.png"
import justForFun from "../../../images/just-for-fun.png"
import Card from "./categoryCard"
import DogImg from "../../../static/images/dogImg"
const CategoriesList = () => {
  return (
    <section className="section home-page-intro">
      <div className="container">
        <div className="columns">
          <div className="column is-one-third-tablet is-one-third-fullhd home-page-intro-heading">
            <div className="intro-content">
              <h2>
                You Don’t Have To Be Human To{" "}
                <span className="highlight">Be Family</span>
              </h2>
              <p>
                Ask any pet parent. Our pets are our furry children, beloved
                members of our family. We love them dearly and we want to give
                them the best possible life.
              </p>
            </div>
            <DogImg />
          </div>
          <div className="column is-two-thirds-tablet category-cards">
            <div className="columns">
              <div className="column is-one-third-tablet">
                <Card
                  icon={petCareIcon}
                  link="/article/category/pet-care/"
                  title="Pet Care"
                  text="Tips and tricks to keep your pet happy and healthy."
                />
              </div>
              <div className="column is-one-third-tablet">
                <Card
                  icon={petHealthIcon}
                  link="/article/category/pet-health/"
                  title="Pet Health"
                  text="Research symptoms and treatment measures for common illnesses and standard procedures."
                />
              </div>
              <div className="column is-one-third-tablet">
                <Card
                  icon={petInsuranceIcon}
                  link="/article/category/pet-insurance/"
                  title="Pet Expenses"
                  text="Request a quote or shop for plans based on your personal budget and the unique needs of your pet."
                />
              </div>
            </div>
            <div className="columns">
              <div className="column is-one-third-tablet">
                <Card
                  icon={petTrainingIcon}
                  link="/article/category/pet-behavior-training/"
                  title="Pet Training"
                  text="Learn about vet-approved and humane methods to provide your pet with structure and form healthy habits."
                />
              </div>
              <div className="column is-one-third-tablet">
                <Card
                  icon={breedLibraryIcon}
                  link="/article/breed/"
                  title="Breed Guide"
                  text="Research breeds if you're planning to adopt or learn more about that special pet at home."
                />
              </div>
              <div className="column is-one-third-tablet">
                <Card
                  icon={justForFun}
                  link="/article/category/just-for-fun/"
                  title="Just for Fun"
                  text="Catch up on trendy pet names, handy products, and the latest in lighthearted news."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesList
