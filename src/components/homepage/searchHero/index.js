import React from 'react'
import {Form, Formik, Field} from 'formik'
import {navigate} from 'gatsby'
import searchImg from '../../../images/search-next.png'
const SearchHero = () => {
  return (
    <section className="search-hero-section">
      <div className="container is-widescreen form-container">
        <div className="form-wrapper">
          <h1>Search our<br /> 
          Vet-Approved Articles</h1>
          <p>Our pets are our furry children, beloved members of our family.  Pet Care, Health, Insurance, Behavior, Traning and Pet Breeds </p>
          <Formik
            initialValues={{ title: '' }}
            onSubmit={(values, actions) => {
              navigate(
                '/search', 
                {
                  state: {
                    title: values.title
                  }
                }
              )
            }}
            render={(props) => (
              <Form>
                <Field type="text" name="title" placeholder="Search for Posts..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
              </Form>
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default SearchHero
