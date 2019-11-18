import React from 'react'
import {Form, Formik, Field} from 'formik'
import {navigate} from 'gatsby'
import searchImg from '../../../images/search-next.png'
const SearchHero = () => {
  return (
    <section className="container is-fullhd search-hero-section-flex">
      <div className="form-container">
        <div className="form-wrapper">
          <h1>Search Our<br />
          Vet-Approved Articles</h1>
          <p>Our comprehensive library of informative articles covers medical diagnosis, wellness tips, breed bios, and everything in between.</p>
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
          >
            {(props) => (
              <Form>
                <Field type="text" name="title" placeholder="Search for Posts..." className="search-input" />
                <button type="submit" className="search-button">Search</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default SearchHero
